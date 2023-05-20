export function handleRequestError(error) {
  this.error = error.message;
  setTimeout(()=> {
    this.error = ''
  },5000)
}


import { debounce } from 'lodash';


export const debouncedHandleRequestError = debounce(handleRequestError, 5000);