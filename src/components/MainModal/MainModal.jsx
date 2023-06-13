import { useState } from "react";
import React from "react";

export default function MainModal({ children, onClose, secondButtonFunction, secondButtonText, secondButtonStyle }) {

    return (
        <>
            <div className="overlay">
                <div className="mainModal">
                {children}
                    <div className="mainModal__button-group">
                        <button onClick={onClose} className="button-group__cancel">
                            Cancel
                        </button>
                        <button className={`mainModal-button-group__second-button ${secondButtonStyle}`} onClick={secondButtonFunction}>
                            {secondButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}