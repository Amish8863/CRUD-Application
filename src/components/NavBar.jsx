import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111;
    `
const Tabs = styled(NavLink)
    `
    font-size: 20px;
    margin-right: 20px;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
`

const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>StorageInfo</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add User</Tabs>

            </Toolbar>
        </Header>
    )
}

export default NavBar;