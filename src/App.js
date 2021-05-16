import './App.css';
import dataSounds from "./dataSounds"

function App() {

  const handleClick = (e) =>{
    let display = document.getElementById("display");
    e.target.firstElementChild.play();
    display.textContent = e.target.id
  }

  const handleKeyUp = (e) =>{
    let button = document.getElementById(`${e.keyCode}`)
    if(button){ 
      button.firstElementChild.play()
      let display = document.getElementById("display");
      display.textContent = button.id
    }  
  }
  
  document.addEventListener("keyup",handleKeyUp)
  
  return (
    <div id="wrapper">
      <div id="drum-machine" >
      <div id="display" >holi</div>
      <div id="drums-container" >

      </div>
      {
        dataSounds.map(el =><div id={el.keyCode} name={el.id} key={el.id} onClick={handleClick} className="drum-pad" >{el.keyTrigger}
        <audio id={el.keyTrigger} className="clip" src={el.url}></audio>
      </div>)
      }
      </div>  
    </div>
  );
}
export default App;