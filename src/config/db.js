const mongoose = require("mongoose")
const db = async()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://acostacamilo483:fAWohUVTkyoQDLRR@demo.kwirpfw.mongodb.net/test",
            { useNewUrlParser: true,useUnifiedTopology: true}
        )
    } catch (error) {
        
    }
}
module.exports = {db}