import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instgram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* <h1>This is the instagram 2.0</h1> */}

    <Header/>
   
  <Feed/>
    {/* modal */}

    <Modal/>


    </div>
  )
}
