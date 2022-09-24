import { imageURL } from "../../Constants/data";


import {Grid,styled} from "@mui/material";
import { Fragment } from "react";

const Wrapper = styled(Grid)`
maring-top:10px;
justifty-content:space-between;
`;
const Image = styled('img')(({theme})=>({
    marginTop:10,
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]: {
        objectFit:'cover',
        height:140
    }

}));
const MidSection = ()=>{
    const url = 'https://cfstatic.give.do/e5b46ced-4b0e-42c9-a428-ba0a78654ed5.jpg';
    return(
        <Fragment>
        <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map(image=>(
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <img src={image} alt="banner" style={{width:'100%'}}/>
                    </Grid>
                ))
            }
        </Wrapper>
            <Image src={url} alt="covid"/>
        </Fragment>
    )
}

export default MidSection;