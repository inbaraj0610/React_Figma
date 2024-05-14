
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Menu from './Menu'

function App() {
  return (
        <Router>
    <div className="App">
          <Routes>
            <Route path='/' element={<Menu/>}/>
          </Routes>
    </div>
      </Router>
  );
}

export default App;
