import React, { ComponentType, FC, PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styles';

const AllTheProviders: FC = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

const createTest = <P extends unknown>(Component: ComponentType<PropsWithChildren<P>>, defaultProps: P, renderFunction = customRender) => {
  let result: RenderResult;
  return {
    result: () => result,
    render: (props: Partial<P> = {}) => {
      result = renderFunction(<Component {...defaultProps} {...props} />);
    },
  };
};

export * from '@testing-library/react';
export { customRender as render, createTest };
