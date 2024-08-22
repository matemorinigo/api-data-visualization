import axios from 'axios';
import {BASE_URL} from './constants';

export function removeDuplicatesById(array) {
  const seen = new Set();
  return array.filter(item => {
    const duplicate = seen.has(item.id);
    seen.add(item.id);
    return !duplicate;
  });
}




