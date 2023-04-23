// import logo from './logo.svg';
import './App.css';
import NavBar  from './components/NavBar';
import Banner  from './components/Banner';
import Skills from './components/Skills';

import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  
  console.log("password is : ",process.env.REACT_APP_PASS);
  return (
    <div className="App" onClick={()=>console.log('App Clicked!!')}>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
