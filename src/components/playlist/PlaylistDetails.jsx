import React from 'react'
import { Trash2 } from 'lucide-react'

const PlaylistDetails = ({
    selectedPlaylist,
    playlistSongs,
    deletePlaylist
}) => {
    return (
        <div className='h-full w-1/3 bg-black border-2 border-orange-400 bg-[url(https://images.unsplash.com/photo-1735305741501-687208b7ec2d?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center rounded-2xl mr-8 flex flex-col items-center justify-center py-6 px-6 gap-8' >
            <div className='h-4/5 w-4/5  relative rounded-3xl bg-orange-400/40 backdrop-blur-xs text-white flex flex-col items-center justify-center gap-6 px-10 py-8'>
                <div className='h-40 w-50 p-4 rounded-2 bg-black border-l-2 border-t-2 border-orange-400 rounded-2xl absolute -top-10 -left-12 flex flex-col gap-2'>
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
                <div style={{ backgroundImage: `url(${selectedPlaylist.coverUrl})` }} className='h-30 w-60 bg-cover  bg-center border-r-2 border-b-2 border-r-orange-400 rounded-[10%] absolute bottom-25 -right-12'></div>
                <button onClick={() => {
                    deletePlaylist(selectedPlaylist.id)
                }} className='p-2 absolute bottom-10 -left-10 rounded-2xl bg-black tracking-widest text-lg font-mono flex items-cemter border-l-2 border-t-2 border-l-orange-400'>Delete<Trash2 size={28} className='p-1 rounded-4xl text-white' /></button>
            </div>

        </div>
    )
}

export default PlaylistDetails
