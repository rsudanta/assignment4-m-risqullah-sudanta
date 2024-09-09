import logo from './logo.svg';
import './App.css';
import CurrencyComponent from './components/CurrencyComponent';

function App() {
  return (
    <>
      <div className='container' style={{ height: '100vh', display: 'flex' }}>
        <CurrencyComponent />
      </div>
    </>
  );
}

export default App;
