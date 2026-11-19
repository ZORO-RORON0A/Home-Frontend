import _ from "lodash";

export const validateLogin = (form) => {
  const errors = {};

  if (_.isEmpty(_.trim(form.mobile))) {
    errors.mobile = "Mobile number is required.";
  }

  if (_.isEmpty(form.password)) {
    errors.password = "Password is required.";
  }

  return errors;
};