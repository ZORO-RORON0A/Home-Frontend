const FormFieldset = ({ loading, children, ...props }) => {
  return (
    <fieldset disabled={loading} {...props}>
      {children}
    </fieldset>
  );
};

export default FormFieldset;