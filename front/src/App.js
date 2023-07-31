import "./App.css";
import Home from "../src/pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Services from "./pages/Services";
import UserAuth from "./component/UserAuth";
import Page404 from "./pages/Page404";
import Features from "./pages/Features.js";
import Protected from "./component/Protected";
import Addproperty from "./component/Addproperty";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userauth" element={<UserAuth />} />
          <Route path="/services" element={<Protected Cmp={Services} />} />
          <Route path="/features" element={<Features />} />
          <Route path="/addproperty" element={<Addproperty />} />
          <Route path="*" element={<Page404 />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<Contactus />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
