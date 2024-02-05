const InputTag = (props) => {
  const {
    placeholder,
    name,
    value,
    type,
    onChange,
    onClick,
    className,
    Process,
  } = props;
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        type={type}
        onClick={onClick}
      />

      {Process && <p>{Process}</p>}
    </>
  );
};
export default InputTag;
