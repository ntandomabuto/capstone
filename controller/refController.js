import { getRefDb } from '../model/refDb.js'


const getRef = async (req,res)=>{
    try {
        res.json(await getRefDb())
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
    }
}

export{getRef}