import React from 'react';
import { fireEvent, render } from 'shared';
import { Menu, MenuData } from '.';

const menus: MenuData[] = [
  {
    label: 'Menu 1',
  },
  {
    label: 'Menu 2',
    submenu: [
      {
        label: 'Sub Menu 1',
      },
      {
        label: 'Sub Menu 2',
      },
    ],
  },
  {
    label: 'Menu 3',
    submenu: [
      {
        label: 'Sub Menu 1',
        submenu: [
          {
            label: 'Boom 1',
          },
          {
            label: 'Boom 2',
          },
        ],
      },
      {
        label: 'Sub Menu 2',
        submenu: [
          {
            label: 'Deep 1',
          },
          {
            label: 'Deep 2',
            submenu: [
              {
                label: 'Lorem 1',
              },
              {
                label: 'Lorem 2',
                submenu: [
                  {
                    label: 'Super Deep',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Sub Menu 3',
      },
      {
        label: 'Sub Menu 4',
        submenu: [
          {
            label: 'Last 1',
          },
          {
            label: 'Last 2',
          },
          {
            label: 'Last 3',
          },
        ],
      },
    ],
  },
  {
    label: 'Menu 4',
  },
];

describe('Menu test', () => {
  test('render initial menu', () => {
    const { getByText } = render(<Menu menus={menus} />);
    const element = getByText(/Menu 4/i);
    expect(element).toBeInTheDocument();
  });

  test('expand menu when submenu clicked', () => {
    const { getAllByTestId, getByText } = render(<Menu menus={menus} />);
    const elements = getAllByTestId('arrow');
    fireEvent.click(elements[0]);
    expect(getByText(/Sub Menu 1/i)).toBeInTheDocument();
  });
});
