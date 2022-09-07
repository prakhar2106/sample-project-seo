import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Helmet>
              <title>hello</title>
            </Helmet>
            {/* <ReactSEOMetaTags
              website={{
                title: "about",

                description: "about desc",
              }}
              render={(el) => <Helmet>{el}</Helmet>}
            /> */}
            <p>hello about</p>
          </Route>
          <Route path="/users">
            <Helmet>
              <title>hello</title>
            </Helmet>
            {/* <ReactSEOMetaTags
              website={{
                title: "users title",

                description: "users desc",
              }}
              render={(el) => <Helmet>{el}</Helmet>}
            /> */}
            <p>hello users</p>
          </Route>
          <Route path="/">
            <Helmet>
              <title>hello</title>
            </Helmet>
            {/* <ReactSEOMetaTags
              website={{
                title: "home",

                description: "home desc",
              }}
              render={(el) => <Helmet>{el}</Helmet>}
            /> */}
            <p>hello yo</p>
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>
);
