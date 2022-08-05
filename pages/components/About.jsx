
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './loader';
import Style1 from './style1'
import Style2 from './style2'

export default function About() {
  const [linkData, setLinkData] = useState({
    "img": "",
    "title": "",
    "description": "",
    "domain": "",
    "origin": ""
  })
  const linkPreview = async(url)=>{
    const res3 = await axios.post('https://linkpreview-alpha.vercel.app/api/link',{
      url: url
    });
    if(res3.data.status === 1){
    setLinkData({...res3.data.data});
    //console.log(res3.data.data);
    }else{
      console.log(res3.data)
    }
  }
  const loadLink = async()=>{
    const LinUrl = document.getElementById('exampleFormControlInput1').value;
    if(LinUrl === ''){
      alert('No Url Got')
    }else{
      linkPreview(LinUrl);
      setLinkData({
        "img": "",
        "title": "",
        "description": "",
        "domain": "",
        "origin": ""
      });
    }
  }
  useEffect(()=>{
    linkPreview('https://linkpreview-alpha.vercel.app');
  },[])
  return (
    <div className='bg-aliceblue py-2'>
      <div className='row m-0'>
        <div className="col-11 col-md-10 col-lg-7 mx-auto border-0 d-flex justify-content-center p-4">
          <div className="card-body">
            <h5 className="card-title text-cust-light nunito text-center fw-bolder my-2">Live Preview</h5>
            <div className="mb-3">
              <input type="text" onChange={loadLink} className="bg-aliceblue form-control rounded-0 border-0 border-bottom" id="exampleFormControlInput1" placeholder="Type Link Here" />
            </div>
            <button onClick={loadLink} className="border-0 btn-cust-primary w-100 d-block rounded-0">Show Preview</button>
          </div>
        </div>
      </div>
      {!linkData.title != '' && <Loader/>}
      {linkData.title != '' && <Style1 linkData={linkData}/>}
      {linkData.title != '' && <Style2 linkData={linkData}/>}
    </div> 
  )
}
