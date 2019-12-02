import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { UserProvider } from "./UserContext";
import ProtectedRoute from "components/ProtectedRoute";
import LoginView from "views/Login";
import VideoListView from "views/VideoList";
import LoadScreenView from "views/LoadScreen";
import styles from "./App.module.scss";

function App() {
  return (
    <UserProvider>
      <div className={styles.App}>
        <BrowserRouter>
          <Switch>
            <Route path="/Login" render={() => <LoginView />} />
            <ProtectedRoute
              path="/ListVideos"
              render={() => <VideoListView />}
            />
            <Route path="/" render={() => <LoadScreenView />} />
          </Switch>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
