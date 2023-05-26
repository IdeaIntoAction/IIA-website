export function handleRequestError(error) {
  this.error = error.message;
  setTimeout(() => {
    this.error = '';
  }, 5000);
}
