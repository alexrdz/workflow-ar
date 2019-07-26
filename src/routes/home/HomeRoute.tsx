import * as React from "react";
import Button from "@material-ui/core/Button";

// import styles from './HomeRoute.scss';

export const HomeRoute: React.FunctionComponent = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
};
