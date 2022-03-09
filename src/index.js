// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Import React components
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

// Import CSS styles
import "./App.css";

function Page () {
  return (
    <div className="page">
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <Page />,
  document.getElementById("root")
);

/* 
ReactDOM.render(
  <React.StrictMode>
    </React.StrictMode>,
    document.getElementById('root')
  );
*/
