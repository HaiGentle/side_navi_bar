import React from 'react'
import './style.css'

export default function InputCpn(props) {
    const { classModifier, ...extInput } = props;
    return (
        <input
            className={classModifier? "inputCpn" + classModifier : "inputCpn"}
            {...extInput}
        />
    )
}
