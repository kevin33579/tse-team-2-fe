import "./Input.css";

const Input = ({ placeholder, inputName }) => {
  return (
    <>
      <div>
        <input className="form__input" placeholder={placeholder} name={inputName} onChange={onchange} />
      </div>
    </>
  );
};

export default Input;
