import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHouse } from './store/houseSlice/houseSlice'
import Navigation from "./navigation/Navigation.js"
import "./App.css"
import Home from "./pages/home/Home.js";
import Footer from "./commonComponents/commonButton/footer/Footer.js";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHouse())
  }, [])
  return (
    <div>
      <Navigation />
      {/* <Home/> */}
      <Footer />
    </div>
  );
}

export default App;
