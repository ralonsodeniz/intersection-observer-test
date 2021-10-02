import { unwantedProps, firstProps } from '../enums';
import { isUrl } from './is-url';

export const parser = item =>
  Object.entries(item).reduce((accumulator, [key, value]) => {
    if (
      unwantedProps.some(prop => prop === key) ||
      typeof value === 'object' ||
      isUrl(value)
    )
      return accumulator;
    const parsedKey = key.replaceAll('_', ' ');
    return firstProps.some(prop => prop === key)
      ? [{ attribute: parsedKey, value }, ...accumulator]
      : [...accumulator, { attribute: parsedKey, value }];
  }, []);
