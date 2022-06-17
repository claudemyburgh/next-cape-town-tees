import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div className={`max-w-7xl my-10 mx-auto text-center p-6 md:p-10 rounded-md shadow shadow-black/20 border border-primary-500 space-y-5`}>
      <h1 className={`text-4xl font-black text-primary-500 tracking-tight`}>Cape Town Tees</h1>
      <p className={`text-gray-300 text-2xl leading-6`}>
        coming soon
      </p>
    </div>
  )
}

export default Home
