export function handleRequestError(error) {
    setInterval(() => {
      this.error = '';
    }, 5000);
    this.error = error.message;
}