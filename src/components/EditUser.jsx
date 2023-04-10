

import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { addUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, editUser } from '../service/api';

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

function EditUser() {

    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        let response = await getUser(id);
        // console.log(response);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const addUserDetails = async () => {
        await editUser(user, id);
        navigate('/all');
    }

    return (
        <div>
            <Container>
                <Typography variant='h4'>USERS</Typography>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='username' value={user.username} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} />
                </FormControl>
                <FormControl>
                    <Button variant='text' onClick={() => addUserDetails()}>
                        Edit User
                    </Button>
                </FormControl>

            </Container>
        </div>
    )
}

export default EditUser;
