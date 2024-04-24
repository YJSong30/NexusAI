import React, { useState } from "react";
import axios from "axios";

const GenImage = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // send prompt to backend

      const response = await axios.post(
        "http://localhost:8080/generate-image",
        { prompt }
      );

      setGeneratedImages(response.data); // update state with generated images
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="image-container">
      <div className="generate-header">
        <h1>
          Nexus<span>AI</span>
        </h1>
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
          <button
            type="submit"
            onClick={handleSubmit}
            className="generate-button"
          >
            Generate Image
          </button>
        </div>
      </div>

      {generatedImages.length > 0 && (
        <div>
          {generatedImages.map((image, index) => (
            <img
              key={index}
              src={`data:image/png;base64, ${image}`}
              alt={`Generated image ${index}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GenImage;
