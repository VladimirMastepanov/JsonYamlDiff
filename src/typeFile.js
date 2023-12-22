const typeFile = (path) => {
  if (path.endsWith('json')) {
    return 'json';
  }
  if (path.endsWith('yaml') || path.endsWith('yml')) {
    return 'yaml';
  }
  return 'Unknown file format';
};

export default typeFile;
