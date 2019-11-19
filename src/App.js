import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PodcastSearch from './components/PodcastSearch/PodcastSearch';
import Episode from './components/Episode/Episode';
import Podcast from './components/Podcast/Podcast';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={PodcastSearch} />
          <Route exact path="/podcasts/:podcastId" component={Podcast} />
          <Route
            exact
            path="/podcasts/:podcastId/:episodeNumber"
            component={Episode}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
