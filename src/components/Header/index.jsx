import React from 'react'
import logo from "../../logo.svg";

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <nav className="nav">
                <div className="item">Menu1</div>
                <div className="item">Menu2</div>
                <div className="item">Menu3</div>
            </nav>
        </div>
    )
}
