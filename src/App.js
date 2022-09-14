import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './Components/Navbar/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
