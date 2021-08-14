import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/authentication/LoginScreen";
import RegisterScreen from "./screens/authentication/RegisterScreen";
import BloodRequestScreen from "./screens/blood-request/BloodRequestScreen";
import PostRequestScreen from "./screens/blood-request/PostRequestScreen";
import UpdateRequestScreen from "./screens/blood-request/UpdateRequestScreen";
import RequestDetailsScreen from "./screens/blood-request/RequestDetailsScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/blood-requests" component={BloodRequestScreen} />
          <Route path="/request/:id" component={RequestDetailsScreen} />
          <Route path="/create-new-request" component={PostRequestScreen} />
          <Route path="/update-request/:id" component={UpdateRequestScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
