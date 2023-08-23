import { Route, Routes } from 'react-router';
import InfoPage from './components/Pages/playerPage/InfoPage';
import Home from './components/Pages/HomePage/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/info' element={<InfoPage></InfoPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
