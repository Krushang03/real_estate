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
import Protected from "./component/Protected";

function App() {
  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userauth" element={<UserAuth />} />
            <Route path="/services" element={<Protected Cmp={Services} />} />
            <Route path="*" element={<Page404 />} />
            {/* <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/contactus' element={<Contactus />} /> */}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
