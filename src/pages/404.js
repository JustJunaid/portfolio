import React from "react";
import SEO from "../components/Seo";

export default function NotFound() {
  return (
    <main className="main-content text-center pb-lg-8">
      <SEO title="JustJunaid | Page Not Found" />
      <div className="container">
        <h1 className="display-1 text-muted mb-7">Page Not Found</h1>
        <p className="lead">
          Seems you're looking for something that doesn't exist.
        </p>
        <br />
        <button
          className="btn btn-secondary w-150 mr-2"
          type="button"
          onClick={() => window.history.back()}
        >
          Go back
        </button>
        <a className="btn btn-secondary w-150" href="/">
          Return Home
        </a>
      </div>
    </main>
  );
}
