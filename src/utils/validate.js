const validate = (formData) => {
  const testedFormData = { ...formData };
  Object.entries(formData).forEach(([key, val]) => {
    testedFormData[key].error = false;
    if (val.required && (!val.value || !val.value === '')) {
      testedFormData[key].error = 'This field is required';
      return false;
    }
    if (key === 'email') {
      // email validation
      const regex = RegExp(
        // eslint-disable-next-line
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
      if (!regex.test(val.value)) {
        testedFormData[key].error = 'Please enter a valid email';
      }
    }

    if (key === 'phone') {
      // phone validation
      if (val.value === '') return false;
      const phone = val.value.replace(/[^0-9]/, '');
      // strip to only numbers
      if (phone.split('').length !== 10) {
        testedFormData[key].error = 'Please enter a valid phone number';
        return false;
      }
      // should be ten
    }

    return true;
  });

  return testedFormData;
};

export default validate;
