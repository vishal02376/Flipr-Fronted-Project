
import './App.css';
import AboutHome from './Components/About/AboutHome';
import Blog from './Components/BlogHome/Blog';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <>
     <Home/>
     <Blog/>
     <AboutHome/>
      </>
    </div>
  );
}

export default App;
