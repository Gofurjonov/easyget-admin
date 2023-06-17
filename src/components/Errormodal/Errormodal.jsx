import React from "react";
import Delete from "../../assets/images/not.png";
import Button from "../button/Button"

const Errormodal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div>
      <div className="modal__backdrop">
        <div className="deletebox">
          <div className="deletebox__top">
            <div className="deletebox__top__image">
              <img src={Delete} alt="" />
              <button className="deletebox__top__image__button" onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="deletebox__top__title">
                <h1 className="deletebox__top__title__text">Delete main category?</h1>
                <p className="deletebox__top__title__comment">Are you sure you want to delete the main category? Deleting the main category will delete all sub-categories that are in the main category.</p>
            </div>
          </div>
          <div className="deletebox__bottom">
            <Button text={"Cancel"} 
                appereans={"neutral"}
                className={"button_tertiary deletebox__bottom__btn"} onClick={onClose}/>
            <Button text={"Delete"} 
                appereans={"negative"}
                className={"button_primary deletebox__bottom__btn"} onClick={() => {
                  onClose();
                }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errormodal;
