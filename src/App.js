// import logo from './logo.svg';
import './App.css';
// import ImgMemes from './components/ImgMemes';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">

      {/* <ImgMemes /> */}


      <div className='d-flex justify-content-center mt-5'>
        <Counter />
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
