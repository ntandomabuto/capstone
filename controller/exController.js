import { getExDb } from '../model/exDb.js'

const getExp = async (req,res)=>{
    try {
        res.json(await getExDb())
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
    }
}

export{getExp}