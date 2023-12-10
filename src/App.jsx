

import { useState } from 'react';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import SideCard from './components/SideCard/SideCard';


const App = () => {
  const [readingTime, setReadingTime] = useState(0)
  const [bookmarkedItem, setBookmarkedItem] = useState([])




  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <main className='md:grid md:grid-cols-3'>

      <Blog readingTime={readingTime} setReadingTime = {setReadingTime} bookmarkedItem = {bookmarkedItem} setBookmarkedItem = {setBookmarkedItem}></Blog>
      <span className='relative'>
      <SideCard readingTime = {readingTime} bookmarkedItem = {bookmarkedItem}></SideCard>

      </span>

      </main>
    </div>
  );
};

export default App;
