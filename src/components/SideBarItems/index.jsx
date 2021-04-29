import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export default function SideBarItems(props) {
    const { text, icon } = props;
    return (
        <div className="side-bar__items">
            <FontAwesomeIcon icon={icon} style={{ height: "21.5px", width: "21.5px" }} />
            <p className="side-bar__items-text">{text}</p>
            <p className="side-bar__items-text hidden">{text}</p>
        </div>
    )
}
