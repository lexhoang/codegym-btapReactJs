import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const styleHeader = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#00000063",
    padding: "16px"
}

const styleNavLink = ({ isActive }) => ({
    backgroundColor: isActive ? "orange" : "white",
    padding: '8px 20px',
    borderRadius: '6px',
    color: isActive ? "white" : "black",
    fontWeight: 'bold',
    letterSpacing: '2px'
})

export default function HeaderComp() {
    return (
        <>
            <div style={styleHeader}>
                <NavLink style={styleNavLink} to='/' >Bài 1</NavLink>
                <NavLink style={styleNavLink} to='/bai2' >Bài 2</NavLink>
                <NavLink style={styleNavLink} to='/bai3' >Bài 3</NavLink>
                <NavLink style={styleNavLink} to='/bai4' >Bài 4</NavLink>
            </div>
            <Outlet />
        </>
    )
}
