import React from 'react'
import SearchPanel from './SearchPanel'

const Hero = (props) => {
    return (
        <div className='hero relative min-h-screen w-full flex flex-col lg:flex-row'>
            <h1 className='lg:text-[12rem] absolute z-50 left-10 top-0 mix-blend-difference font-bold tracking-wider font-mono text-white'>SOUNDWAVE</h1>
            <SearchPanel songs={props.songs} />
           
            <div className='right flex-1 bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1746637466031-c74900b2ccb8?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'></div>
        </div>
    )
}

export default Hero
