import { Routes, Route } from 'react-router-dom';
import JobPost from "./pages/JobPost";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<JobPost />} />
        </Routes>
    </div>
  );
}

export default App;
