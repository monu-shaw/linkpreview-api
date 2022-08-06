
import React, {useState, useEffect} from 'react'
import Link from 'next/link'

export default function Heading() {
  const [first, setfirst] = useState([]);
  useEffect(()=>{
    
  },[])
  return (
    <>
      <nav className="navbar navbar-dark bg-cust-primary">
        <div className="container-fluid">
        <Link href="/" >
          <a className="navbar-brand text-decoration-none text-dark">LinkPreview</a>
        </Link>
        </div>
      </nav>
    </>
  )
}
