import NavBar from './component/NavBar';
import Home from './component/Home'
import image from './images/bg.jpg'
import './App.css';

function App() {
  return (
    <>
    <div className="h-screen bg-cover bg-center bg-no-repeat"
    style={{backgroundImage: `url(${image})` }}>
      <NavBar />
      <Home />
    </div>
   

     </>
  );
}

export default App;
