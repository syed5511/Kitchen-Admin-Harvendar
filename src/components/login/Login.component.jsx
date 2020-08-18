import React, { useState } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Button from '../common/button'
import {
  KITCHEN, USERNAME, PASSWORD, MSG_REMEMBER_ME, LOGIN,
  SIGN_UP, FORGOT, MSG_LOGIN, WELCOME, BACK, MSG_PRIVACY_POLICY, INVALID
} from '../../utils/Constants'
import './Login.style.scss'

const Login = (props) => {

  return (
    <div class="login-container">
      <div class="img-container"></div>
      <div class="inner-container">
        <div class="login">
          <h3>{KITCHEN}</h3>
          <p>{`${WELCOME} ${BACK}, ${MSG_LOGIN}`}</p>
          <AvForm class="login-form">
            <AvField name="username" label={USERNAME} type="text" errorMessage={`${INVALID} ${USERNAME}`} validate={{
              required: { value: true },
              minLength: { value: 6 },
              maxLength: { value: 24 }
            }} />
            <AvField name="password" label={PASSWORD} type="password" errorMessage={`${INVALID} ${PASSWORD}`} validate={{
              required: { value: true },
              minLength: { value: 8 }
            }} />            
            <div class="horizontal-container">
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  {MSG_REMEMBER_ME}
                </Label>
              </FormGroup>
              <Label>{`${FORGOT} ${PASSWORD}`}</Label>
            </div>
            <div class="horizontal-container">
              <Button type="primary" title={LOGIN}></Button>
              <Button type="secondary" title={SIGN_UP}></Button>
            </div>
          </AvForm>
          <p>{MSG_PRIVACY_POLICY}</p>
        </div>
      </div>
    </div>
  )
}

export default Login;