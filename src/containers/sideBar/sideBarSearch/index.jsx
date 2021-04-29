import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../../../components/Input';
import './style.css'


export default function SideBarSearch(props) {
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
            <Input
                placeholder={placeholder}
                classModifier="cpn-input--side-bar"
                style={{display: !isOpen && "none"}}
            />
        </div>
    )
}
