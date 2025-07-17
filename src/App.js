import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Tasklist from './Components/Tasklist';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <h1>Todo App</h1>
        <Routes>
          <Route path="/" element={<Tasklist />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
