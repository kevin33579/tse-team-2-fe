import "./FormInput.css";

const FormInput = ({ placeholder, inputName, onclick}) => {
  return (
    <>
      <div>
        <input className="form__input" placeholder={placeholder} name={inputName} onClick= {onclick}/>
      </div>
    </>
  );
};

export default FormInput;