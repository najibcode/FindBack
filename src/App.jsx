import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ReportLost from './pages/ReportLost';
import ReportFound from './pages/ReportFound';
import Dashboard from './pages/Dashboard';
import HowItWorks from './pages/HowItWorks';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report-lost" element={<ReportLost />} />
          <Route path="/report-found" element={<ReportFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
