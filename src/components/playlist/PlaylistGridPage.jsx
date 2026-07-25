import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react';

const PlaylistGridPage = (props) => {

    const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);

    console.log(props.playlists);


    return (
        <div className='h-screen w-full flex flex-col bg-black text-white py-15 px-4'>
            <div className='h-auto flex items-center justify-between'>
                <div className='w-4/6 flex justify-end'><h1 className='text-8xl tracking-widest font-bold'>Discover</h1></div>
                <div className='w-2/6 flex justify-end pr-10 pt-10 items-center'>
                    <div className='relative'>
                        <button onClick={() =>
                            setShowPlaylistDropdown(!showPlaylistDropdown)
                        } className='p-4 border-2 flex items-center gap-2 rounded-4xl text-xl tracking-widest font-mono border-orange-400'>My Playlists <ChevronDown size={20} className={`transition-transform duration-300 ${showPlaylistDropdown ? "rotate-180" : "rotate-0"
                            }`} />
                        </button>
                        {showPlaylistDropdown && (
                            <div className='drp absolute top-full right-0 mt-5 w-80 h-96 overflow-y-auto overflow-hidden p-4 flex flex-col gap-4 rounded-3xl bg-zinc-900/40 border-2 border-orange-400 backdrop-blur-xl text-white text-2xl font-mono z-50 '>
                                {props.userPlaylists.length === 0 ? (

                                    <div className='h-full w-full flex items-center justify-center'><h2>No Playlists Yet</h2></div>

                                ) : (

                                    props.userPlaylists.map((playlist) => {

                                        return (
                                            <div className='w-full h-auto flex items-center justify-start  p-4 border-b-2 border-orange-400  rounded-4xl text-gray-200'>
                                                <div key={playlist.id} onClick={() => {
                                                    props.setSelectedPlaylist(playlist)
                                                    props.setActivePage("songs")
                                                }} className='flex justify-between items-center w-full p-2'>

                                                    <div className='h-12 w-3/5 flex flex-col items-start justify-center gap-2 border-r-2 pr-2 border-gray-600'>
                                                        <h4 className='text-sm tracking-widest font-mono font-bold'>{playlist.title.toUpperCase()}</h4>
                                                        <p className='text-xs text-orange-400'>{playlist.songs.length}<span className='text-gray-400'> Tracks</span></p>
                                                    </div>
                                                    <div className='h-12 w-1/3 bg-emerald-600 bg-cover bg-center rounded' style={{ backgroundImage: `url(${playlist.coverUrl})` }}></div>

                                                </div>

                                            </div>


                                        )

                                    })

                                )}
                            </div>)
                        }
                    </div>

                </div>

            </div>
            <div className='h-full w-full flex items-center justify-center gap-15'>
                {props.playlists.map((elem) => {

                    return (
                        <div key={elem.id} onClick={() => {
                            props.setSelectedPlaylist(elem)
                            props.setActivePage("songs")
                        }} className='h-72 w-56 rounded-3xl border-2  border-orange-400 flex flex-col overflow-hidden '>
                            <div style={{ backgroundImage: `url(${elem.cover})` }} className='h-3/4 w-full bg-cover'></div>
                            <div className='h-1/4 flex items-center flex-col justify-center px-3'>
                                <h1 className='font-mono text-2xl text-orange-400 '>{elem.title}</h1>
                                <h4 className='text-gray-400 text-sm'>{elem.songs.length} Songs</h4>
                            </div>
                        </div>
                    )
                })}

            </div >
        </div >
    )
}

export default PlaylistGridPage
