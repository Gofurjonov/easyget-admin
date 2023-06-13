import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const addPost = async (login, password) => {
        let response = await fetch('https://api.dassyor.uz/admin/login', {
            method: 'POST',
            body: JSON.stringify({
                login: login,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        let data = await response.json();
        setLogin('')
        setPassword('')
        if (data.status) {
            localStorage.setItem('token', data.token);

            console.log('Login successful');
            navigate('/home');
          } else {
            console.log('Invalid credentials');
          }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        addPost(login, password)
        };
    return (
        <>
            <div className="login-card__page">
                <form action="" className="login-card" autoComplete="off">
                    <h4 className='login-card__title' >Login to EasyGet-admin page</h4>
                    <p className='login-card__text'>Welcome back! Log in to your account</p>
                    <div className="login-card__all-inputs">
                        <div className="login-card__label">
                            <label htmlFor="email" className='login-card__email-text'>Email:</label>
                            <input placeholder="Email" type="email" name="email" id="email" autoComplete="off"  value={login} onChange={(e) => setLogin(e.target.value)}/>
                        </div>
                        <div className="login-card__label">
                            <label htmlFor="password">Password:</label>
                            <input placeholder="Password" type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="login-card__submit-button-container">
                        <button type="submit" onClick={handleLogin}className="login-card__submit-button">Log in</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;