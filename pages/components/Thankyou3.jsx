import React from 'react'

function Thankyou3() {
  return (
    <div className='row m-0 p-4 rounded-2 col-12 col-md-8 col-lg-6 mx-auto border'>
      <div className='col-4 col-lg-3'>
        <img src='https://i.ibb.co/qkDDNhy/fw-ABZo-T-400x400.jpg' className='rounded-circle img-thumbnail' alt="" style={{width: '100%'}} />
      </div>
      <div className='col-12 col-lg-9 py-1'>
        <h2 className='nunito fs-bold'>Monu Kr. Shaw</h2>
        <h6 className=''>@FullStackWebDeveloper</h6>
        <p className='my-4'>FullStack Web Developer, Love Only Bug resolving And Code Amazing Stuffs</p>
        <div className='d-flex justify-content-between align-item-center col-12'>
          <p className='fw-bold fs-6'>8 <br /> Projects</p>
          <p className='fw-bold fs-6'>1 <br /> NPM Packeges</p>
          <p className='fw-bold'>20 <br /> Github Repos</p>
        </div>
        <div className='d-flex justify-content-between'>
        <a href="https://github.com/monu-shaw" target="_blank" rel="noreferrer"className="btn-cust-primary-2 w-100 d-block rounded-0">View Github</a>
        </div>
      </div>

    </div>
  )
}

export default Thankyou3