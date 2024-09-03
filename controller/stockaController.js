import { getStockaDb } from '../model/stockaDb.js'


const getStocka = async (req,res)=>{
    try {
        res.json(await getStockaDb())
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
    }
}

export{getStocka}