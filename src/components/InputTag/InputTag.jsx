const InputTag = (props) => {
    const {
      placeholder,
      name,
      value,
      type,
      onChange,
      onClick,
      className,Process,disabled,style
    }=props
    return (  
      <div style={style}>
          <input 
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
          disabled={disabled}
          type={type}
          onClick={onClick}
          style={{cursor:!disabled?"pointer":"not-allowed"}}
          /> {Process}
           
          </div>
    )
  }
  export default InputTag;

