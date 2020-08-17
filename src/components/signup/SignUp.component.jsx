import React, { useState } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';
import Button  from '../common/button'
import {KITCHEN, REGISTRATION, NAME, COMPANY, ADDRESS, DEPOT,
     EMAIL, ENTER, PASSWORD, RE_ENTER, SIGN_UP, ZIP, CODE,
      STATE, SELECT, CITY, CONTACT, MSG_AGREE, LOGIN, FORGOT} from '../../utils/Constants'
import './SignUp.style.scss'

const SignUp = (props) => {

    const onSelectState = (selectedState) => {
        console.log(selectedState)
    }
    
    const onSelectCity = (selectedCity) => {
        console.log(selectedCity)
    }

    return (
        <div class="signup-container">
            <div class="img-container"></div>
            <div class="inner-container">
                <div class="signup">
                    <h3>{`${KITCHEN} ${REGISTRATION}`}</h3>
                    <FormGroup>
                    <Label for="name">{`${KITCHEN} ${NAME} (OR) ${COMPANY} ${NAME}`}</Label>
                        <Input type="text" name="name" id="name"/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="address">{`${ADDRESS}(${DEPOT})`}</Label>
                        <Input type="text" name="address" id="name"/>
                    </FormGroup>
                    <div class="horizontal-container">
                    <FormGroup>
                    <Label for="zip_code">{`${ENTER} ${ZIP} ${CODE}`}</Label>
                        <Input type="text" name="zip_code" id="zip_code"/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="state">{`${SELECT} ${STATE}`}</Label>
                    <Input type="select" name="state" id="state" onChange={onSelectState}>
                        <option value="UP">Select</option>
                        <option value="UP">UP</option>
                        <option value="Delhi">Delhi</option>
                    </Input>
                    </FormGroup>
                    </div>
                    <div class="horizontal-container">
                        
                    <FormGroup>
                    <Label for="city">{`${SELECT} ${CITY}`}</Label>
                    <Input type="select" name="city" id="city" onChange={onSelectCity}>
                        <option value="UP">Noida</option>
                        <option value="UP">Delhi</option>
                        <option value="Delhi">Hyderabad</option>
                        <option value="Delhi">Pune</option>
                        <option value="Delhi">Agra</option>
                        <option value="Delhi">Gugaon</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label for="contact">{`${CONTACT}`}</Label>
                        <Input type="text" name="contact" id="contact"/>
                    </FormGroup>
                    </div>
                    <FormGroup>
                    <Label for="email">{`${EMAIL} ${ADDRESS}`}</Label>
                        <Input type="email" name="email" id="email"/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="password">{`${ENTER} ${PASSWORD}`}</Label>
                        <Input type="password" name="password" id="password"/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="password">{`${RE_ENTER} ${PASSWORD}`}</Label>
                        <Input type="password" name="password" id="password"/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />
                                {MSG_AGREE}
                             </Label>
                    </FormGroup>
                    <Button type="primary" title={SIGN_UP}></Button>
                    <div class="horizontal-container">
                        <p>{LOGIN}</p>
                        <p>{`${FORGOT} ${PASSWORD}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SignUp;