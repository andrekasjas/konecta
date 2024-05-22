import { useState } from "react";

export const useForm =({
  initialState,
  submitCallback
}) => {

  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value, type } = target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? !form[name] : value
    })
  }

  const changeValueForm = (name, value) => {
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    submitCallback?.(form);
  }

  const resetForm = () => {
    setForm(initialState);
    setError(undefined);
  };

  return {
    form,
    resetForm,
    changeValueForm,
    handleChange,
    handleSubmit
  }
}