import React from 'react'
import { CopyPlus } from 'lucide-react'
import { CopyMinus } from 'lucide-react'

const SongWorkspace = ({
    song,
    isExpanded,
    userPlaylists,
    addSongToPlaylist,
    removeSongFromPlaylist,
    setActiveWorkspace,
    setActiveRightWorkspace
}) => {
    return (
        <>
            {isExpanded ?
                (

                    <div className='w-34  h-48 rounded-lg p-2 bg-black flex flex-col items-center gap-2 border-2 border-orange-400 justify-between'>
                        <div className='w-full h-1/6 p-1  flex items center justify-center'>
                            <h5 className='text-sm text-center'>Add to Playlist</h5>
                        </div>

                        {userPlaylists.length === 0 ? (
                            <div className='w-full h-1/1 text-gray-500 text-sm py-4 px-2 text-center'>
                                <h4>OOPS! No Playlists to add Songs</h4>
                            </div>
                        ) : (
                            <div className='eddie w-full h-1/1 flex items-center flex-col overflow-y-auto text-gray-400 text-sm py-4 text-center'>
                                {userPlaylists.map((list) => {

                                    // Check if the current song is already inside this playlist
                                    const alreadyAdded = list.songs.includes(song.id)

                                    return (
                                        <div key={list.id} className='h-auto w-full  flex items-center justify-between py-2  pl-2 rounded-2xl border-b-2 border-orange-400'>
                                            <div>
                                                <h1 className='text-xs' title={list.title}>{
                                                    list.title.length > 7 ? list.title.toUpperCase().slice(0, 4) + "..." : list.title.toUpperCase()}
                                                </h1>
                                            </div>
                                            <div className='w-1/2 flex items-center justify-center'>
                                                <button
                                                    onClick={() => {

                                                        if (alreadyAdded) {
                                                            removeSongFromPlaylist(song.id, list.id)
                                                        } else {
                                                            addSongToPlaylist(song.id, list.id)
                                                        }

                                                    }}

                                                    // Change button color depending on whether
                                                    // the song already exists in the playlist
                                                    className={alreadyAdded ? "text-red-400" : "text-blue-400"}
                                                >

                                                    {/* Change icon depending on whether the song exists */}
                                                    {alreadyAdded
                                                        ? <CopyMinus size={25} />
                                                        : <CopyPlus size={25} />
                                                    }

                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                        }

                        <button onClick={() => {
                            setActiveWorkspace(song.id)
                            setActiveRightWorkspace(null)
                        }} className='text-xs py-1 px-2 border border-orange-400 rounded-2xl'>New playlist +</button>
                    </div>

                ) : (

                    <div className='w-34 py-0.5 rounded-lg p-4 text-center bg-black flex flex-col items-center gap-4 border-2 border-orange-400 justify-center'>
                        <h4 className='text-sm font-bold font-mono tracking-widest leading-relaxed'>{song.title}</h4>
                        <h5 className='text-xs text-gray-400 font-mono'>{song.artist}</h5>
                    </div>
                )
            }
        </>
    )
}

export default SongWorkspace
