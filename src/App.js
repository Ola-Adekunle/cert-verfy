import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Home from "./shared/pages/Home";
import About from "./shared/pages/About";
import Footer from "./shared/components/Navigation/Footer";
import UserAuth from "./user/pages/UserAuth";
import AdminAuth from "./admin/pages/AdminAuth";
import { UserAuthContext } from "./shared/context/user-auth-context";
import { AdminAuthContext } from "./shared/context/admin-auth-context";
import UserLogin from "./user/pages/UserLogin";
import AdminLogin from "./admin/pages/AdminLogin";

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [adminIsLoggedIn, setAdminIsLoggedIn] = useState(false);

  const userLogin = useCallback(() => {
    setUserIsLoggedIn(true);
  }, []);

  const userLogout = useCallback(() => {
    setUserIsLoggedIn(false);
  }, []);

  const adminLogin = useCallback(() => {
    setAdminIsLoggedIn(true);
  }, []);

  const adminLogout = useCallback(() => {
    setAdminIsLoggedIn(false);
  }, []);

  let routes;
  if (userIsLoggedIn) {
    routes = (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/user/login" element={<UserLogin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else if (adminIsLoggedIn) {
    routes = (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/auth/user" element={<UserAuth />} />
        <Route exact path="/auth/admin" element={<AdminAuth />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <UserAuthContext.Provider
      value={{
        isLoggedIn: userIsLoggedIn,
        login: userLogin,
        logout: userLogout,
      }}
    >
      <AdminAuthContext.Provider
        value={{
          isLoggedIn: adminIsLoggedIn,
          login: adminLogin,
          logout: adminLogout,
        }}
      >
        <Router>
          <MainNavigation />
          <main>
          {userIsLoggedIn && <Navigate to="/user/login" replace />} {/* Redirect here */}
          {adminIsLoggedIn && <Navigate to="/admin/login" replace />} {/* Redirect here */}
          {routes}
          </main>
          <Footer />
        </Router>
      </AdminAuthContext.Provider>
    </UserAuthContext.Provider>
  );
}

export default App;
