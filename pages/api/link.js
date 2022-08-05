import getLinkPreview from 'monu-linkpreview';


export default function handler(req, res) {
  
    //res.status(200).json({ name:  })
    if(req.method  === 'POST'){
        try {
            getLinkPreview(req.body.ur).then(re=>res.json({status: 1,data: re})).catch((er)=>res.json({status: 0,data: req.body}));      
            //res.json({"data": req.body.id})
        } catch (error) {
            res.send(`error ${error}`)
        }
    }else{
        res.send(`error  Only Post Request Accepted`)
    }
    
  }