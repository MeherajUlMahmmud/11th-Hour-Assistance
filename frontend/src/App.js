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
import EquipmentRequestScreen from "./screens/equipment/EquipmentRequestScreen";
import PostEquipmentRequestScreen from "./screens/equipment/PostEquipmentRequestScreen";
import EquipmentRequestDetailsScreen from "./screens/equipment/EquipmentRequestDetailsScreen";
import UpdateEquipmentRequestScreen from "./screens/equipment/UpdateEquipmentRequestScreen";
import ArticleHomeScreen from "./screens/article/ArticleHomeScreen";
import ArticlePostScreen from "./screens/article/ArticlePostScreen";
import ArticleDetailsScreen from "./screens/article/ArticleDetailsScreen";
import ArticleUpdateScreen from "./screens/article/ArticleUpdateScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfileUpdateScreen from "./screens/user/ProfileUpdateScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/blood-requests" component={BloodRequestScreen} />
        <Route path="/request/:id" component={RequestDetailsScreen} />
        <Route path="/create-new-request" component={PostRequestScreen} />
        <Route path="/update-request/:id" component={UpdateRequestScreen} />
        <Route path="/equipment-requests" component={EquipmentRequestScreen} />
        <Route
          path="/equipment-request/:id"
          component={EquipmentRequestDetailsScreen}
        />
        <Route
          path="/create-new-equipment-request"
          component={PostEquipmentRequestScreen}
        />
        <Route
          path="/update-equipment-request/:id"
          component={UpdateEquipmentRequestScreen}
        />
        <Route path="/articles" component={ArticleHomeScreen} />
        <Route path="/article/:id" component={ArticleDetailsScreen} />
        <Route path="/create-article" component={ArticlePostScreen} />
        <Route path="/edit-article/:id" component={ArticleUpdateScreen} />

        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/update-profile" component={ProfileUpdateScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
