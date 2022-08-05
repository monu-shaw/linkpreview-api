import { useState } from "react";


function Style2(props) {
    const [linkData, setLinkData] = useState({...props.linkData});
  return (
   
    <div className='my-3'>
        <h6 className='text-center text-uppercase mb-2'>Style 2 (list Style) <a href="">Code Here</a></h6>
        <div className="card col-11 col-md-8 col-lg-5 mx-auto">
            <div className='row g-1 rounded-top'>
                <div className='col-4 col-md-4 col-lg-3'>
                    <img className='rounded-top' src={linkData.img} alt="Img Not Loading"  style={{width: '100%', height: '10rem'}} />
                </div>
                <div className='col-8 col-md-8 col-lg-9'>
                    <div className="card-body">
                      <h6 className="text-capitalize">{linkData.title}</h6>
                      <p className="">{linkData.description + ` ...`}</p>
                      <a href={linkData.origin} className="btn-cust-primary bg-cust-secondary px-2 rounded-1">Go Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Style2