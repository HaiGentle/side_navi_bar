import React, { useState } from 'react'
import './style.css'
import avt from '../../logo.svg'
import { faThLarge, faSearch, faSignOutAlt, faBars, faUser, faCommentAlt, faChartPie, faFolder, faShoppingCart, faHeart, faCog } from '@fortawesome/free-solid-svg-icons'
import SideBarItemsCpn from '../../components/sideBarItemsCpn'
import SideBarSearchContain from './sideBarSearch'
import SideBarLogoutCpn from './sideBarLogout'
import SideBarHeaderContain from './sideBarHeader'

const data = [
    { id: "001", text: "DashBoard", icon: faThLarge },
    { id: "002", text: "User", icon: faUser },
    { id: "003", text: "Messanges", icon: faCommentAlt },
    { id: "004", text: "Analytics", icon: faChartPie },
    { id: "005", text: "File Manager", icon: faFolder },
    { id: "006", text: "Order", icon: faShoppingCart },
    { id: "007", text: "Save", icon: faHeart },
    { id: "008", text: "Setting", icon: faCog },
]

export default function SideBarContainer() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClickButtonHeader = () => {
        setIsOpen(prev => !prev);
    }
    const handleOnClickInput = () => {
        setIsOpen(() => true);
    }

    return (
        <div className="side-bar" style={{ width: isOpen && "200px" }}>
            <SideBarHeaderContain
                icon={faBars}
                title="VC-Team"
                img={avt}
                isOpen={isOpen}
                handleOnClickButtonHeader={handleOnClickButtonHeader}
            />
            <SideBarSearchContain
                icon={faSearch}
                placeholder="Search..."
                isOpen={isOpen}
                handleOnClickInput={handleOnClickInput}
            />
            {data.map(item => (
                <SideBarItemsCpn
                    key={item.id}
                    text={item.text}
                    icon={item.icon}
                    isOpen={isOpen}
                />
            ))}
            <SideBarLogoutCpn
                avt={avt}
                name="Hai's Gentle"
                icon={faSignOutAlt}
                isOpen={isOpen}
            />
        </div>
    )
}
