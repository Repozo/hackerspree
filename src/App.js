// Shared Components
import Sidebar from "./shared_components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeToggle from './DarkModeToggle';
// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Sections
import Landing from "./sections/landing";
import About from "./sections/about";
import Winners from "./sections/winners";
import Sponsors from "./sections/sponsors";
import Faq from "./sections/faq";
import Discord from "./sections/discord";
import SponsorCard from "./sections/sponsorcard";
import Footer from "./sections/footer";
import Know from "./sections/knowabout";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route
            exact
            path="/know-about-hackathon"
             >
               <Know/>
               </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <>
    <div className="toggle-btn">
     <DarkModeToggle/>
     </div>
      <Sidebar />
     
      <main>
        <Landing />

        <About />


        <Winners />

        <Sponsors />

        <SponsorCard />

        <Discord />

        <Faq />

        <Footer />
      </main>
    </>
  );
};

export default App;
