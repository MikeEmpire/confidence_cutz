import * as React from "react";
import type { HeadFC } from "gatsby";

import Logo from "../images/Logo.png";
import HomeVideo from "../assets/doc-homepage-video.mp4";

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
      <div className="video__container">
        <video autoPlay controls>
          <source src={HomeVideo} type="video/mp4" />
        </video>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
