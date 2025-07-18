import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Projects from './components/content/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
