import { getRecDb } from '../model/recDb.js'


const getRec = async (req,res)=>{
    try {
        res.json(await getRecDb())
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
    }
}

export{getRec}