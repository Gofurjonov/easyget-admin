import { useState, useRef } from "react";
import React from "react";
import axios from "axios";

export default function AddProductModal({ onClose }) {
    const fileInputRef = useRef(null);
    const handleCustomFileUpload = () => {
        fileInputRef.current.click();
      };
    
    const [name, setName] = useState('');
    const [info, setInfo] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [photo, setPhoto] = useState(null);
    const categoryId = 2
    const company = [3]
    const count = 1
    const availability = true

    const handlePhotoChange = (e) => {
        const selectedPhoto = e.target.files[0];
        setPhoto(selectedPhoto)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('info', info);
            formData.append('volume', quantity);
            formData.append('cost', price);
            formData.append('images', photo);
            formData.append('category_id', categoryId);
            formData.append('company', company);
            formData.append('count', count);
            formData.append('availability', availability);

            const response = await axios.post('https://api.dassyor.uz/product/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem('token')
                },
            });

            console.log("it worked")

            setName('');
            setQuantity('');
            setPrice('');
            setPhoto(null);
            setInfo('');

            onClose()
        } catch (error){
            console.error('Error adding product:', error);
        }
    };


    return (
        <>
            <div className="overlay">
                <div className="add-product-modal">
                    <div className="add-product-modal__header">
                        <p>Add product</p>
                        <svg onClick={onClose} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.125 11L11.125 1M1.125 1L11.125 11" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="add-product-modal__body">
                        <div className="add-product-modal__body__left" onClick={handleCustomFileUpload}>
                            <input type="file" ref={fileInputRef} onChange={handlePhotoChange}/>
                                <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 27.75L13.2877 15.7123C13.7752 15.2248 14.3539 14.8381 14.9909 14.5743C15.6279 14.3104 16.3106 14.1746 17 14.1746C17.6894 14.1746 18.3721 14.3104 19.0091 14.5743C19.6461 14.8381 20.2248 15.2248 20.7123 15.7123L32.75 27.75M29.25 24.25L32.5377 20.9623C33.0252 20.4748 33.6039 20.0881 34.2409 19.8243C34.8779 19.5604 35.5606 19.4246 36.25 19.4246C36.9394 19.4246 37.6221 19.5604 38.2591 19.8243C38.8961 20.0881 39.4748 20.4748 39.9623 20.9623L46.75 27.75M4.75 36.5H43.25C44.1783 36.5 45.0685 36.1312 45.7249 35.4749C46.3812 34.8185 46.75 33.9283 46.75 33V5C46.75 4.07174 46.3812 3.1815 45.7249 2.52513C45.0685 1.86875 44.1783 1.5 43.25 1.5H4.75C3.82174 1.5 2.9315 1.86875 2.27513 2.52513C1.61875 3.1815 1.25 4.07174 1.25 5V33C1.25 33.9283 1.61875 34.8185 2.27513 35.4749C2.9315 36.1312 3.82174 36.5 4.75 36.5ZM29.25 10.25H29.2687V10.2687H29.25V10.25ZM30.125 10.25C30.125 10.4821 30.0328 10.7046 29.8687 10.8687C29.7046 11.0328 29.4821 11.125 29.25 11.125C29.0179 11.125 28.7954 11.0328 28.6313 10.8687C28.4672 10.7046 28.375 10.4821 28.375 10.25C28.375 10.0179 28.4672 9.79538 28.6313 9.63128C28.7954 9.46719 29.0179 9.375 29.25 9.375C29.4821 9.375 29.7046 9.46719 29.8687 9.63128C30.0328 9.79538 30.125 10.0179 30.125 10.25Z" stroke="#D1D5DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            <p>Click here to upload image</p>
                        </div>
                        <div className="add-product-modal__body__right">
                            <ul>
                                <li>
                                    <input type="text" placeholder="Product name" id="" onChange={(e) => setName(e.target.value)}/>
                                </li>
                                <li>
                                    <input type="text" placeholder="Product info..." id="" onChange={(e) => setInfo(e.target.value)}/>
                                </li>
                                <li>
                                    <input type="text" placeholder="120 грамм" id="" onChange={(e) => setQuantity(e.target.value)}/>
                                </li>
                                <li>
                                    <input type="text" placeholder="12 000" id="" onChange={(e) => setPrice(e.target.value)}/>
                                    <span class="fixed-placeholder">Сум</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="add-product-modal__button-groups">
                        <button onClick={onClose} className="add-product-modal__button-groups__close">
                            <p>Cancel</p>
                        </button>
                        <button className="add-product-modal__button-groups__add" onClick={handleSubmit}>
                            <p>Add</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}