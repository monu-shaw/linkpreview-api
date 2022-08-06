
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Error from './error';
import Loader from './loader';
import Style1 from './style1'
import Style2 from './style2'
import { Thankyou, Thankyou2, Thankyou3 } from './thankyou';


export default function About() {
  const [thankyou, setThankYou] = useState(false);
  const [thankyou2, setThankYou2] = useState(false);
  const [thankyou3, setThankYou3] = useState(false);
  const [noError, setNoError] = useState(false);
  const [errorDetail, setErrorDetail] = useState({
    code: 'CheckUrl',
    message: 'Please Check Url Is Correct'
  });
  const [myloading, setMyLoading] = useState(true);
  const [linkData, setLinkData] = useState({
    "img": "",
    "title": "",
    "description": "",
    "domain": "",
    "origin": ""
  });

  const debounce =()=>{
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      loadLink();
    }, 3000);
    }
  const linkPreview = async(url)=>{
    setNoError(false);
    setMyLoading(false);
    const res3 = await axios.post('https://linkpreview-alpha.vercel.app/api/link',{
      url: url
    });
    if(res3.data.status === 1){
    setLinkData({...res3.data.data});
    setNoError(false);
    setMyLoading(true);
    //console.log(res3.data);
    }else{
      setNoError(true)
      if(JSON.stringify(res3.data.data) === '{}'){
        setErrorDetail({
          code: 'CheckUrl',
          message: 'Please Check Url Is Correct'
        })  
      }else{
        setErrorDetail({...res3.data.data});
      }
      setMyLoading(true);
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
    linkPreview('https://findcoder.io');
  },[])
  return (
    <div className='bg-aliceblue py-2'>
      <div className='row m-0'>
        <div className="col-11 col-md-10 col-lg-7 mx-auto border-0 d-flex justify-content-center p-4">
          <div className="card-body">
            <h5 className="card-title text-cust-light nunito text-center fw-bolder my-2">Live Preview</h5>
            <div className="mb-3">
              <input type="text" onChange={debounce} className="text-light bg-aliceblue form-control rounded-0 border-0 border-bottom" id="exampleFormControlInput1" placeholder="Type Link Here" />
            </div>
            <button onClick={loadLink} className="btn-cust-primary-default w-100 d-block rounded-0">Show Preview</button>
          </div>
        </div>
      </div>
      {!myloading && <Loader/>}
      {noError && <Error errorData={errorDetail}/>}
      {linkData.title != '' && <Style1 linkData={linkData}/>}
      {linkData.title != '' && <Style2 linkData={linkData}/>}
      <div className='text-cust-light col-11 mx-auto border-top pt-1 m-0 mt-3' onClick={()=>setThankYou(!thankyou)}>
        <h5 className='yanone ps-2'>Thank You <span style={{transform: thankyou?'':'rotate(270deg)'}} className='dropdown-toggle float-end pe-2'></span></h5>
          {thankyou && <Thankyou />}
      </div>
      <div className='text-cust-light col-11 mx-auto border-top pt-1 m-0' onClick={()=>setThankYou2(!thankyou2)}>
        <h5 className='yanone ps-2'>Library Used <span style={{transform: thankyou2?'':'rotate(270deg)'}} className='dropdown-toggle float-end pe-2'></span></h5>
        {thankyou2 && <Thankyou2 />}
      </div>
      <div className='text-cust-light col-11 mx-auto border-top border-bottom pt-1 m-0' onClick={()=>setThankYou3(!thankyou3)}>
        <h5 className='yanone ps-2'>About Me <span style={{transform: thankyou3?'':'rotate(270deg)'}} className='dropdown-toggle float-end pe-2'></span></h5>
        {thankyou3 && <Thankyou3 />}
      </div>
    </div> 
  )
}
