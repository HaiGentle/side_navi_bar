import React from 'react'
import './style.css'

export default function Input(props) {
    const { classModifier, ...extInput } = props;
    return (
        <input
            className={classModifier? "cpn-input " + classModifier : "cpn-input"}
            {...extInput}
        />
    )
}
