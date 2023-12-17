const quotesForString = (data) => {
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return data;
};

export default quotesForString;
