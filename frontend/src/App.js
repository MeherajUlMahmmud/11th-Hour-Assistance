import { Container } from "react-bootstrap";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import BloodRequestScreen from "./screens/BloodRequestScreen";
import PostRequestScreen from "./screens/PostRequestScreen";
import UpdateRequestScreen from "./screens/UpdateRequestScreen";
import RequestDetailsScreen from "./screens/RequestDetailsScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/blood-requests" component={BloodRequestScreen} />
          <Route path="/request/:id" component={RequestDetailsScreen} />
          <Route path="/create-new-request" component={PostRequestScreen} />
          <Route path="/update-request/:id" component={UpdateRequestScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
