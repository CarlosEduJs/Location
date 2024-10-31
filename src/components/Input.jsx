const Input = ({value, onChange}) => {
    const handleInputChange = (event) => {
        const { value } = event.target;
        const onlyNumbers = value.replace(/\D/g, '');
        const formattedCep = onlyNumbers.replace(/(\d{5})(\d)/, '$1-$2');
        onChange(formattedCep);
      };
  return (
    <input
      className="border rounded-2xl outline-none py-2 px-3 text-xs"
      type="text"
      value={value}
      onChange={handleInputChange}
      maxLength="9"
      placeholder="00000-000"
    />
  );
};

export default Input;
