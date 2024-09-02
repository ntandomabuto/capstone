import {pool} from '../config/config.js'

const fetchUsersDb = async ()=>{
    let [data] = await pool.query('select * from users')
    return data
}

const fetchUserDb = async (id)=>{
    let [[data]] = await pool.query('select * from users where user_id=?',[id])
    return data
}


const registerUserDb = async (firstname,lastname,age,gender,user_role,email_add,user_pass,user_profile)=>{
    let [data] = await pool.query('insert into users (firstname,lastname,age,gender,user_role,email_add,user_pass,user_profile) values (?,?,?,?,?,?,?,?)',[firstname,lastname,age,gender,user_role,email_add,user_pass,user_profile])
}

const deleteUserDb = async (id)=>{
    await pool.query('delete from users where user_id=?',[id])
}

const updateUserDb = async (firstname,lastname,age,gender,user_role,email_add,user_pass,user_profile,id)=>{
    let [data] = await pool.query('update users set firstname=?,lastname=?,age=?,gender=?, user_role=?,email_add=?,user_pass=?,user_profile=? where user_id=?',[firstname,lastname,age,gender,user_role,email_add,user_pass,user_profile,id])
    return data
}


const loginUserDb = async (email)=>{
    try{
        let [[data]] = await pool.query('SELECT * from users WHERE email_add=?',[email])
        return data

    } catch(err){
        res.status(500).send('failed to fetch user')
    }
}



export {fetchUsersDb,fetchUserDb,registerUserDb,deleteUserDb,updateUserDb,loginUserDb}