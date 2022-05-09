import mongoose, { connect } from "mongoose";

async function startConnection(){
   try { 
    await connect('mongodb://localhost:27017/ImageApi');
    console.log('\t\t Connection Successfull to Db \n');
   }
   catch (err) {
       console.error(err);
       console.log('\t\ttSomething happend with the Database');
   }
};


export default startConnection;