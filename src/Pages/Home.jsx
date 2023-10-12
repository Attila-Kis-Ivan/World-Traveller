import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import AppNavigation from "../components/AppNavigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <AppNavigation />
      <h1 className="test">WordTraveler</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
};

export default Home;
