import './App.css';
import Card from "./components/Card_hooks";

function App() {
  return (
    <div className="App">
      <div className="main__container">
        <header className="title__container">
          <h1 className="title">Simple, traffic-based pricing</h1>
          <p className="subTitle">Sign-up for our 30-day trial. No credit card required.</p>
        </header>
        <Card />
      </div>
    </div>
  );
}

export default App;
