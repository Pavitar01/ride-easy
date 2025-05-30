import { ReactElement, isValidElement } from 'react';
import { List, ListRowProps } from 'react-virtualized';
import React from 'react';

type ListboxComponentProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  role: string;
};

const ListboxComponent = React.forwardRef<
  HTMLDivElement,
  ListboxComponentProps
>((props, ref) => {
  const { children, role, ...other } = props;
  const items = React.Children.toArray(children) as ReactElement[];
  const itemCount = items.length;
  const itemSize = 40;
  const listHeight = itemSize * itemCount;

  return (
    <div ref={ref}>
      <div {...other}>
        <List
          height={Math.min(listHeight, 250)}
          width={300}
          rowHeight={itemSize}
          overscanCount={5}
          rowCount={itemCount}
          rowRenderer={(listRowProps: ListRowProps) => {
            if (isValidElement(items[listRowProps.index])) {
              return React.cloneElement(items[listRowProps.index], {
                style: listRowProps.style,
              });
            }
            return null;
          }}
          role={role}
        />
      </div>
    </div>
  );
});

export default ListboxComponent;
