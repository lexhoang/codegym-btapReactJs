import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.css'

const styleNavLink = ({ isActive }) => ({
    backgroundColor: isActive ? "orange" : "white",
    padding: '8px 20px',
    borderRadius: '6px',
    color: isActive ? "white" : "black",
    fontWeight: 'bold',
    letterSpacing: '2px'
})

export default function Header() {
    return (
        <div className="header">
            <NavLink style={styleNavLink} to='/' >Bài 1</NavLink>
            <NavLink style={styleNavLink} to='/bai2' >Bài 2</NavLink>
            <NavLink style={styleNavLink} to='/bai3' >Bài 3</NavLink>
            <NavLink style={styleNavLink} to='/bai4' >Bài 4</NavLink>
            <NavLink style={styleNavLink} to='/bai5' >Bài 5</NavLink>
        </div>
    )
}
