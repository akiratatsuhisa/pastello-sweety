import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export const DefaultLayout: FC<{ top?: ReactNode; bottom?: ReactNode }> = ({
  top,
  bottom,
}) => {
  return (
    <div className=" flex flex-col min-h-dvh max-w-full bg-remy-800">
      {top}

      <div className="flex-1">
        <Outlet />
      </div>

      {bottom}
    </div>
  );
};
