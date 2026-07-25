import React from 'react'
import { Trash2 } from 'lucide-react'

const PlaylistDetails = ({
    selectedPlaylist,
    playlistSongs,
    deletePlaylist
}) => {
    return (
        <div className='absolute mt-5 right-2 z-50 bg-zinc-400/10 border-2 border-orange-400 backdrop-blur-2xl rounded-2xl flex flex-col items-center justify-center py-6 px-6 gap-8' >

            <div style={{ backgroundImage: `url(${selectedPlaylist.coverUrl})` }} className='h-30 w-30 bg-cover  bg-center border-r-2 border-2 border-orange-400 rounded-[50%]'></div>

            <div className='eddie h-40 w-50 p-4 rounded-2 bg-black border-l-2 overflow-y-auto border-t-2 border-orange-400 rounded-2xl flex flex-col gap-2'>
                <h1 className='text-xl font-mono font-bold tracking-widest'>Playlist:{" "}
                    <span className="text-orange-400">
                        {selectedPlaylist.title.charAt(0).toUpperCase() +
                            selectedPlaylist.title.slice(1).toLowerCase()}
                    </span></h1>
                <h2 className='text-xs tracking-wide text-blue-400 font-mono font-bold'>Created At:{" "}

                    <span className='text-emerald-600'>{new Date(selectedPlaylist.createdAt).toLocaleString()}</span>
                </h2>
                <h2 className='text-xs tracking-tighter font-mono font-bold text-gray-400'>Total Songs:{" "}

                    <span className='text-white'>{playlistSongs.length}</span>
                </h2>
            </div>

            <button onClick={() => {
                deletePlaylist(selectedPlaylist.id)
            }} className='p-2 rounded-2xl bg-black tracking-widest text-lg font-mono flex items-cemter border-l-2 border-t-2 border-l-orange-400'>Delete<Trash2 size={28} className='p-1 rounded-4xl text-white' /></button>
        </div>


    )
}

export default PlaylistDetails
