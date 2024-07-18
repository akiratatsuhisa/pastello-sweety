import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';

import { FilterKey, FilterProps } from './data-loader.types';

@Injectable({ scope: Scope.REQUEST })
export class DataLoaderService {
  private readonly loaders: Map<string, DataLoader<any, any>> = new Map();

  getDataLoader<F extends FilterProps, K, V, C = K>(
    filterKey: FilterKey<F>,
    batchLoadFn: DataLoader.BatchLoadFn<K, V>,
    options?: DataLoader.Options<K, V, C>,
  ) {
    const key = JSON.stringify(filterKey);

    if (this.loaders.has(key)) {
      return this.loaders.get(key) as DataLoader<K, V, C>;
    }

    const loader = new DataLoader<K, V, C>(batchLoadFn, options);

    this.loaders.set(key, loader);

    return loader;
  }
}
