const mongoose = require("mongoose");

const ConnectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONSTRURL)
        if(connect){
            console.log(`Connection established with ${connect.host} git remote add origin git@github.com:itzyasii/role-based-auth.git`)
        }
    }catch(err){
        console.log("Connection Error", err.message);
    }
};
