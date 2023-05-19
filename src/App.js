import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    }
  }
  return (
    <>
    <Router>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Switch>
          <Router exact path="/about">
          <About mode={mode} />
          </Router>
          <Router exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text Area" mode={mode} />
          </Router>
        </Switch>
      </div>
      </Router>

    </>
  );
}

export default App;
