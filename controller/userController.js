import bcrypt from 'bcrypt'
import { fetchUserDb,fetchUsersDb,registerUserDb,updateUserDb,deleteUserDb,loginUserDb } from '../model/userDb.js'


const fetchUsers = async (req,res)=>{
    try {
        res.json(await fetchUsersDb())
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
    }
}

const fetchUser = async (req,res)=>{
    try {
        res.json(await fetchUserDb(req.params.id))
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
        
    }
}

const deleteUser = async (req,res)=>{
    try {
        res.json(await deleteUserDb(req.params.id))
        console.log('User removed');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to delete user')
        
    }
}


const registerUser = async (req,res)=>{
    try {
        let {firstname,lastname,age,gender,user_role,email_add,user_pass,user_profile} = req.body
        bcrypt.hash(user_pass,10,async (error,result)=>{
        if(error) throw error
        console.log(result);
        await registerUserDb(firstname,lastname,age,gender,user_role,email_add,result,user_profile)
        res.send('Added a user')
        })
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to insert user')
        
    }
}

const updateUser = async (req,res)=>{
    try {
        let {firstname,lastname,age,gender,user_role,email_add,user_pass,user_profile} = req.body
        let users = await fetchUserDb(req.params.id)
        firstname?firstname=firstname:firstname=users.firstname
        lastname?lastname=lastname:lastname=users.lastname
        age?age=age:age=users.age
        gender?gender=gender:gender=users.gender
        user_role?user_role=user_role:user_role=users.user_role
        email_add?email_add=email_add:email_add=users.email_add
        user_pass?user_pass=user_pass:user_pass=users.user_pass
        user_profile?user_profile=user_profile:user_profile=users.user_profile
       
        await updateUserDb(firstname,lastname,age,gender,user_role,email_add,user_pass,user_profile,req.params.id)
        console.log('user updated');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to update user')
        
    }
}

const loginUser = (req,res)=>{
    res.json({
        message:"You have signed in!!",
        token: req.body.token})
        console.log(token);
        
}


export {fetchUser,fetchUsers,registerUser,updateUser,deleteUser,loginUser}