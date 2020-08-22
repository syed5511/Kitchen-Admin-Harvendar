import React from 'react'
import { Button as LibButton} from 'reactstrap'
import './Button.style.scss'

const Button = ({ name, label, type, isValid, errorMessage }) => {
    return (<FormGroup>
        <Label for={name}>{label}</Label>
        <Input valid />
        <FormFeedback valid>Sweet! that name is available</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>)
}

export default Button