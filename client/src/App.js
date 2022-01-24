import './App.css'
import logo from './senseimoonlogo.png'

function App() {

  return (
    <div className="App">
      <div className='main-container'>
        <header>
          <h1>Sensei Moon</h1>
          <div className='anchor-container'>
            <div className='anchor'>
              <a>Twitter</a>
              <div className='underline' />
            </div>
            <div className='anchor'>
              <a>PooCoin</a>
              <div className='underline' />
            </div>
            <div className='anchor'>
              <a>Liquidity Lock</a>
              <div className='underline' />
            </div>
          </div>
        </header>
        <div>
          <h2>Contract address</h2>
          <div className='tokenomics'>
            <p><strong>Buy</strong> <span>&mdash;</span> 9% marketing, 3% liquidity</p>
            <p><strong>Sell</strong> <span>&mdash;</span> 11% marketing, 4% liquidity</p>
            <p>1 million supply. Half burned.</p>
          </div>
          <h4>Karate chop these paper-handed bitches.</h4>
        </div>
        <div className='logo-container'>
          <img src={logo} alt='sensei moon logo' />
        </div>
      </div>
    </div>
  );
}

export default App;