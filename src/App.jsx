import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated imports
import './App.css';

function App() {
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const [button1Size, setButton1Size] = useState({ width: 100, height: 40 }); // Initial size of button-1
  const [button1FontSize, setButton1FontSize] = useState(16); // Initial font size of button-1 text
  const [button2ClickCount, setButton2ClickCount] = useState(0);
  const [button2Text, setButton2Text] = useState("No.");

  const handleButton1Click = () => {
    setButton1Clicked(true);
    setButton2Clicked(false);
    // Render Yes component directly when button-1 is clicked
    // Navigate to the /yes route
    window.history.pushState({}, '', '/yes');
    location.reload();
  };

  const handleButton2Click = () => {
      setButton2ClickCount(prevCount => prevCount + 1);
      setButton2Clicked(true);
      setButton1Clicked(false);
      setButton1Size(prevSize => ({
        width: prevSize.width + 40,
        height: prevSize.height + 30
      }));
      // Increase font size of button-1 text by 2px
      setButton1FontSize(prevSize => prevSize + 4);

      // Update text of button-2
      if (button2ClickCount === 0) {
        setButton2Text("Are you sure?...");
      } else if (button2ClickCount === 1) {
        setButton2Text("Are you sure that you are sure?...");
      } else if (button2ClickCount === 2) {
        setButton2Text("Why tho...");
      } else if (button2ClickCount === 3) {
        setButton2Text("Please?");
      } else if (button2ClickCount === 4) {
        setButton2Text("Pretty please?");
      } else if (button2ClickCount === 5) {
        setButton2Text("Pretty pretty please?");
      } else if (button2ClickCount === 6) {
        setButton2Text("Stop clicking this!");
      } else if (button2ClickCount === 7) {
        setButton2Text("Be my valentine!!");
      } else if (button2ClickCount === 8) {
        setButton2Text("You can't say no!");
      } else if (button2ClickCount === 9) {
        setButton2Text(":(");
      }

  };

  return (
    <div>
      <header>
        <img src="https://i.pinimg.com/originals/de/2c/0f/de2c0f5ad5033b598b91510142ca88c4.gif" alt="GIF" />
      </header>
      <h1>
        Will you be my valentine??
      </h1>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/yes" element={<Yes />} /> {/* Define route for Yes component */}
            <Route path="/" element={
              <div>
                <button
                  className={`button-1 ${button2Clicked ? 'large' : ''}`}
                  style={{ width: `${button1Size.width}px`, height: `${button1Size.height}px`, fontSize: `${button1FontSize}px` }}
                  role="button"
                  onClick={handleButton1Click}
                >
                  YES!!
                </button>
                <button
                  className="button-2"
                  role="button"
                  onClick={handleButton2Click}
                >
                  {button2Text}
                </button>
              </div>
            } />
          </Routes>
        </Router>
      </div>
      <p>Credit to Mewtru on Instagram for the idea :D</p>
    </div>
  );
}

function Yes() {
  return (
    <div>
      <h2>Ok Yayy!!</h2>
      <img className="hugGif" src="https://i.pinimg.com/originals/90/d2/a0/90d2a025b1e962f62b679389011a4f71.gif" alt="oops" />
    </div>
  );
}

export default App;
