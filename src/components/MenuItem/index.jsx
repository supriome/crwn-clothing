import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./index.scss"

function MenuItem({title, image, url, size = "large", history}) {
    return (
        <Link to={url} className={`${size} menu-item`}>
            <div className="background-image"
                style={{ backgroundImage: `url(${image})`}}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </Link>
    )
}

export default withRouter(MenuItem)