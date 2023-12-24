import React, { useState } from "react";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = async () => {
    try {
      const response = await axios.post("https://dinesh-url-shortener.onrender.com/api/url/shorten", {
        originalUrl,
      });

      const data = response.data;

      setShortUrl(data.shortUrl);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="form">

          <div className="row justify-content-center ">
            
            <div className="row justify-content-center align">
              <div className="col-xl-10">
                <h1>URL Shortener</h1>
              </div>
            </div>

            <div className="row justify-content-center align">
              <div className="col-xl-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter URL to shorten"
                  value={originalUrl}
                  onChange={(e) => setOriginalUrl(e.target.value)}
                />
              </div>
            </div>

            <div className="row justify-content-center align">
              <div className="col-xl-10">
                <button className="btn btn-primary mt-4" onClick={shortenUrl}>Shorten URL</button>
                {shortUrl && (
                  <div>
                    <p>Shortened URL:</p>
                    <a
                      href={`https://dinesh-url-shortener.onrender.com/${shortUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >{`https://dinesh-url-shortener.onrender.com/${shortUrl}`}</a>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
