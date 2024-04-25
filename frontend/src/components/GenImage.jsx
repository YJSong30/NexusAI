import { useState } from "react";
//import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import pic1 from "../images/pic1.png";

const GenImage = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="image-container">
      <div className="back-button poppins-regular">
        <button onClick={() => window.history.back()} className="back-button">
          Back
        </button>
      </div>

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
