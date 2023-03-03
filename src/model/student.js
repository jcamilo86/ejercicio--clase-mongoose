const mongoose= require("mongoose");
const schema = mongoose.Schema({
    nombre:{
        type:String,required:true
        
    },
    apellido:{
        type:String,required:true
        
    },
    grado:{
        type:Number,required:true
        
    },
})
const Student = mongoose.model("Student",schema)
module.exports = Student
