import MySlider from './components/MySlider';
import MyCarousel from './components/MyCarousel';
import MovingQube from './components/MovingQube';
import Game from './components/Game';

import './App.css';

function App() {
  return (
      <div className='content'>
          <MySlider/>
          <MovingQube/>
          <MyCarousel/>
          <Game/>
      </div>
  );
}

export default App;
