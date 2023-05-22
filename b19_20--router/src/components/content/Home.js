import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="text-center">
            <h1 className=" mt-5 text-danger fst-italic font-monospace">Home To Chưa</h1>
            <Link to="/employees">
                <button className="my-4 btn btn-outline-primary">Vào trang Employees</button>
            </Link>
        </div>
    )
}
