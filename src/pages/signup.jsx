import React, { useState } from 'react';
import './signup.css';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic đăng ký ở đây, ví dụ gọi API
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="signup-container">
            <h2>Đăng ký</h2>
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
                
                <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Xác nhận mật khẩu của bạn"
                    required
                />
                
                <button type="submit">Đăng ký</button>
                <p>Đã có tài khoản? <a href="/login">Đăng nhập</a></p>
            </form>
        </div>
    );
}

export default SignUp;
