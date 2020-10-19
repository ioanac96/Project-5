import React, {useState,useEffect} from 'react';

function App() {
  const [click, setClick] = useState('');
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
    <div>
      <button onClick={switchImage}>Click meh</button>
      {
        (click) ? <img src={foxImage}></img> : (click === false && foxImage !== '') ? <img src="https://www.health.org.uk/sites/default/files/styles/landscape_3_2/public/2019-11/nhs_performance_and_waiting_times_thumbnailartboard_10_copy.png?itok=-cxl-7oS"></img> :
         (click === false && foxImage === '') ? <img src="https://www.health.org.uk/sites/default/files/styles/landscape_3_2/public/2019-11/nhs_performance_and_waiting_times_thumbnailartboard_10_copy.png?itok=-cxl-7oS"></img>:null
      }
      
      
    </div>
  );
}

export default App;
