import Product from './model/product-schema.js';
import {products}from './constants/data.js';
//import { products } from "./model/constants/data.js"
//import Product from "./model/product-schema.js";


const DefaultData = async ()=>{
 try {
       
        await Product.insertMany(products);
        console.log('Data Importerd Successfully')
 } catch (error) {
    console.log('Error While Inserting Default Data',error.message);
 }

}

export default DefaultData;