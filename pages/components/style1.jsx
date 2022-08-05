import { useState } from "react";


function Style1(props) {
    const [linkData, setLinkData] = useState({...props.linkData});
    
  return (
    <div>
        <h6 className='text-center text-uppercase mb-2'>Style 1 (card Style) <a href="">Code Here</a></h6>
        <div className="card mx-auto m-0" style={{width: '18rem'}}>
          <img src={linkData.img} className="card-img-top" alt="..." style={{width: '100%', height: '14rem'}}/>
          <div className="card-body">
            <h6 className="text-capitalize">{linkData.title}</h6>
            <p className="">{linkData.description+ ` ...`}</p>
            <a href={linkData.origin} className="btn-cust-primary bg-cust-secondary px-2 rounded-1">Go Now</a>
          </div>
        </div>
    </div>
  )
}

export default Style1