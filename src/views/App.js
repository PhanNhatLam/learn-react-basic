import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js'
/**
 * 
 * 2 Components : class / funtion
 * JSX Example
 */

function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
