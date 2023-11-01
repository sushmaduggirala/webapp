import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Founder from './Founder';
import Packages from './Packages';
import Contact from './Contact';
import './styles.css';
import Header from './header.js'
import { AiFillCar} from "react-icons/ai";
import { BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
                <Route path='/' element={<Home/>}></Route>
            <Route path='/Home.js' element={<Home/>}></Route>
            <Route path='/Founder.js' element={<Founder/>}></Route>
            <Route path='/Packages.js' element={<Packages />}></Route>
            <Route path='/Contact.js' element={<Contact />}></Route>

            
            </Routes>

    </div>
  );
}

export default App;
