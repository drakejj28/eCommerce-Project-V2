// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './header';
// import Footer from './footer';
// import Homepage from './homepage'; 
// import GamesPage from './GamesPage';
// import JoinPage from './JoinPage';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//       <Route path="/" element={<Homepage />} exact />
//         <Route path="/games" element={<GamesPage />} />
//         <Route path="/join" element={<JoinPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Homepage from './homepage'
import GamesPage from './GamesPage'
import JoinPage from './JoinPage'
import NotFoundPage from './NotFoundPage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App


