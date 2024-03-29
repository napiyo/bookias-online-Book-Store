const app = require('./app.js');
const connectDatabase = require('./config/database.js');
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'});

 // Handling uncaught Exception
 process.on("uncaughtException",(err) =>{
    console.log(`Error : ${err.message}`);
    console.log("shutting server down due to uncaughtException Error");
   
        process.exit(1);
   
});

// if(process.env.SITE_MODE !=="PRODUCTION" ){
    
    // dotenv.config({path:'./config/config.env'})
    // }

connectDatabase();
const PORT = process.env.PORT || 4100;


const server = app.listen(PORT,()=>{
    console.log(`server running on ${process.env.endPoint}:${PORT} in ${process.env.SITE_MODE || "DEVELOPMENT"} MODE`);
})

 // unhandled promise Rejection
 process.on("unhandledRejection",(err) =>{
     console.log(`Error : ${err.message}`);
     console.log("shutting server down due to unhandledRejection Error");
     server.close(()=>{
         process.exit(1);
     });
 });