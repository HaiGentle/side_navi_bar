import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export default function SideBarLogout(props) {
    const { avt, name, icon } = props;
    return (
        <div className="side-bar__logout">
            <img src={avt} alt="side-bar__avt" className="side-bar__avt" />
            <span className="side-bar__name">{name}</span>
            <div className="side-bar__logout-icon" >
                <FontAwesomeIcon icon={icon} style={{width: 21.5, height: 21.5}} />
            </div>
        </div>
    )
}
