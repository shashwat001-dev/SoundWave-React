import React from 'react'

const SongCard = ({ song, isExpanded, onToggle }) => {
    return (
        <div
            style={{ backgroundImage: `url(${song.coverImage})` }}
            className='songCard h-48 w-48 bg-cover flex items-end flex-col gap-18 border-2 border-orange-400 bg-gray-800'
        >
            <button
                onClick={onToggle}
                className={`py-0.5 px-2 rounded text-white text-lg ${isExpanded ? "bg-red-800" : "bg-emerald-800"}`}
            >
                {isExpanded ? "x" : "+"}
            </button>
        </div>
    )
}

export default SongCard