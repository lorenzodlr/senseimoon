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
              <a href='https://poocoin.app/tokens/0xe74074ec6a7e24877bf286e2b115d96e617984be' target='__blank'>PooCoin</a>
              <div className='underline' />
            </div>
            <div className='anchor'>
              <a href='https://deeplock.io/lock/0xf40149B4bD875AC5dD730ed4A80F67D17b0524d2' target='__blank'>Liquidity Lock</a>
              <div className='underline' />
            </div>
          </div>
        </header>
        <div>
          <h2>0xE74074eC6A7E24877BF286E2B115D96e617984Be</h2>
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