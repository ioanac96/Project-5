import React, {useState,useEffect} from 'react';
import './App.less';

function App() {
  const [click, setClick] = useState(false);
  const [foxImage, setImage]=useState('');

  const switchImage = () => {
    const request = new Request("https://randomfox.ca/floof/", {method: 'GET'});
    fetch(request).then(response => {
      return response.json();
    }).then(data => {
      setImage(data.image);
      setClick(true);
    });
      setClick(false);
  }

  useEffect(switchImage, []);

  console.log(click);
  return (
    <div className="page">
      <div className="fox-box">
        {
          (click) ? <img src={foxImage}></img> : (click === false && foxImage !== '') ? <div className="loader"></div> :
          (click === false && foxImage === '') ? <div className="loader"></div> :null
        }
        <button onClick={switchImage}>Click</button>
    </div>
    </div>
  );
}

export default App;
