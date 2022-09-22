import * as React from "react";
import Logo from "../images/Logo.png";

import type { HeadFC } from "gatsby";

import "../styles.scss";

const IndexPage = () => {
  return (
    <main>
      <nav>
        <article>
          <img src={Logo} />
        </article>
        <menu>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Book A Cut</li>
            <li>Contact</li>
          </ul>
        </menu>
      </nav>
      <div className=""></div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
