const packageUp = (formData) => {
  const newObj = {};
  Object.entries(formData)
    .map(([key, val]) => [key, val.value])
    .forEach(([key, val]) => { newObj[key] = val; });
  return newObj;
};

export default packageUp;