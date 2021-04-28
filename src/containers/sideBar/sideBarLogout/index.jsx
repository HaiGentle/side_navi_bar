import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export default function SideBarLogoutContain(props) {
    const { avt, name, icon, isOpen } = props;
    return (
        <div className="side-bar__logout">
            {isOpen && <img src={avt} alt="side-bar__avt" className="side-bar__avt" />}
            {isOpen && <span className="side-bar__name">{name}</span>}
            <div className="side-bar__logout-icon" >
                <FontAwesomeIcon icon={icon} style={{width: "21.5px", height: "21.5px"}} />
            </div>
        </div>
    )
}
