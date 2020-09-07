import React from 'react';
import {
  FormGroup, Label, Input, FormFeedback,
} from 'reactstrap';
import './AHField.style.scss';

const AHField = ({
  name, label, type, isValid, errorMessage,
}) => (
  <FormGroup>
    <Label for={name}>{label}</Label>
    <Input valid={isValid} type={type} />
    <FormFeedback>{errorMessage}</FormFeedback>
  </FormGroup>
);

export default AHField;
