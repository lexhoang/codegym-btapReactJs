import '../styles/bai4.css'

export default function FormLogin() {
    const Element =
        <div className="container d-flex align-items-center text-center">
            <div className="form-signin">
                <form>
                    <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
                        <label>Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-primary w-75" type="submit">Sign in</button>
                    </div>
                    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                </form>
            </div>
        </div>
    return Element
}