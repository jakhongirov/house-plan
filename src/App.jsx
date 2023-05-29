import './App.scss';
import { Routes, Route } from "react-router-dom";

import Main from './components/main/main';
import Video from './components/video/video';
import Image from './components/image/image';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/video' element={<Video />} />
      <Route path='/images' element={<Image />} />
    </Routes>
  );
}

export default App;
