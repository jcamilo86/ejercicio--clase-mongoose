const Student = require("../model/student")
const getStudent = async(req,resp)=>{
    try {
      const students = await Student.find({})
      return resp.json(students)  
    } catch (error) {
        return resp.status(500).json({
            msg:error.message
        })
    }
}

