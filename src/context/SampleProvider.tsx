import React, { createContext, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Message } from 'shared';

export interface SampleData {
  id: string;
  name: string;
}

interface SampleContextModel {
  data: SampleData[];
  addData: (data: SampleData) => Promise<string>;
}

export const SampleContext = createContext<SampleContextModel>({} as SampleContextModel);

export const SampleProvider: FC = ({ children }) => {
  const [data, setData] = useState<SampleData[]>([]);

  const fetchData = async () => {
    const res = await axios.get<never, AxiosResponse<{ results: SampleData[] }>>(`api/data`);
    setData(res.data.results);
  };

  const addData = useCallback(async (newData: SampleData) => {
    try {
      await axios.post(`api/data`, newData);
      await fetchData();
      return Promise.resolve(Message.Success.SampleSuccessMessage);
    } catch (err) {
      return Promise.reject(Message.Error.Common);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const value = useMemo(() => ({ data, addData }), [data, addData]);

  return <SampleContext.Provider value={value}>{children}</SampleContext.Provider>;
};

export const useSampleData = () => useContext(SampleContext);
