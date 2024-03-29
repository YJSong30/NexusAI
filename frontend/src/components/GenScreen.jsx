import React from "react";
import GenImage from "./GenImage";
import Header from "./Header";
import { useState, useEffect } from "react";
//import ReactDOM from "react-dom/client";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const GenScreen = () => {
  // create message
  const [message, setMessage] = useState("");

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      console.log("something messed up");
    } else {
      setMessage(data.message);
    }
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
    <>
      <div className="columns">
        <div className="column">
          <Header title={message} />
          <GenImage />
        </div>
      </div>
    </>
  );
};

export default GenScreen;