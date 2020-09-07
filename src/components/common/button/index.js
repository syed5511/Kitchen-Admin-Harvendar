import React from 'react';
import { Button as LibButton } from 'reactstrap';
import './Button.style.scss';

const Button = ({ type, onClick, title }) => (<LibButton color={type} onClick={onClick}>{title}</LibButton>);

export default Button;
