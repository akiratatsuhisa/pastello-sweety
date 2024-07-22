import { createElement, ReactNode } from 'react';

export interface ITypography<T extends keyof JSX.IntrinsicElements> {
  as?: T;
  children: ReactNode;
}

export function Typography<T extends keyof JSX.IntrinsicElements>({
  as,
  children,
  ...props
}: ITypography<T> & JSX.IntrinsicElements[T]) {
  return createElement(as ?? 'div', props, children);
}
