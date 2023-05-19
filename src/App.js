import logo from './logo.svg';
import './App.css';

const App = () => {
  const search = (q) => {
    console.log({ q })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>test data</h1>
        <input placeholder='Search films here...' className='Movie-search' onChange={({ target }) => search(target.value)} />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">Sample Title</div>
            <div className="Movie-image" ></div>
            <div className="Movie-date">12-10-12</div>
            <div className="Movie-rate">4.9</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
