import { useState } from "react";


function Style1(props) {
    const [linkData, setLinkData] = useState({...props.linkData});
    
  return (
    <div>
        <h6 className='text-center text-uppercase mb-3'>Style 1 (card Style) <a href="">Code Here</a></h6>
        <div className="bg-cust-dark mx-auto m-0 hvr-bg col-12 col-md-8 col-lg-3" style={{maxWidth: '18rem'}}>
          <img src={linkData.img} className="card-img-top" alt="..." style={{width: '100%', height: '14rem'}}/>
          <div className="card-body p-0 pb-1 border-top">
            <h6 className="text-capitalize ps-2 mt-2">{linkData.title}</h6>
            <p className="ps-2">{linkData.description.substring(0, 55)+ ` ...`}</p>
            <a href={linkData.origin} className="m-2 btn-cust-primary bg-cust-secondary px-2 rounded-1">Go Now</a>
          </div>
        </div>
    </div>
  )
}

export default Style1