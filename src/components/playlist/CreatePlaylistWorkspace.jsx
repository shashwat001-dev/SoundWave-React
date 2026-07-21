import React from 'react'
import { Check } from 'lucide-react'

const CreatePlaylistWorkspace = ({
    song,
    setActiveWorkspace,
    setActiveRightWorkspace,
    submitHandler,
    handleChange,
    playlistForm,
    userPlaylists,
    setSelectedPlaylist,
    setActivePage
}) => {
    return (

        <div className='flex'>
            <div className='h-48 w-48  bg-cover flex items-end flex-col gap-1 rounded-2xl border-2 border-orange-400 bg-black relative'>
                <button onClick={() => {
                    setActiveWorkspace(null)
                    setActiveRightWorkspace(null)
                }} className='absolute  h-7 w-7 py-0.5 px-2  rounded text-white text-lg  bg-orange-400'>X</button>
                <div className='h-1/2 w-full flex justify-center items-center py-2'><h4 className='text-sm font-mono'>Create Playlist</h4></div>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className='h-full w-full flex flex-col items-center p-2 gap-4'>
                    <input onChange={handleChange} type="text" name="title" value={playlistForm.title} placeholder='playlist tilte' className='w-4/5 bg-black border-2 outline-none border-orange-400 rounded p-0.5' />
                    <input onChange={handleChange} type="url" name="coverUrl" value={playlistForm.coverUrl} placeholder='playlist cover url' className='w-4/5 bg-black border-2 border-orange-400 outline-none rounded p-0.5' />
                    <button className='px-3 py-0.5 border-2 border-orange-400 rounded-2xl '><Check size={20} /></button>
                </form>
            </div>
            <div className='juunOppa h-48 w-34 overflow-y-auto py-2 rounded-lg px-2 text-center bg-black flex flex-col items-center gap-4 border-2 border-orange-400'>
                {userPlaylists.length === 0 ? (
                    <div className='h-full w-full flex items-center justify-center '><h1 className='text-gray-600 '>No Playlist Created yet. Please Create One</h1></div>
                ) : (
                    userPlaylists.map((elem) => {
                        return (

                            <div key={elem.id} onClick={() => {
                                setSelectedPlaylist(elem)
                                setActivePage("songs")
                            }} className='h-auto w-full px-1 py-0.5 rounded bg-emerald-800 flex items-center justify-between'>
                                <div className='playTitle overflow-x-auto'>
                                    <h1 className='text-sm font-mono italic text-white text-left' title={elem.title}>{
                                        elem.title.length > 10 ? elem.title.toUpperCase().slice(0, 6) + "..." : elem.title.toUpperCase()}</h1>
                                </div>
                                <div className='h-8 w-8 overflow-hidden rounded-4xl'><img className='h-full w-full object-cover object-center' src={elem.coverUrl} alt="" /></div>
                            </div>

                        )
                    })
                )}
            </div>

        </div>

    )
}

export default CreatePlaylistWorkspace