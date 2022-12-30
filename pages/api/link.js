import getLinkPreview from 'monu-linkpreview';
import NextCors from 'nextjs-cors';


export default async function handler(req, res) {
  
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
    if(req.method  === 'POST'){
        try {
             await getLinkPreview(req.body.url).then(re=>res.json({status: 1,data: re})).catch((er)=>res.json({status: 0,data: er}));      
            //res.json({"data": req.body.id})
        } catch (error) {
            res.send(`error ${error}`)
        }
    }else{
        res.send(`error  Only Post Request Accepted`)
    }
    
  }