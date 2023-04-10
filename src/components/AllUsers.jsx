import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    margin: 50px auto 0 auto;
    width: 90%
`
const Thead = styled(TableRow)`
    background: #000;
    & > th {
        color: #fff;
        font-size: 24px;
    }
`

const Tbody = styled(TableRow)`
    & > td {
        font-size: 24px;
    }
`

function AllUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsersDetails();
    }, [])

    const getUsersDetails = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }
    const deleteUserData = async (id) => {
        await deleteUser(id);
        getUsersDetails();
    }

    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <Tbody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='outlined' style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant='outlined' color='error' onClick={() => deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </Tbody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers
