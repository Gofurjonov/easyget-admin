import React, { useState, useEffect } from "react";
import AddProductModal from "../../components/AddProductModal/AddProductModal";
import Button from "../../components/button/Button";
import Layout from "../../components/Layout/Layout";

export default function Subcategory() {
    const [showAddProductModal, setShowAddProductModal] = useState(false);

    const handleShowAddProductModal = () => {
        setShowAddProductModal(true)
    }

    const handleCloseAddProductModal = () => {
        setShowAddProductModal(false)
    }

    return (
        <>
            {showAddProductModal && (<AddProductModal onClose={handleCloseAddProductModal} />)}
            <div className="main-subcategory-window">
                <div className="main-subcategory-window__page">
                    <div className="main-subcategory-window__page__header">
                        <p>Subcategory name</p>
                        <div className="main-subcategory-window__page__header__button-group">
                            <button className="main-subcategory-window__page__header__button-group__edit">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0517 2.73913L14.4575 1.33246C14.7506 1.0394 15.148 0.874756 15.5625 0.874756C15.977 0.874756 16.3744 1.0394 16.6675 1.33246C16.9606 1.62553 17.1252 2.02301 17.1252 2.43746C17.1252 2.85192 16.9606 3.2494 16.6675 3.54246L7.81833 12.3916C7.37777 12.8319 6.83447 13.1556 6.2375 13.3333L4 14L4.66667 11.7625C4.8444 11.1655 5.16803 10.6222 5.60833 10.1816L13.0517 2.73913ZM13.0517 2.73913L15.25 4.93746M14 10.6666V14.625C14 15.1222 13.8025 15.5992 13.4508 15.9508C13.0992 16.3024 12.6223 16.5 12.125 16.5H3.375C2.87772 16.5 2.40081 16.3024 2.04917 15.9508C1.69754 15.5992 1.5 15.1222 1.5 14.625V5.87496C1.5 5.37768 1.69754 4.90077 2.04917 4.54914C2.40081 4.19751 2.87772 3.99996 3.375 3.99996H7.33333" stroke="#23AA49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Edit subcategory</p>
                            </button>
                            <button className="main-subcategory-window__page__header__button-group__delete">
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2833 6.49995L9.995 13.9999M6.005 13.9999L5.71667 6.49995M14.0233 3.82495C14.3083 3.86828 14.5917 3.91411 14.875 3.96328M14.0233 3.82495L13.1333 15.3941C13.097 15.8651 12.8842 16.3051 12.5375 16.626C12.1908 16.9469 11.7358 17.1251 11.2633 17.1249H4.73667C4.26425 17.1251 3.80919 16.9469 3.46248 16.626C3.11578 16.3051 2.90299 15.8651 2.86667 15.3941L1.97667 3.82495M14.0233 3.82495C13.0616 3.67954 12.0948 3.56919 11.125 3.49411M1.97667 3.82495C1.69167 3.86745 1.40833 3.91328 1.125 3.96245M1.97667 3.82495C2.93844 3.67955 3.9052 3.56919 4.875 3.49411M11.125 3.49411V2.73078C11.125 1.74745 10.3667 0.927446 9.38333 0.896613C8.46135 0.867145 7.53865 0.867145 6.61667 0.896613C5.63333 0.927446 4.875 1.74828 4.875 2.73078V3.49411M11.125 3.49411C9.04477 3.33334 6.95523 3.33334 4.875 3.49411" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Delete subcategory</p>
                            </button>
                            <button className="main-subcategory-window__page__header__button-group__new" onClick={handleShowAddProductModal}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 1V11M11 6H1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>New product</p>
                            </button>
                        </div>
                    </div>
                    <div className="main-subcategory-window__page__title">
                        <div className="main-subcategory-window__page__title__image">
                            <p>Image</p>
                        </div>
                        <div className="main-subcategory-window__page__title__name">
                            <p>Name</p>
                        </div>
                        <div className="main-subcategory-window__page__title__volume">
                            <p>Volume</p>
                        </div>
                        <div className="main-subcategory-window__page__title__info">
                            <p>Info</p>
                        </div>
                        <div className="main-subcategory-window__page__title__price">
                            <p>Price</p>
                        </div>
                        <div className="main-subcategory-window__page__title__action">
                            <p>Action</p>
                        </div>
                        <div className="main-subcategory-window__page__title__action">
                            <p>Action</p>
                        </div>
                    </div>
                    <div className="main-subcategory-window__page__product-list">

                    </div>
                </div>
            </div>
        </>
    )
}