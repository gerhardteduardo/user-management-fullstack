import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserRegister from "./pages/UserRegister";
import UserList from "./pages/UserList";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/usercreate" element={<UserRegister />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
