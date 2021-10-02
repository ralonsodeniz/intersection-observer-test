import { useState, useEffect } from 'react';
import { parser } from '../utils/parser';

export const useParseItem = item => {
  const [parsedItem, setParsedItem] = useState(null);

  useEffect(() => {
    item && setParsedItem(parser(item));
  }, [item]);

  return parsedItem;
};
