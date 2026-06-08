import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Charts from './pages/Charts';
import Vision from './pages/Vision';
import Conclusion from './pages/Conclusion';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </Layout>
  );
}

export default App;
