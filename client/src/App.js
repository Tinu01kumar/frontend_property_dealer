import React from "react";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import PropertyDetailsPage from "./component/Search_img_view/PropertyDetailsPage";
import PropertyList from "./component/Search_img_view/PropertyList";
import Backgroundfile from "./component/Search_img_view/Backgroundfile";
import Footer from "./component/Footer";

const App = () => {
  return (
    <Router> 
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Backgroundfile />} />
          <Route exact path="/properties" element={<PropertyList />} />


          <Route path="/property/:id" element={<PropertyDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
