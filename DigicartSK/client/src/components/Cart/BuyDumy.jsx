import {Box, Dialog,TextField,Typography,Button,styled,} from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";


const Component = styled(Box)`
height:55vh;
width:120vh;
padding:0;
padding-top:0;
margin-left:250px;
margin-top:200px;

`;
const Image=styled(Box)`
background:#2874f0 url( https://tradebrains.in/wp-content/uploads/2019/09/Paytm-UPI-App-in-India.jpg)center 85% no-repeat;
height:65%;
width:40%;
padding:42px 55px;
margin-top:45px;

&>p,&>h5 {
    color:#ffffff;
    font-weight:600;
  
}
`
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& > div , & > button , &>p {
    margin-top:20px;
}
`
const LoginButton = styled(Button)`
text-transform:none;
background:#FB641B;
color:#fff;
height:48px;
border-radius:2px;
`

const Text=styled(Typography)`
font-size:12px;
color:#878787;
`


    
    


    const buyProduct=()=>{
        Navigate("/confirm");
    }


const BuyDumy=()=>{
   return(
   <Component>
    <Box style={{display:'flex',height:'100%'}}>

    <Image>
        {/* <Typography variant="h4"> Paytm payment Gateway</Typography> */}
       
    </Image>
    <Wrapper>
      <TextField variant="filled" name='cnum'  label="Enter Card Number"/>
      <TextField variant="filled" name='cname'   label="Enter Card Name"/>
      <TextField variant="filled" name='date' type="date" />
      <TextField variant="filled" name='cvv'   label="CVV"/>
      <Button variant="contained" onClick={()=>buyProduct()}>Submit</Button>
    </Wrapper>
    
    </Box>
   </Component>


   )


    }


  
export default BuyDumy;