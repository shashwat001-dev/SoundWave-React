import React, { useEffect, useState } from 'react'
import PlaylistGridPage from '../components/playlist/PlaylistGridPage'
import PlaylistSongsPage from '../components/playlist/PlaylistSongsPage'

const Playlist = (props) => {

   const [activePage, setActivePage] = useState("grid")
   const [selectedPlaylist, setSelectedPlaylist] = useState(null)
   const [userPlaylists, setUserPlaylists] = useState([])

   useEffect(() => {
      const savedPlaylists = localStorage.getItem("userPlaylists")

      if (savedPlaylists) {
         const parsedPlaylists = JSON.parse(savedPlaylists)

         setUserPlaylists(parsedPlaylists)
      }

   }, [])

   return (
      <div>
         {activePage === "grid" && (
            <PlaylistGridPage playlists={props.playlists} songs={props.songs} setActivePage={setActivePage} setSelectedPlaylist={setSelectedPlaylist} userPlaylists={userPlaylists}
               setUserPlaylists={setUserPlaylists} />
         )}

         {activePage === "songs" && (
            <PlaylistSongsPage songs={props.songs} setActivePage={setActivePage} selectedPlaylist={selectedPlaylist} setSelectedPlaylist={setSelectedPlaylist} userPlaylists={userPlaylists}
               setUserPlaylists={setUserPlaylists} />
         )}
      </div>
   )
}

export default Playlist
