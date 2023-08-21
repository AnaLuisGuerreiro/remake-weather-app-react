import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import Main from "./Main";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Main />
      <Forecast />
      <Footer />
    </div>
  );
}
