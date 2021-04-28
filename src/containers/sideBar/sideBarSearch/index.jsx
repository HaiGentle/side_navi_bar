import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputCpn from '../../../components/inputCpn';
import './style.css'


export default function SideBarSearchContain(props) {
    const {icon, placeholder, isOpen, handleOnClickInput} = props;
    
    return (
        <div className="side-bar__search">
            <div 
                className="side-bar__search-icon"
                style={{position: !isOpen && "relative"}}
                onClick={handleOnClickInput}
            >
                <FontAwesomeIcon icon={icon}/>
            </div>
            {isOpen && <InputCpn 
                placeholder={placeholder}
                classModifier=" inputCpn--side-bar"
            />}
        </div>
    )
}
