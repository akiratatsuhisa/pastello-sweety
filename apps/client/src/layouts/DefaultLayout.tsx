import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export const DefaultLayout: FC<{ top?: ReactNode; bottom?: ReactNode }> = ({
  top,
  bottom,
}) => {
  return (
    <div className="flex min-h-dvh max-w-full flex-col">
      {top}

      <div className="flex-1">
        <Outlet />
      </div>

      {bottom}
    </div>
  );
};
