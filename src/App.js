import './App.css';

const data = require('./data.json');
const stats = require('./stats.json');

function App() {
  const id = window.location.href.split('id=').pop();
  const bird = data[id];

  if (!bird) {
    return (
      <div className="App">
        <header className="App-header">
          <a rel="noreferrer" target="_blank" href='https://moonsama.com/token/ERC721/0xb654611f84a8dc429ba3cb4fda9fad236c505a1a/537'><img src="https://ipfs.io/ipfs/QmWpv9SXC3SA2yKzszf2xegt222W9gnkBBHNLXyyLx4e5e" className="App-logo" alt="logo" /></a>
          <p>Check rarity of moonsama</p>
          <form className='form' method='get'>
            <input name='id' type='text' placeholder='123' />
            <input type='submit' value='Search'/>
          </form><br />
          <div>Buy me a coffee: <span className='address'>0x1857dc51642490035cF8004bC13745D06eB77270</span></div><br/>
          <div>I am not associated with the <a rel="noreferrer" target="_blank" href="https://moonsama.com/">MOONSAMA</a> team.</div><br/>
          <div>Made with &#9829; by <a rel="noreferrer" target="_blank" href='https://twitter.com/niklabh'>@niklabh</a></div>
        </header>
      </div>
    );
  }

  console.log(bird);

  const imageUrl = `https://ipfs.io/ipfs/${bird.image.split('//').pop()}`

  console.log(imageUrl);
  return (
    <div className="App">
      <header className="App-header">
        <img src={imageUrl} className="App-logo" alt="nft" /><br />
        <div>{bird.name}</div><br/>
        <div>Traits: {bird.attributes.length}</div><br/>
        <div className='attributes'>
          {bird.attributes.map(attribute => <div className='attribute' key={attribute.value}>
            {attribute.value} <span className='percentage'>{(stats[attribute.trait_type][attribute.value]/10).toFixed(2)}%</span>
          </div>)}
        </div><br/>
        <div>Check another <a href="/">MOONSAMA</a></div><br/>
        <div>Buy me a coffee: <span className='address'>0x1857dc51642490035cF8004bC13745D06eB77270</span></div><br/>
        <div>I am not associated with the <a rel="noreferrer" target="_blank" href="https://moonsama.com/">MOONSAMA</a> team.</div><br/>
        <div>Made with &#9829; by <a rel="noreferrer" target="_blank" href='https://twitter.com/niklabh'>@niklabh</a></div>
      </header>
    </div>
  );
}

export default App;
