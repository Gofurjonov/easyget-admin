import React from 'react';
import Input from '../Input/Input';
import Button from '../button/Button';

const NewsubModal = () => {
    return (
        <div>
            <div className="modal__backdrop">
                    <div className="editbox">
                        <div className="editbox__top">
                            <div className="editbox__top__title">
                               <div><h1 className='editbox__top__title__text'>Newsub category</h1></div> 
                                <button className="editbox__top__title__button">
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
                            <div className="editbox__top__input">
                                <Input  placeholder='https://i1.sndcdn.com/artworks-000273399...' label={true}/>
                                <Input  placeholder='Subcategory name' label={true}/>
                            </div>
                        </div>
                        <div className="editbox__bottom">
                        <Button text={"Cancel"} 
                            appereans={"neutral"}
                            className={"button_tertiary editbox__bottom__btn"}/>
                        <Button text={"Save"} 
                            appereans={"regular"}
                            className={"button_primary editbox__bottom__btn"}/>
                        </div>
                    </div>
              </div>
        </div>
    );
}

export default NewsubModal;
