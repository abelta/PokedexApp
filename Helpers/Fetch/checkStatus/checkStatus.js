const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText || 'Not found.');
  error.response = response;
  throw error;
};

export default checkStatus;
