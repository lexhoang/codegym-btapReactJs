import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState({ account: '', password: '' });

    const [textError, setTextError] = useState({ account: '', password: '' });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const cloneError = {
            account: '', password: ''
        }
        let haveError = false;
        if (user.account !== 'admin@gmail.com') {
            cloneError.account = "Tài khoản không hợp lệ!!!"
            haveError = true;
        }
        if (user.password !== 'letmein') {
            cloneError.password = "Mật khẩu không đúng!!!"
            haveError = true;
        }
        setTextError(cloneError)
        if (haveError === true) return;

        navigate('/home')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="col-4 m-5 mx-auto">
                    <div className="mb-3">
                        <label htmlFor className="form-label">Account</label>
                        <input type="text" className="form-control" placeholder='Nhập tài khoản'
                            value={user.account}
                            onChange={(e) => setUser({ ...user, account: e.target.value })}
                        />
                        <p className="text-danger"> {textError.account} </p>
                    </div>

                    <div className="mb-3">
                        <label htmlFor className="form-label">Account</label>
                        <input type="text" className="form-control" placeholder='Nhập mật khẩu'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                        <p className="text-danger"> {textError.password} </p>
                    </div>

                    <div className="mb-3">
                        <button className='btn btn-primary'>Đăng nhập</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
