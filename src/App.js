import "./App.css";
import { ThemeProvider } from "styled-components";
import { color } from "./constants/Colors";
//react-route
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Navigation
import Navigation from "./components/Navigation";
//Routes
import Home from "./pages/Home";
import About from "./pages/About";
import Presentation from "./pages/Presentation";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectEdit from "./pages/ProjectEdit";

function App() {
  return (
    <Router>
      <ThemeProvider theme={color}>
        <div className="App">
          <Navigation />
          <div className="body">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} exact />
              <Route path="/presentations" component={Presentation} exact />
              <Route path="/contact" component={Contact} exact />
              <Route path="/projects" component={Projects} exact />
              <Route path="/admin" component={ProjectEdit} exact />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
