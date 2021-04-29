import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export function SideBarHeader(props) {
    const { icon, handleOnClickButtonHeader, title, img } = props;
    return (
        <div className="side-bar__header">
            <div className="side-bar__title">
                <img className="side-bar__img" src={img} alt="side-bar__img" />
                <span>{title}</span>
            </div>
            <div className="side-bar__header-icon" onClick={handleOnClickButtonHeader}>
                <FontAwesomeIcon icon={icon} style={{width: 21.5, height: 21.5}} />
            </div>
        </div>
    )
}
