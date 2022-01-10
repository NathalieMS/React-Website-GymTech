import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormButton,
    FormContent,
    Form,
    FormH1,
    FormInput,
    FormLabel,
    Text
} from './LogInElements'

const LogIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>GymTech</Icon>
                    <FormContent>
                        <Form action='register'>
                            <FormH1>Log In to your account</FormH1>
                            <FormLabel htmlFor='for'>E-mail</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default LogIn;
