import React, { useState } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';
import Button from '../common/button'
import {
  KITCHEN, USERNAME, PASSWORD, MSG_REMEMBER_ME, LOGIN,
  SIGN_UP, FORGOT, MSG_LOGIN, WELCOME, BACK, MSG_PRIVACY_POLICY
} from '../../utils/Constants'
import './Login.style.scss'

const Login = (props) => {

  const onSelectState = (selectedState) => {
    console.log(selectedState)
  }

  const onSelectCity = (selectedCity) => {
    console.log(selectedCity)
  }

  return (
    <div class="login-container">
      <div class="img-container"></div>
      <div class="inner-container">
        <div class="login">
          <h3>{KITCHEN}</h3>
          <p>{`${WELCOME} ${BACK}, ${MSG_LOGIN}`}</p>
          <div class="login-form">
            <FormGroup>
              <Label for="username">{USERNAME}</Label>
              <Input type="text" name="username" id="username" />
            </FormGroup>
            <FormGroup>
              <Label for="password">{PASSWORD}</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>
            <div class="horizontal-container">
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  {MSG_REMEMBER_ME}
                </Label>
              </FormGroup>
              <Label>{`${FORGOT} ${PASSWORD}`}</Label>
            </div>
          </div>
          <div class="horizontal-container">
            <Button type="primary" title={LOGIN}></Button>
            <Button type="secondary" title={SIGN_UP}></Button>
          </div>
          <p>{MSG_PRIVACY_POLICY}</p>
        </div>
      </div>
    </div>
  )
}

export default Login;