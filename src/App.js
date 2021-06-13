import "./App.css";
import Header from "./Header";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Dictionary />
        <Footer />
      </div>
    </div>
  );
}
