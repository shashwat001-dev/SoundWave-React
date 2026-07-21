import React from 'react'
import Home from './pages/Home';
import coverAespa from './assets/Aespa.jpg'
import coverNmixx from './assets/Nmixx.jpg'
import coverIve from './assets/IVE.jpg'
import coverCortis from './assets/Cortis.jpg'
import coverZico from './assets/Zico.jpg'
import coverBabyMon from './assets/ChooM.jpg'
import coverTK from './assets/TK.jpg'
import coverAi from './assets/Ai.jpg'
import coverLiSA from './assets/LiSA.jpg'
import coverYoaSobi from './assets/Yoa.jpg'
import coverCreepy from './assets/creepy.jpg'
import coverFuziKaze from './assets/FZK.jpg'
import coverPhantom from './assets/phantom.jpg'
import coverKenshi from './assets/yonezu.jpg'
import coverSawano from './assets/Sawano.jpg'
import coverImase from './assets/Imase.jpg'
import coverImagine from './assets/Dragons.jpg'
import coverEd from './assets/Ed.jpg'
import coverDua from './assets/dua.jpg'
import coverHarry from './assets/Harry.jpg'
import coverOlivia from './assets/olivia.jpg'
import coverWeeknd from './assets/weeknd.jpg'
import coverArijit from './assets/Arijit.jpg'
import coverAditya from './assets/Paaro.jpg'
import coverMohit from './assets/mohit.jpg'
import coverJasleen from './assets/Ranjha.jpg'
import coverKushagra from './assets/Finding.jpg'
import coverAnuv from './assets/Anuv.jpg'
import coverTalwinder from './assets/Talwinder.jpg'
import coverHindiPop from './assets/hpop.jpg'
import coverKorean from './assets/korCover.jpg'
import coverHindi from './assets/anyCover.jpg'
import coverEnglish from './assets/playCover.jpg'
import coverJapanese from './assets/newCover.jpg'


