import './App.css';
import Greeting from './Greeting';

// react komponentin voi luoda usealla tavalla
// const App = function() {
// const App = () => {
function App() {
  return (
    <>
      <h1>My App</h1>
      <Greeting name="Pepe" />
    </>
  );
}

export default App;
