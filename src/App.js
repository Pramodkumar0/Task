import './App.css';
import { useSelector } from 'react-redux';
import Login from './Page/Login';
import Logout from './Page/Logout';
import { selectUser } from './Features/UserSlice';




function App() {
  const user=useSelector(selectUser)
  return (
    <div className="App">
      <center>
        <h1>Form</h1>

        {user ? <Logout/> : <Login/>}

      </center>
     
    </div>
  );
}

export default App;
