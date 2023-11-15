var userModel = require('../model/user.model')

module.exports = {
    addUser: async(req,res) => {

        try{

            let data = req.body
            console.log(data);
            const newUser = new userModel({
                name: data.name,
                email: data.email,
                gender: data.gender,
                status: data.status
                })
            
                
            await newUser.save()
               
            res.send({'message': 'User Registered Succesfully'})

        }
        catch(e){
            console.log('error')
            
            res.send({'message': 'error'})

        }
    },

 displayUsers: async (req, res) =>{
    const users = await userModel.find()
    console.log(users);
    res.render('display_user', {'usersList': users})
 },

 deleteUser: async(req, res) =>{

    const userId = req.params.id;
    const deleteUser = await userModel.findOneAndDelete({_id: userId})
     
    res.redirect('/users/list')

 },

 fetchSingleUser: async(req,res) =>{
    const userId = req.query.id;
    console.log(userId);
    const userData = await userModel.findById(userId)
    console.log(userData);
    res.render('update_user', {'user': userData})

 },

 updateuser: async(req,res) =>{
    const userId = req.params.id;
    const data = req.body
    const user = await userModel.findById(userId)
    user.name = data.name
    user.email = data.email
    user.gender = data.gender
    user.status = data.status
    await user.save()
    res.redirect('/users/list')

 }
}