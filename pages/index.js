import Head from 'next/head'
import styles from '../styles/Home.module.css'
import About from './components/About'
import Heading from './components/Head'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Link Preview</title>
        <meta name="description" content="A Simple Link Preview Build By Monu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading/>
      <About/>
      
      
    </div>
  )
}
