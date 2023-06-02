export function catchError(error) {
  this.error = error.message;
  setTimeout(() => {
    this.error = '';
  }, 5000);
}
