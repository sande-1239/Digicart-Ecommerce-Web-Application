import {useState} from 'react';
import{AppBar,Toolbar,Box,Typography,IconButton,Drawer,List,ListItem,styled} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import {Link} from 'react-router-dom';

import {Menu} from '@mui/icons-material';


const StyledHeader = styled(AppBar)`

background:#2874f0;
height:55px;
`;
const Component = styled(Link)`
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit;
`
const SubHeading= styled(Typography)`
font-size: 15px;
font-style:italic;
`
const PlusImage= styled('img')({
    width:10,
    height:10,
    marginLeft:4
});
const CustomButtonsWrapper = styled(Box)(({theme})=>({
margin:'0 5% 0 auto',
[theme.breakpoints.down('md')]:{
    display:'none'
}
}));
const MenuButton =styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));

const Header = ()=>{
 const logoURL = 'https://i.postimg.cc/HV98fRtk/wlogo.png" alt="wlogo';
 const subURL = 'https://i.postimg.cc/Yv2LkRXf/wname.png';
  const [open,setOpen]=useState(false);
  const handleOpen=()=>{
    setOpen(true);
  }  
  const handleClose=()=>{
    setOpen(false);
}  
 const list=()=>(
    <Box style={{width:200}} onClick={handleClose}>
        <List>
            <ListItem button>
                <CustomButtons/>
            </ListItem>
        </List>
    </Box>
 )

    return(
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                
                <MenuButton color="inherit" onClick={handleOpen}>
                <Menu/>
                </MenuButton>

                <Drawer open ={open} onClose={handleClose}>
                    {list()}
                </Drawer>


                <Component to='/'>
                  <Box style={{display:'flex'}}>
                        <SubHeading> <img src="./imgs/wlogo.png" alt="logo" style={{ width: 35 }} />&nbsp;
                            <Box component="span" style={{ color: '#ffe500' }}>   <img src="./imgs/wname.png" alt="logo" style={{ width: 85 }} />
                        </Box>
                        </SubHeading>
                      
                    </Box>
                </Component>
                <Search />
                <CustomButtonsWrapper>
                    <CustomButtons/>
                </CustomButtonsWrapper>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header;