import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/routes/Home";
import Project from "./components/routes/Project";
import About from "./components/routes/About";
import Blog from "./components/routes/Blog";
import Contact from "./components/routes/Contact";
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "project",
    element: /*#__PURE__*/React.createElement(Project, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "about",
    element: /*#__PURE__*/React.createElement(About, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "blog",
    element: /*#__PURE__*/React.createElement(Blog, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "contact",
    element: /*#__PURE__*/React.createElement(Contact, null)
  })), /*#__PURE__*/React.createElement(Footer, null)));
}
export default App;