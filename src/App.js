import logo from './logo.svg';
import './App.css';
import Custumnavbar from './componens/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testform from './componens/form/form';
import Profile from './componens/profile/profile';

function App() {
  return (
    <div className="App">
      <Custumnavbar/>
      <Testform/>
      <Profile/>
    </div>
  );
}

export default App;
