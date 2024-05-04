import { useState } from "react";
//import ErrorMessage from "./ErrorMessage";
import axios from "axios";

const GenImage = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // send prompt to backend
      const response = await axios.post(
        "http://localhost:8080/generate-image",
        { prompt }
      );
      setGeneratedImages(response.data); // update state with generated images
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTutorialToggle = () => {
    setShowTutorial(!showTutorial); // Toggle the tutorial pop-up
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "tutorial-overlay") {
      setShowTutorial(false);
    }
  };

  return (
    <div className="image-container">
      <div className="button-container">
        <button onClick={() => window.history.back()} className="back-button poppins-regular">
          Back
        </button>
        <button onClick={handleTutorialToggle} className="tutorial-button poppins-regular">
          Prompts Guide
        </button>
      </div>

      {showTutorial && (
        <div id="tutorial-overlay" className="tutorial-overlay" onClick={handleOutsideClick}>
          <div className="tutorial-popup poppins-regular">
            <p>Here are our 20 available prompts:</p>
            <ol>
              <li>2d-cavescene</li>
              <li>2d-chinesetown</li>
              <li>2d-cyberpunkchinesescene</li>
              <li>2d-cyberpunkscene</li>
              <li>2d-desertscene</li>
              <li>2d-forestscene</li>
              <li>2d-futurecityscene</li>
              <li>2d-glacierscene</li>
              <li>2d-grasslandscene</li>
              <li>2d-housescene</li>
              <li>2d-lakescene</li>
              <li>2d-moderncityscene</li>
              <li>2d-ruincityscene</li>
              <li>2d-seasidescene</li>
              <li>2d-skycityscene</li>
              <li>2d-steampunkcityscene</li>
              <li>2d-swampscene</li>
              <li>2d-townscene</li>
              <li>2d-volcanoscene</li>
              <li>2d-waterfallscene</li>
            </ol>
            <a href="/#tutorial" className="tutorial-link">View Full Tutorial</a>
            <button onClick={handleTutorialToggle} className="back-button">Close</button>
          </div>
        </div>
      )}

      <div className="header">
        <div className="generate-header">
          <h1 class="poppins-bold">
            Nexus<span>AI</span>
          </h1>
        </div>

        {/* <div>
        <img src={pic1} alt="pic1" />
      </div> */}

        {generatedImages.length > 0 && (
          <div className="generate-picture">
            {generatedImages.map((image, index) => (
              <img
                placeholder=""
                key={index}
                src={`data:image/png;base64, ${image}`}
                alt={`Generated image ${index}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="search-box">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter a prompt"
              className="form-container"
            />
          </form>
        </div>

        <div className="button-container">
          {loading ? ( // Render loading indicator instead of button text while loading is true
            <div className="loader"></div>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="generate-button"
            >
              Generate Image
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenImage;
