import mongoose from 'mongoose';


export const Connection = async(username,password)=>{
const URL=`mongodb://${username}:${password}@ac-flndfly-shard-00-00.rnouphk.mongodb.net:27017,ac-flndfly-shard-00-01.rnouphk.mongodb.net:27017,ac-flndfly-shard-00-02.rnouphk.mongodb.net:27017/Ecommerce?ssl=true&replicaSet=atlas-cpbz1g-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log('Database Connected Succesfully')
    } catch (error) {
        console.log('Error While Connecting With The Database',error.message);
    }
}

export default Connection;