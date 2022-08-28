import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import { useSelector } from "react-redux";
import Login from "../pages/auth/login/Login";
import Signup from "../pages/auth/signup/Signup";
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword";
import PrivateNavigation from "./PrivateNavigation";
import PublicNavigation from "./PublicNavigation";
import Home from "../pages/home/Home";
import Feed from "../pages/feed/Feed";
import Post from "../pages/post/Post";

export default function Navigation() {
  const isLoginUser = useSelector((store) => store.AuthReducer.isLoginUser)
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PrivateNavigation isLoginUser={isLoginUser}>
            <Home />
          </PrivateNavigation>
        } />
        <Route path="/feed" element={
          <PrivateNavigation isLoginUser={isLoginUser}>
            <Feed />
          </PrivateNavigation>
        } />
        <Route path="/post" element={
          <PrivateNavigation isLoginUser={isLoginUser}>
            <Post />
          </PrivateNavigation>
        } />
        <Route exact path="/login" element={
          <PublicNavigation isLoginUser={isLoginUser}>
            <Login />
          </PublicNavigation>
        } />
        <Route path="/signup" element={
          <PublicNavigation isLoginUser={isLoginUser}>
            <Signup />
          </PublicNavigation>
        } />
        <Route path="/forgotPassword" element={
          <PublicNavigation isLoginUser={isLoginUser}>
            <ForgotPassword />
          </PublicNavigation>
        } />

      </Routes>
    </Router>
  )
}
