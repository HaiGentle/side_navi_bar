import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export default function SideBarHeaderContain(props) {
    const { icon, handleOnClickButtonHeader, title, img, isOpen } = props;
    return (
        <div className="side-bar__header">
            {isOpen && <div>
                <img className="side-bar__img" src={img} alt="side-bar__img" />
                <span>{title}</span>
            </div>}
            <div className="side-bar__header-icon" onClick={handleOnClickButtonHeader}>
                <FontAwesomeIcon icon={icon} style={{width: "21.5px", height: "21.5px"}} />
            </div>
        </div>
    )
}
