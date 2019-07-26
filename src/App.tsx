import * as React from "react";

import { Router, RouteComponentProps } from "@reach/router";

import { HeaderComponent } from "./components/header/HeaderComponent";
import { AboutRoute, HomeRoute } from "./routes";

// import styles from "./App.scss";

type Props = { component: React.ComponentType } & RouteComponentProps;
const Route: React.FunctionComponent<Props> = ({
  component: Component,
  ...rest
}) => <Component {...rest} />;

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <div className={"styles.content"}>
        <Router>
          <Route path="/" component={HomeRoute} />
          <Route path="/about" component={AboutRoute} />
        </Router>
      </div>
    </React.Fragment>
  );
};

export default App;
