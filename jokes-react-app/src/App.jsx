import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Browse from './pages/Browse.jsx';
import Random from './pages/Random.jsx';
import NewJokeForm from './pages/NewJoke.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/random" element={<Random />} />
          <Route path="/new" element={<NewJokeForm />} />
        </Routes>
      </main>
    </>
  );
}