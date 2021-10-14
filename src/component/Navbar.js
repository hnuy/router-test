import React from "react";
import { Alert } from "reactstrap";

export const navbar = () => {
  return (
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <Alert color="primary">
          <a
            class="nav-link active bg-primary"
            aria-current="page"
            href="/"
          >
            Home
          </a>
        </Alert>
      </li>
      <li class="nav-item">
        <Alert color="primary">
          <a
            class="nav-link active bg-primary"
            aria-current="page"
            href="about"
          >
            About
          </a>
        </Alert>
      </li>
      <li class="nav-item">
        <Alert color="primary">
          <a
            class="nav-link active bg-primary"
            aria-current="page"
            href="contact"
          >
            Contack
          </a>
        </Alert>
      </li>
      <li class="nav-item">
        <Alert color="primary">
          <a
            class="nav-link active bg-primary"
            aria-current="page"
            href="profile"
          >
            Profile
          </a>
        </Alert>
      </li>
    </ul>
  );
};
export default navbar;
