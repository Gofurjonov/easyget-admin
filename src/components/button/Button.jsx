import React from "react";
export default function Button(props) {

    // apperensdan disabled tekshirvotdi
    return (
        <div className={props.appereans || ""}>
            <button disabled={props.disabled} onClick={props.onClick} type={props.type || "button"} className={props.size == "large" ? `${props.className}  .button_large button` : props.size == "small" ? `${props.className} .button_small button` : `${props.className} .button_medium button`}>{props.icon && <span className="btn__icon"><img src={props.icon} alt="icon" /></span>}{props.text}</button>
        </div>
    )

}