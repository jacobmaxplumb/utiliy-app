import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './components/Home';
import { Contacts } from './components/Contacts';
import { EditContact } from './components/EditContact';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Utility App</h1>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/contacts')}>Contacts</button>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='contacts/:id' element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
