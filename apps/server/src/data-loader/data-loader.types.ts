export const rowNumerAlias = 'row_number';

export type FilterProps = Record<string, any>;

export type FilterKey<F extends Record<string, any> = Record<string, any>> = {
  __key: string;
} & F;
