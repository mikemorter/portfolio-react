import React from "react";
import classNames from "classnames";
import { HashLink } from "react-router-hash-link";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <HashLink to="#about">About</HashLink>
        </li>
        <li>
          <HashLink to="#Technologies">Technologies</HashLink>
        </li>
        <li>
          <HashLink to="#portfolio">Projects</HashLink>
        </li>
        <li>
          <HashLink to="#Recommendations">Recommendations</HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
