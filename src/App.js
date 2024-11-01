import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import SignUp from './pages/signup';
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/login" element ={<Login />} />
          <Route path="/signup" element ={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
