import React from "react";

function Homepage() {
  return (
    <div>
      <>
        <main role="madin" style={{ marginTop: 50 }}>
          {/* Main jumbotron for a primary marketing message or call to action */}
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">Hello, world!</h1>
              <p>
                This is a template for a simple authentication functionality in
                a website.
              </p>
              <p>
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Learn more »
                </a>
              </p>
            </div>
          </div>
          {/* /container */}
        </main>
        <footer className="container">
          <p>© Georges</p>
        </footer>
      </>
    </div>
  );
}

export default Homepage;
