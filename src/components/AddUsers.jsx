

import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)
    `
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px
    }
`

const initialValues = {
    username: '',
    email: '',
    phone: ''
}

function AddUsers() {

    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <div>
            <Container>
                <Typography variant='h4'>USERS</Typography>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='username' />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='phone' />
                </FormControl>
                <FormControl>
                    <Button variant='contained' style={{ width: 200, margin: "auto" }} onClick={() => addUserDetails()}>
                        Add User
                    </Button>
                </FormControl>

            </Container>
        </div>
    )
}

export default AddUsers
