

import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import SideCard from './components/SideCard/SideCard';


const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <main className='md:grid md:grid-cols-3'>

      <Blog></Blog>
      <span className='relative'>
      <SideCard></SideCard>

      </span>

      </main>
    </div>
  );
};

export default App;
