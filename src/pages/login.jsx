import React, { useState } from 'react';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic đăng nhập ở đây, ví dụ gọi API
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h2>ĐĂNG NHẬP</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email của bạn" 
                    required 
                />
                
                <label htmlFor="password">Mật khẩu</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu của bạn" 
                    required 
                />
                
                <button type="submit">Đăng nhập</button>
                <p>Chưa có tài khoản? <a href="/signup">Đăng ký ngay</a></p>
            </form>
        </div>
    );
}

export default Login;
