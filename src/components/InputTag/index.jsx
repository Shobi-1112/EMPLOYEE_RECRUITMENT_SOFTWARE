import "./Input.scss"

const InputTag = (props) => {
  const {
    placeholder,
    name,
    value,
    type,
    onChange,
    onClick,
    className,
    lable
  } = props;
  return (
    <div className="common-input">
    <label>{lable}</label>
      <input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        type={type}
        onClick={onClick}    
      />
    
    </div>
  );
};
export default InputTag;
