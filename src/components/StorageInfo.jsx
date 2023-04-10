import { Box, Typography, styled } from "@mui/material";
import Crud from '../Assets/Image/CRUD.jpeg';
import CrudImage from '../Assets/Image/Crudimages.jpg';
import CrudDark from '../Assets/Image/Crudark.png';
import CrudFourth from '../Assets/Image/Crud4.png';


const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const StorageInfo = () => {
    return (
        <Header>
            <Typography variant="h4">CRUD APPLICATION</Typography>
            <Typography variant="h6">CRUD refers to the four basic operations a software application should be able to perform – Create, Read, Update, and Delete.</Typography>
            <Box>
                <Image src={Crud} />
                <Image src={CrudImage} />
                <Image src={CrudDark} />
                <Image src={CrudFourth} />
            </Box>
        </Header>

    )
}
export default StorageInfo;
