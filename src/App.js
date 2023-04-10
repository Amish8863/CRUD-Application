import AddUsers from './components/AddUsers';
import AllUsers from './components/AllUsers';
import StorageInfo from './components/StorageInfo';
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<StorageInfo />} />
                <Route path='/all' element={<AllUsers />} />
                <Route path='add' element={<AddUsers />} />
                <Route path='edit/:id' element={<EditUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
