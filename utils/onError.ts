import { SyntheticEvent } from 'react';

export const onError = (event: SyntheticEvent<HTMLImageElement>) => {
  if (event.target instanceof HTMLImageElement)
    event.target.src = '/images/default-gem.webp';
};
