import React from 'react'
import Hero from '../components/hero/Hero'
import Playlist from './Playlist'


const Home = (props) => {
    return (
        <div className='min-h-screen bg-black'>
             <Hero songs={props.songs} />
             <Playlist songs={props.songs} playlists={props.playlists}/>
        </div>
    )
}

export default Home
