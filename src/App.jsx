import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Social from "./components/social/Social";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Progress from "./components/progress/Progress";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
      <Toggle />
      <Intro />
      <About />
      <Progress/>
      <ProductList />
      <Contact />
      <Social/>
    </div>
  );
};

export default App;