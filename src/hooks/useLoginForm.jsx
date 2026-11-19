import { useState } from "react";
import _ from "lodash";
import { validateLogin } from "../utils/validations";

const initialForm = {
  mobile: "",
  password: "",
};

const initialShake = {
  mobile: 0,
  password: 0,
};

const useLoginForm = (onSubmit) => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(initialShake);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const validationErrors = validateLogin(form);

    setErrors(validationErrors);

    if (!_.isEmpty(validationErrors)) {
      setShake((prev) => ({
        ...prev,
        ..._.mapValues(validationErrors, (_, key) => prev[key] + 1),
      }));

      return;
    }

    setLoading(true);

    try {
      await onSubmit(form);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setShake(initialShake);
  };

  return {
    form,
    loading,
    errors,
    shake,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useLoginForm;