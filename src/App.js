import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

function App() {
  return (
    <>
    <Navbar navText='TextUtils'/>
    <div className="container"><TextFrom heading="Enter Text To Analyze Below"/></div>
    
    </>
  );
}

export default App;
