import React, { useState } from 'react'
import SuggestionsPanel from './SuggestionsPanel'

const SearchPanel = (props) => {

    const [search, setSearch] = useState('')

    const filteredSuggestions =
        search === ""
            ? []
            : props.songs.filter((song) =>
                song.title.toLowerCase().startsWith(search.toLowerCase())
            );

    // First matching song
    const firstSuggestion = filteredSuggestions[0]?.title || "";

    // Remaining ghost text
    const ghostText = firstSuggestion.slice(search.length);

    const sharedInputStyles =
        "font-mono tracking-widest px-4 py-2 text-lg leading-normal italic";

    return (
        <div className='left flex flex-1 items-center justify-center flex-col p-10 bg-black text-white'>
            <div className='search-wrapper relative w-2/3'>

                <div
                    className="
            absolute
            inset-0
            flex
            items-center
            overflow-hidden
            pointer-events-none
            "
                >
                    <span className={sharedInputStyles}>
                        {search}
                        <span className="opacity-50">
                            {ghostText}
                        </span>
                    </span>
                </div>

                <input onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    onKeyDown={(e) => {
                        if (e.key === "Tab") {
                            e.preventDefault()

                            if (filteredSuggestions.length > 0) {
                                setSearch(filteredSuggestions[0].title)
                            }
                        }
                    }} type="text" maxLength={35} className={`${sharedInputStyles} relative z-10 w-full bg-transparent border-2 border-orange-400 rounded-3xl outline-none text-white`} placeholder='Search by Song/Artist/Album....' />
                <SuggestionsPanel filteredSuggestions={filteredSuggestions} />
            </div>
        </div>
    )
}

export default SearchPanel
