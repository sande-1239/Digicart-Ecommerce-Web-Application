import { Fragment } from 'react';
import { useEffect } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import {Box,styled} from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch,useSelector} from 'react-redux';


const Component = styled(Box)`

padding:10px;
backgroud:#F2F2F2;
`


const Home =() =>{

   const {products}= useSelector(state=>state.getProducts);
   
  console.log(products);
   const dispatch=useDispatch();
   useEffect(()=>{
      dispatch(getProducts())
},[dispatch])
return(
         <Fragment>
        <NavBar/>
        <Component>
        <Banner/> 
        <MidSlide products={products}title="Deal Of The Day" timer={true}/>
        <MidSection/>
        <Slide products={products}title="Discounts For You" timer={false}/>
        <Slide products={products}title="Suggested Items" timer={false}/>
        <Slide products={products}title="Top Selections" timer={false}/>
        <Slide products={products}title="Recommended Items" timer={false}/>
        <Slide products={products}title="Trading Items" timer={false}/>
        </Component>
       </Fragment>
 

)
}

export default Home;