const App = () => {

  const songs = [

    {
      id: 1,
      title: "LEMONADE",
      artist: "aespa",
      subGenre: "K-Pop",
      album: "LEMONADE",
      albumType: "Album",
      coverImage: coverAespa,
    },
    {
      id: 2,
      title: "WDA (Whole Different Animal)",
      artist: "aespa",
      subGenre: "K-Pop",
      album: "LEMONADE",
      albumType: "Album",
      coverImage: coverAespa,
    },
    {
      id: 3,
      title: "BLACKHOLE",
      artist: "IVE",
      subGenre: "K-Pop",
      album: "REVIVE+",
      albumType: "Album",
      coverImage: coverIve,
    },
    {
      id: 4,
      title: "Bang Bang",
      artist: "IVE",
      subGenre: "K-Pop",
      album: "REVIVE+",
      albumType: "Album",
      coverImage: coverIve,
    },
    {
      id: 5,
      title: "Heavy Serenade",
      artist: "NMIXX",
      subGenre: "K-Pop",
      album: "Heavy Serenade",
      albumType: "EP",
      coverImage: coverNmixx,
    },
    {
      id: 6,
      title: "Crescendo",
      artist: "NMIXX",
      subGenre: "K-Pop",
      album: "Heavy Serenade",
      albumType: "EP",
      coverImage: coverNmixx,
    },
    {
      id: 7,
      title: "CHOOM",
      artist: "BABYMONSTER",
      subGenre: "K-Pop",
      album: "CHOOM",
      albumType: "EP",
      coverImage: coverBabyMon,
    },
    {
      id: 8,
      title: "SUGAR HONEY ICE TEA",
      artist: "BABYMONSTER",
      subGenre: "K-Pop",
      album: "SUGAR HONEY ICE TEA",
      albumType: "Single",
      coverImage: coverBabyMon,
    },
    {
      id: 9,
      title: "REDRED",
      artist: "CORTIS",
      subGenre: "K-Pop",
      album: "GREENGREEN",
      albumType: "EP",
      coverImage: coverCortis,
    },
    {
      id: 10,
      title: "TNT",
      artist: "CORTIS",
      subGenre: "K-Pop",
      album: "GREENGREEN",
      albumType: "EP",
      coverImage: coverCortis,
    },
    {
      id: 11,
      title: "Matsuri",
      artist: "Fujii Kaze",
      subGenre: "J-Pop",
      album: "LOVE ALL SERVE ALL",
      albumType: "Album",
      coverImage: coverFuziKaze,
    },
    {
      id: 12,
      title: "Otomodachi",
      artist: "Phantom Siita",
      subGenre: "J-Pop",
      album: "Shoujo no Hi no Omoide",
      albumType: "Album",
      coverImage: coverPhantom,
    },
    {
      id: 13,
      title: "Blue Diary",
      artist: "Ai Tomioka",
      subGenre: "J-Pop",
      album: "Ai's Cream",
      albumType: "Album",
      coverImage: coverAi,
    },
    {
      id: 14,
      title: "Idol",
      artist: "YOASOBI",
      subGenre: "J-Pop",
      album: "Idol",
      albumType: "Single",
      coverImage: coverYoaSobi,
    },
    {
      id: 15,
      title: "Otonoke",
      artist: "Creepy Nuts",
      subGenre: "J-Pop",
      album: "Otonoke",
      albumType: "Single",
      coverImage: coverCreepy,
    },
    {
      id: 16,
      title: "Iris Out",
      artist: "Kenshi Yonezu",
      subGenre: "J-Pop",
      album: "Lost Corner",
      albumType: "Album",
      coverImage: coverKenshi,
    },
    {
      id: 17,
      title: "Unravel",
      artist: "TK from Ling Tosite Sigure",
      subGenre: "J-Pop",
      album: "Fantastic Magic",
      albumType: "Album",
      coverImage: coverTK ,
    },
    {
      id: 18,
      title: "Gurenge",
      artist: "LiSA",
      subGenre: "J-Pop",
      album: "LEO-NiNE",
      albumType: "Album",
      coverImage: coverLiSA,
    },
    {
      id: 19,
      title: "Shinunoga E-Wa",
      artist: "Fujii Kaze",
      subGenre: "J-Pop",
      album: "HELP EVER HURT NEVER",
      albumType: "Album",
      coverImage: coverFuziKaze,
    },
    {
      id: 20,
      title: "Bling-Bang-Bang-Born",
      artist: "Creepy Nuts",
      subGenre: "J-Pop",
      album: "Bling-Bang-Bang-Born",
      albumType: "Single",
      coverImage: coverCreepy,
    },
    {
      id: 21,
      title: "Kesariya",
      artist: "Arijit Singh",
      subGenre: "Hindi Pop",
      album: "Brahmāstra",
      albumType: "Album",
      coverImage: coverHindiPop,
    },
    {
      id: 22,
      title: "Heeriye",
      artist: "Arijit Singh",
      subGenre: "Hindi Pop",
      album: "Heeriye",
      albumType: "Single",
      coverImage: coverArijit,
    },
    {
      id: 23,
      title: "Jo Tum Mere Ho",
      artist: "Anuv Jain",
      subGenre: "Hindi Pop",
      album: "Jo Tum Mere Ho",
      albumType: "Single",
      coverImage:  coverAnuv,
    },
    {
      id: 24,
      title: "Husn",
      artist: "Anuv Jain",
      subGenre: "Hindi Pop",
      album: "Husn",
      albumType: "Single",
      coverImage:  coverAnuv,
    },
    {
      id: 25,
      title: "Sahiba",
      artist: "Aditya Rikhari",
      subGenre: "Hindi Pop",
      album: "Sahiba",
      albumType: "Single",
      coverImage: coverAditya,
    },
    {
      id: 26,
      title: "Apna Bana Le",
      artist: "Arijit Singh",
      subGenre: "Hindi Pop",
      album: "Bhediya",
      albumType: "Album",
      coverImage: coverHindiPop,
    },
    {
      id: 27,
      title: "Ranjha",
      artist: "Jasleen Royal",
      subGenre: "Hindi Pop",
      album: "Shershaah",
      albumType: "Album",
      coverImage: coverJasleen,
    },
    {
      id: 28,
      title: "Tum Se Hi",
      artist: "Mohit Chauhan",
      subGenre: "Hindi Pop",
      album: "Jab We Met",
      albumType: "Album",
      coverImage: coverMohit,
    },
    {
      id: 29,
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      subGenre: "Hindi Pop",
      album: "Aashiqui 2",
      albumType: "Album",
      coverImage: coverArijit,
    },
    {
      id: 30,
      title: "Finding Her",
      artist: "Kushagra",
      subGenre: "Hindi Pop",
      album: "Finding Her",
      albumType: "Single",
      coverImage: coverKushagra,
    },
    {
      id: 31,
      title: "Blinding Lights",
      artist: "The Weeknd",
      subGenre: "English Pop",
      album: "After Hours",
      albumType: "Album",
      coverImage: coverWeeknd ,
    },
    {
      id: 32,
      title: "Die For You",
      artist: "The Weeknd",
      subGenre: "English Pop",
      album: "Starboy",
      albumType: "Album",
      coverImage: coverWeeknd,
    },
    {
      id: 33,
      title: "As It Was",
      artist: "Harry Styles",
      subGenre: "English Pop",
      album: "Harry's House",
      albumType: "Album",
      coverImage: coverHarry,
    },
    {
      id: 34,
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      subGenre: "English Pop",
      album: "Fine Line",
      albumType: "Album",
      coverImage: coverHarry,
    },
    {
      id: 35,
      title: "Levitating",
      artist: "Dua Lipa",
      subGenre: "English Pop",
      album: "Future Nostalgia",
      albumType: "Album",
      coverImage: coverDua,
    },
    {
      id: 36,
      title: "Physical",
      artist: "Dua Lipa",
      subGenre: "English Pop",
      album: "Future Nostalgia",
      albumType: "Album",
      coverImage: coverDua,
    },
    {
      id: 37,
      title: "Perfect",
      artist: "Ed Sheeran",
      subGenre: "English Pop",
      album: "÷ (Divide)",
      albumType: "Album",
      coverImage: coverEd,
    },
    {
      id: 38,
      title: "Photograph",
      artist: "Ed Sheeran",
      subGenre: "English Pop",
      album: "× (Multiply)",
      albumType: "Album",
      coverImage: coverEd,
    },
    {
      id: 39,
      title: "So Easy",
      artist: "Olivia Dean",
      subGenre: "English Pop",
      album: "The Art of Loving",
      albumType: "Album",
      coverImage: coverOlivia,
    },
    {
      id: 40,
      title: "Believer",
      artist: "Imagine Dragons",
      subGenre: "English Pop",
      album: "Evolve",
      albumType: "Album",
      coverImage: coverImagine,
    },
    {
      id: 41,
      title: "Any Song",
      artist: "Zico",
      subGenre: "K-Pop",
      album: "Any Song",
      albumType: "Single",
      coverImage: coverZico,
    },
    {
      id: 42,
      title: "Whiplash",
      artist: "aespa",
      subGenre: "K-Pop",
      album: "Whiplash",
      albumType: "EP",
      coverImage: coverAespa,
    },
    {
      id: 43,
      title: "Armageddon",
      artist: "aespa",
      subGenre: "K-Pop",
      album: "Armageddon",
      albumType: "Album",
      coverImage: coverAespa,
    },
    {
      id: 44,
      title: "Night Dancer",
      artist: "imase",
      subGenre: "J-Pop",
      album: "Night Dancer",
      albumType: "Single",
      coverImage: coverImase,
    },
    {
      id: 45,
      title: "Inertia",
      artist: "Sawano Hiroyuki",
      subGenre: "J-Pop",
      album: "Inertia",
      albumType: "Single",
      coverImage: coverSawano,
    },
    {
      id: 46,
      title: "Haseen",
      artist: "Talwinder",
      subGenre: "Hindi Pop",
      album: "Haseen",
      albumType: "Single",
      coverImage: coverTalwinder,
    },


  ];

  const playlists = [
    {
      id: 1,
      title: "K-Pop",
      cover: coverKorean,
      songs: songs.filter(song => song.subGenre === "K-Pop"),
    },
    {
      id: 2,
      title: "English Pop",
      cover: coverEnglish,
      songs: songs.filter(song => song.subGenre === "English Pop"),
    },
    {
      id: 3,
      title: "Hindi Pop",
      cover: coverHindi,
      songs: songs.filter(song => song.subGenre === "Hindi Pop"),
    },

    {
      id: 4,
      title: "J-Pop",
      cover: coverJapanese,
      songs: songs.filter(song => song.subGenre === "J-Pop"),
    },



  ];

  return (
    <Home songs={songs} playlists={playlists} />

  )
}

export default App


