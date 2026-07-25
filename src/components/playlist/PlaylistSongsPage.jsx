import React, { useState } from 'react'
import SongCard from './SongCard'
import SongWorkspace from './SongWorkspace'
import CreatePlaylistWorkspace from './CreatePlaylistWorkspace'
import PlaylistDetails from './PlaylistDetails'
import UserSongCard from './UserSongCard'
import { ChevronDown } from 'lucide-react';


// import cover from '../../assets/kpop.jpg'

const PlaylistSongsPage = (props) => {

    const [activeWorkspace, setActiveWorkspace] = useState(null)
    const [activeRightWorkspace, setActiveRightWorkspace] = useState(null)
    const [playlistForm, setPlaylistForm] = useState({
        title: "",
        coverUrl: ""
    })

    const [showDetailsDropdown, setShowDetailsDropdown] = useState(false)




    const handleChange = (e) => {
        const { name, value } = e.target

        setPlaylistForm({
            ...playlistForm,
            [name]: value
        })

    }


    const submitHandler = (e) => {
        e.preventDefault()

        if (!playlistForm.title.trim() || !playlistForm.coverUrl.trim()) return;

        const copyUser = [...props.userPlaylists]

        copyUser.push({
            id: Date.now(),
            title: playlistForm.title,
            coverUrl: playlistForm.coverUrl,
            createdAt: Date.now(),
            songs: []
        })

        props.setUserPlaylists(copyUser)
        // console.log(copyUser)
        localStorage.setItem(
            "userPlaylists",
            JSON.stringify(copyUser)
        )

        setPlaylistForm({
            title: "",
            coverUrl: ""
        })
    }

    const addSongToPlaylist = (songId, playlistId) => {

        const updatedPlaylists = [...props.userPlaylists]

        const selectedPlaylist = updatedPlaylists.find(
            (playlist) => playlist.id === playlistId
        )

        if (!selectedPlaylist) {
            return;
        }

        const checkAlreadyExisting = selectedPlaylist.songs.includes(songId)

        if (checkAlreadyExisting) {
            return;
        }

        selectedPlaylist.songs = [
            ...selectedPlaylist.songs,
            songId
        ]

        props.setUserPlaylists(updatedPlaylists)

        localStorage.setItem(
            "userPlaylists",
            JSON.stringify(updatedPlaylists)
        )

    }

    // Remove a song from a playlist
    const removeSongFromPlaylist = (songId, playlistId) => {

        // Create a copy of all playlists
        const updatedPlaylists = [...props.userPlaylists]

        // Find the playlist from which the song should be removed
        const selectedPlaylist = updatedPlaylists.find(
            (playlist) => playlist.id === playlistId
        )

        // Safety check
        if (!selectedPlaylist) {
            return;
        }

        // Create a new songs array without the selected song
        selectedPlaylist.songs = selectedPlaylist.songs.filter(
            (id) => id !== songId
        )

        // Update React State
        props.setUserPlaylists(updatedPlaylists)

        // Save updated playlists to localStorage
        localStorage.setItem(
            "userPlaylists",
            JSON.stringify(updatedPlaylists)
        )

    }

    const deletePlaylist = (playlistId) => {
        const updatedPlaylists = props.userPlaylists.filter(
            (playlist) => playlist.id !== playlistId)

        props.setUserPlaylists(updatedPlaylists)

        localStorage.setItem(
            "userPlaylists",
            JSON.stringify(updatedPlaylists)
        )

        props.setActivePage("grid")

    }

    const isUserPlaylist =
        typeof props.selectedPlaylist.songs[0] !== "object";

    const playlistSongs = isUserPlaylist
        ? props.songs.filter((song) =>
            props.selectedPlaylist.songs.includes(song.id)
        )
        : props.selectedPlaylist.songs;

   


    console.log(isUserPlaylist);
    console.log(playlistSongs);
    console.log(props.selectedPlaylist);
    console.log(props.selectedPlaylist.createdAt)

    // console.log(playlistForm)

    const showPlaylistPage = isUserPlaylist;

    return (
        showPlaylistPage ? (

            <div className='h-screen w-full bg-black text-white py-10 px-4 flex flex-col gap-4'>
                <div className='h-auto pb-2 flex items-center justify-between'>
                    <div className='w-4/4 pl-15 flex justify-start items-center'>
                        <h1 className='text-6xl tracking-widest font-bold'>
                            {props.selectedPlaylist.title.toUpperCase()}
                        </h1>
                    </div>

                    <div className='w-4/6 flex items-center justify-end gap-4 pr-6'>

                        <button
                            onClick={() => props.setActivePage("grid")}
                            className='p-4 mt-6 rounded-4xl text-white border-2 text-xl border-orange-400 font-mono tracking-widest'
                        >
                            Discover
                        </button>
                        <div className='relative'>
                            <button onClick={() => 
                                setShowDetailsDropdown(!showDetailsDropdown)} className='p-4 mt-6 relative rounded-4xl text-white border-2 text-xl border-orange-400 font-mono tracking-widest flex items-center gap-2'>
                                Playlist Details <ChevronDown size={20} className={`transition-transform duration-300 ${showDetailsDropdown ? "rotate-180" : "rotate-0"  }`} />                              
                            </button>
                            {showDetailsDropdown && <PlaylistDetails
                                selectedPlaylist={props.selectedPlaylist}
                                playlistSongs={playlistSongs}
                                deletePlaylist={deletePlaylist}
                            />}
                            
                        </div>


                    </div>
                </div>
                <div className='h-[75vh] w-full flex items-center'>
                    <div id='relate' className='h-full w-full flex flex-wrap items-center justify-center gap-10 overflow-y-auto px-6 py-10 '>
                        {playlistSongs.map((song) => {
                            return (

                                <UserSongCard
                                    key={song.id}
                                    song={song}
                                    selectedPlaylist={props.selectedPlaylist}
                                    removeSongFromPlaylist={removeSongFromPlaylist}
                                />

                            )
                        })}
                    </div>

                </div>
            </div>

        ) : (
            <div className='h-screen w-full flex flex-col gap-6 bg-black text-white py-10 px-4'>
                <div className='h-auto flex items-center justify-between'>
                    <div className='w-4/4 pl-52 flex justify-center'><h1 className='text-8xl tracking-widest font-bold'>Songs</h1></div>
                    <div className='w-1/6 flex items-center justify-center'><button onClick={() => props.setActivePage("grid")} className='p-4 mt-10  text-lg font-mono tracking-wide rounded-4xl text-white border-2 border-orange-400'>Back to Discover</button></div>
                </div>

                <div id='plate' className='h-full w-full flex flex-wrap items-center gap-10 justify-center py-10 overflow-y-auto'>
                    {playlistSongs.map((song) => {

                        return (
                            activeWorkspace === song.id ? (

                                <CreatePlaylistWorkspace
                                    key={song.id}
                                    song={song}
                                    setActiveWorkspace={setActiveWorkspace}
                                    setActiveRightWorkspace={setActiveRightWorkspace}
                                    submitHandler={submitHandler}
                                    handleChange={handleChange}
                                    playlistForm={playlistForm}
                                    userPlaylists={props.userPlaylists}
                                    setSelectedPlaylist={props.setSelectedPlaylist}
                                    setActivePage={props.setActivePage}
                                />

                            ) : (

                                <div className='flex' key={song.id}>
                                    <SongCard
                                        song={song}
                                        isExpanded={activeRightWorkspace === song.id}
                                        onToggle={() => {
                                            setActiveWorkspace(null)

                                            setActiveRightWorkspace(
                                                activeRightWorkspace === song.id
                                                    ? null
                                                    : song.id
                                            )

                                        }}
                                    />


                                    <SongWorkspace
                                        song={song}
                                        isExpanded={activeRightWorkspace === song.id}
                                        userPlaylists={props.userPlaylists}
                                        addSongToPlaylist={addSongToPlaylist}
                                        removeSongFromPlaylist={removeSongFromPlaylist}
                                        setActiveWorkspace={setActiveWorkspace}
                                        setActiveRightWorkspace={setActiveRightWorkspace}
                                    />

                                </div>
                            )
                        )
                    })}
                </div>

            </div>
        )
    )
}

export default PlaylistSongsPage
