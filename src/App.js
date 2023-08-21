import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import Main from "./Main";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather city="Tokyo" />
      <Main />
      <Forecast />
      <Footer />
    </div>
  );
}
