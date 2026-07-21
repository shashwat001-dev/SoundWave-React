import React from 'react'

const SuggestionsPanel = (props) => {
    return (
        <div id='panel' className='suggestions-panel px-2 rounded-2xl  absolute top-full left-0 w-full flex flex-col max-h-52 mt-4 overflow-y-auto items-center gap-2 '>
            {props.filteredSuggestions.map((song) => (
                <div
                    key={song.id}
                    className="h-auto p-4 w-full justify-center rounded-3xl border-b-4 border-orange-400 text-white font-mono font-bold flex items-start"
                >
                    <div className='flex-col h-full  w-52 pr-5 border-r'>
                        <h1 className='text-lg tracking-widest'>{song.title}</h1>
                        <h4 className='text-sm tracking-tighter text-gray-500'>{song.artist}</h4>
                    </div>
                    <div className='px-2 text-gray-500 text-sm items-center flex gap-2'>
                        <div className='flex-col h-full w-32'>
                            <h6>{song.albumType}</h6>
                            <h6 className='text-[10px] text-orange-400'>{song.album}</h6>
                        </div>
                        <div className='w-15 h-15 border'><img className='h-full w-full object-cover object-center overflow-hidden' src={song.coverImage} alt="" /></div>

                    </div>



                </div>
            ))}
        </div>
    )
}

export default SuggestionsPanel
