
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleBookmark = blog =>{
    const newBookmark = [...bookmarks,blog];
    setBookmarks(newBookmark);
  }

  const handleMarkedTime = (id,time) =>{
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime);

    const remainingBookmark =bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex md:container mx-auto p-3 md:p-0 lg:space-x-8'>
      <Blogs handleBookmark={handleBookmark} handleMarkedTime={handleMarkedTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
