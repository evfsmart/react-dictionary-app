import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <img
          src="/img/book-icon-512px.png"
          alt="book logo"
          className="App-logo"
        /> */}
        <h1>Dictionary</h1>
        <br />
        <button className="btn btn-primary shadow-sm">Search</button>
        <Footer />
      </div>
    </div>
  );
}
