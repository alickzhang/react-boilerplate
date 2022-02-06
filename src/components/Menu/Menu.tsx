import React, { FC, useState } from 'react';
import styled, { css } from 'styles';

const List = styled.ul``;

const Container = styled.li`
  list-style: none;
`;

const Item = styled.span<{ active?: boolean }>`
  padding: ${({ theme }) => theme.size.spacing.sm}px;
  display: flex;
  justify-content: space-between;
  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.palette.greys[25]};
    `}
`;

const Label = styled.div``;

interface ArrowProps {
  toggle?: boolean;
}

const Arrow = styled.span<ArrowProps>`
  display: flex;
  height: 25px;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000;
    transform: ${(props) => (props.toggle ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export interface MenuData {
  label: string;
  submenu?: MenuData[];
}

interface MenuItemProps {
  data: MenuData;
  id: string;
}

interface SubmenuProps {
  data: MenuData[];
  open: boolean;
  id: string;
}

interface MenuProps {
  menus: MenuData[];
  defaultActive?: string;
}

export const Menu: FC<MenuProps> = ({ menus, defaultActive }) => {
  const [activeMenu, setActiveMenu] = useState<string | undefined>(defaultActive);

  const MenuItem = ({ data, id }: MenuItemProps) => (
    <Container>
      <Item active={activeMenu === id}>
        <Label onClick={() => setActiveMenu(id)}>
          {data.label} - {id}
        </Label>
        {data.submenu && (
          <Arrow
            key={`${id}`}
            data-testid="arrow"
            onClick={() => {
              if (activeMenu === id) {
                const index = activeMenu.lastIndexOf('.');
                setActiveMenu(activeMenu.slice(0, index));
              } else {
                setActiveMenu(id);
              }
            }}
          />
        )}
      </Item>
      {data.submenu && <Submenu data={data.submenu} open={!!activeMenu?.startsWith(id)} id={id} />}
    </Container>
  );

  const Submenu = ({ data, open, id }: SubmenuProps) => {
    if (!open) {
      return null;
    }

    return (
      <List>
        {data.map((item, index) => (
          <MenuItem key={`${id}_${item.label}`} data={item} id={`${id}.${index}`} />
        ))}
      </List>
    );
  };

  return (
    <div>
      {menus.map((item, index) => {
        const id = `${index}`;
        return <MenuItem key={id} id={`${index}`} data={item} />;
      })}
    </div>
  );
};
