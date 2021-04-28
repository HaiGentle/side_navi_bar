import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export default function SideBarItemsCpn(props) {
    const { text, icon, isOpen } = props;
    return (
        <div className="side-bar__items">
            <FontAwesomeIcon icon={icon} style={{ height: "21.5px", width: "21.5px" }} />
            {isOpen && <p className="side-bar__items-text">{text}</p>}
            <p className="side-bar__items-text --hidden">{text}</p>
        </div>
    )
}
