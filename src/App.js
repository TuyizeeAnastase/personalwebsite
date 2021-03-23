import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Content from './components/Content';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';

import { BrowserRouter, Route } from 'react-router-dom';

const HomePage=()=> {
  return (
    <div >
      <Navigation/>
      <Main />
      <Content />
      <Footer />
    </div>
  );
}

const App=()=>{
  return (
    <div>
     <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
     </BrowserRouter>
   </div>
  )
}

export default App;
