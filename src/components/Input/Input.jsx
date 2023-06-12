import { useState } from "react";
import erroricon from "../../assets/images/error-icon.svg"

function Input(props) {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState("");
    
    const heandleFocus = () => {
        setIsFocused(true);
    }
    const heandleBlur = () => {
        setIsFocused(false);
    }


    return ( 
        <>
            <div className="input" >    
                <div className={"input__box " + (props.error ? "input__box-error " : props.value ? "input__required " : "") + (props.error && props.value ? "input__error-for-after " : "") + (isFocused ? "input__box--focused input__error-for-after" : "")  + (props.required && "input__required-box")}>
                    {props.label && <p className={"input__label " + (props.value ? "d-block " : "d-none ") + (props.value && props.icon ? "input__label-icon" : "")}>{props.placeholder} {props.required && <b>*</b>}</p>}
                    <span className={props.icon ? "input__icon" : ""}>
                        <img src={props.icon} alt="" />
                    </span>
                    <input required={props.required} className={props.value && props.label ? "input__input-lable" : "input__qidiruv"} type={props.type || "text"} onChange={props.onChange} placeholder={props.placeholder} 
                    onFocus={heandleFocus} onBlur={heandleBlur}/>
                </div>
                <div className="input__error-div">
                    {props.error && <span className="input__error-icon"><img src={erroricon} alt="img" /></span>}
                    {props.error && <sapn className="input__error">{props.error}</sapn>}
                </div>
            </div>
        </>
    );
}

export default Input;