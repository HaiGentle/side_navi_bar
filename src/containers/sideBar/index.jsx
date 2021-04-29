import React, { useState } from 'react'
import './style.css'
import avt from '../../logo.svg'
import { faThLarge, faSearch, faSignOutAlt, faBars, faUser, faCommentAlt, faChartPie, faFolder, faShoppingCart, faHeart, faCog } from '@fortawesome/free-solid-svg-icons'
import SideBarItems from '../../components/SideBarItems'
import SideBarSearch from './sideBarSearch'
import SideBarLogout from './sideBarLogout'
import {SideBarHeader} from './sideBarHeader'

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
    const [state, setState] = useState({
        sideBarOpen: false
    });

    const handleOnClickButtonHeader = () => {
        setState(prev => ({...prev, sideBarOpen: !prev.sideBarOpen}));
    }
    const handleOnClickInput = () => {
        setState(prev => ({...prev, sideBarOpen: true}));
    }

    return (
        <div className="side-bar" style={{ width: state.sideBarOpen && "200px" }}>
            <SideBarHeader
                icon={faBars}
                title="VC-Team"
                img={avt}
                isOpen={state.sideBarOpen}
                handleOnClickButtonHeader={handleOnClickButtonHeader}
            />
            <SideBarSearch
                icon={faSearch}
                placeholder="Search..."
                isOpen={state.sideBarOpen}
                handleOnClickInput={handleOnClickInput}
            />
            {data.map(item => (
                <SideBarItems
                    key={item.id}
                    text={item.text}
                    icon={item.icon}
                    isOpen={state.sideBarOpen}
                />
            ))}
            <SideBarLogout
                avt={avt}
                name="Hai's Gentle"
                icon={faSignOutAlt}
                isOpen={state.sideBarOpen}
            />
        </div>
    )
}
