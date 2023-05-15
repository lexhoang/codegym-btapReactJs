import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/header.css'

const styleNavLink = ({ isActive }) => ({
    backgroundColor: isActive ? "orange" : "white",
    padding: '8px 20px',
    borderRadius: '6px',
    color: isActive ? "white" : "black",
    fontWeight: 'bold',
    letterSpacing: '2px'
})

export default function LayoutComp() {
    return (
        <>
            <div className="header">
                <NavLink style={styleNavLink} to='/' >Bài 1</NavLink>
                <NavLink style={styleNavLink} to='/bai2' >Bài 2</NavLink>
                <NavLink style={styleNavLink} to='/bai3' >Bài 3</NavLink>
            </div>
            <Outlet />
        </>
    )
}
