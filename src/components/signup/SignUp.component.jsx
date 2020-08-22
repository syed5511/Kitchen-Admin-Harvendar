import React, { useState } from 'react'
import { FormGroup, Label, Input, FormFeedback, FormText} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Button from '../common/button'
import {
    KITCHEN, REGISTRATION, NAME, COMPANY, ADDRESS, DEPOT,
    EMAIL, ENTER, PASSWORD, RE_ENTER, SIGN_UP, ZIP, CODE,
    STATE, SELECT, CITY, CONTACT, MSG_AGREE, LOGIN, FORGOT, 
    INVALID, MSG_DOSE_NOT_MATCH
} from '../../utils/Constants'
import './SignUp.style.scss'
import Login from '../login/Login.component';

const SignUp = ({history}) => {

    const [ inputData, setInputData ] = useState();
    const onSelectState = (values) => {
        console.log(values)
    }

    const onSelectCity = (values) => {
        console.log(values)
    }

    const handleSubmit = (event, errors, values) => {
        
    }

    return (
        <div class="signup-container">
            <div class="img-container"></div>
            <div class="inner-container">
                <AvForm class="signup" onSubmit={handleSubmit}>
                    <h3>{`${KITCHEN} ${REGISTRATION}`}</h3>
                    <AvField name="name" label={`${KITCHEN} ${NAME} (OR) ${COMPANY} ${NAME}`} type="text" errorMessage={`${INVALID} ${NAME}`} validate={{
                        required: { value: true },
                        minLength: { value: 6 },
                        maxLength: { value: 24 }
                    }} />
                    <AvField name="address" label={`${ADDRESS}(${DEPOT})`} type="text" errorMessage={`${INVALID} ${ADDRESS}`} validate={{
                        required: { value: true },
                        minLength: { value: 6 },
                    }} />
                    <div class="horizontal-container">
                        <AvField name="zip_code" label={`${ENTER} ${ZIP} ${CODE}`} type="number" errorMessage={`${INVALID} ${ZIP} ${CODE}`} validate={{
                            required: { value: true },
                            minLength: { value: 6 },
                            maxLength: { value: 8 }
                        }} />
                        <FormGroup>
                            <Label for="state">{`${SELECT} ${STATE}`}</Label>
                            <Input type="select" name="state" id="state" onChange={onSelectState}>
                                <option value="UP">STATE-1</option>
                                <option value="UP">STATE-2</option>
                                <option value="UP">STATE-3</option>
                                <option value="UP">STATE-4</option>
                                <option value="UP">STATE-5</option>
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
                        <AvField name="contact" label={CONTACT} type="tel" errorMessage={`${INVALID} ${CONTACT}`} validate={{
                            required: { value: true },
                            minLength: { value: 10 },
                            maxLength: { value: 10 }
                        }} />
                    </div>
                    <AvField name="email" label={`${EMAIL} ${ADDRESS}`} type="email" validate={{
                            required: { value: true },
                        }}/>
                    <AvField name="password" label={`${ENTER} ${PASSWORD}`} type="password" errorMessage={`${INVALID} ${PASSWORD}`} validate={{
                            required: { value: true },
                            minLength: { value: 8 },
                            maxLength: { value: 16 }
                        }} />
                    <AvField name="re_password" label={`${RE_ENTER} ${PASSWORD}`} type="password" errorMessage={`${PASSWORD} ${MSG_DOSE_NOT_MATCH}`} validate={{match:{value:'password'}}} />
                    <AvField  type="checkbox" name="checkbox_agree" label={MSG_AGREE} required />
                    <Button type="primary" title={SIGN_UP}></Button>
                    <div class="horizontal-container mb-5">
                        <Label className="btn text-left m-0 p-0" onClick={() => history.push('/login')}>{LOGIN}</Label>
                        <Label className="btn text-right m-0 p-0">{`${FORGOT} ${PASSWORD}`}</Label>
                    </div>
                </AvForm>
            </div>
        </div>
    )

}

export default SignUp;