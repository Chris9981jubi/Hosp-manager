const UserModel = require("../models/user")
const bcrypt = require("bcrypt");

const catchAsync =(fn)=>{
    return(req,res,next)=>{
        fn(req,res,next);
    };

};
const addNewAdminApifn = async(req,res)=>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const user = {
        ...req.body,
        password:hash,
        role:"ADMIN",
    };
   await UserModel.create(user)
    res.json({
        success:true,
        message: "Admin registerd successfully",
    });
};

const userController ={
    addNewAdmin : catchAsync(addNewAdminApifn)   
};
console.log(typeof userController.addNewAdmin)

module.exports = userController;