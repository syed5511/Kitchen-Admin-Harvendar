import React from 'react'
import { Button as LibButton} from 'reactstrap'
import './Button.style.scss'

const Button = ({ type, onClick, title }) => {
    return (<LibButton color={type} onClick={onClick}>{title}</LibButton>)
}

export default Button