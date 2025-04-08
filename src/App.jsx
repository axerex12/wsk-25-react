import {BrowserRouter, Route, Routes} from 'react-router';
import './App.css';
import Home from './views/home';
import Layout from './components/Layout';
import Profile from './views/profile';
import Upload from './views/upload';
import Single from './views/single';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
