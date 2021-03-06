import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/Not-found/NotFound';
import FriendsDetails from './FriendsDetelas/FriendsDetails';
import Posts from './Post/Posts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/posts' element={<Posts></Posts>}></Route>
        <Route path='/friend/:friendId' element={<FriendsDetails></FriendsDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
