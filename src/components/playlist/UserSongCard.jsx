import React from 'react'
import { CopyMinus } from 'lucide-react'

const UserSongCard = ({
    song,
    selectedPlaylist,
    removeSongFromPlaylist
}) => {
    return (
        <div style={{ backgroundImage: `url(${song.coverImage})` }} className='userSong relative h-48 w-48  bg-cover flex items-start flex-col justify-end border-2 border-orange-400 bg-gray-800'>
            <button onClick={() => removeSongFromPlaylist(song.id, selectedPlaylist.id)} className='absolute top-0  left-38 py-2 px-2 rounded-4xl text-white bg-orange-400'><CopyMinus size={25} /></button>
            <h4 className='text-sm text-center font-extrabold  italic font-mono text-white bg-black rounded-2xl border-2 px-2 border-orange-400'>{song.title}</h4>
        </div>
    )
}

export default UserSongCard