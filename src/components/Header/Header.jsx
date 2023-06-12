import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header__title">
                    <h1 className='header__title__name'>Categories</h1>
                </div>
                <div className="header__dropdown">
                <select name="select" className='header__dropdown__select'>
                    <option value="value1">Ўзбекча</option>
                    <option value="value2" >Русский</option>
                    <option value="value3">English</option>
                </select>
                </div>
            </div>

        </div>
    );
}

export default Header;
