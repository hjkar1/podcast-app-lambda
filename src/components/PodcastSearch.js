import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchPodcasts } from '../store/actions/actionCreators';
import TopNavBar from './ui/TopNavBar';
import SearchBar from './ui/SearchBar';
import PodcastList from './PodcastList';
import Spinner from './ui/Spinner';

class PodcastSearch extends Component {
  state = {
    searchTerms: '',
    searchSubmitted: false
  };

  handleSearchTermChange = ({ target: { value } }) => {
    this.setState({ searchTerms: value });
  };

  handleSearchSubmit = event => {
    const { searchTerms } = this.state;
    const { searchPodcasts } = this.props;
    event.preventDefault();
    this.setState({ searchSubmitted: true });
    searchPodcasts(searchTerms);
  };

  renderPodcasts = () => {
    const { loading, podcasts } = this.props;
    const { searchSubmitted } = this.state;
    if (loading) {
      return <Spinner />;
    }
    if (!podcasts) {
      return null;
    }
    if (searchSubmitted && podcasts.length < 1) {
      return 'No podcasts found';
    }
    return <PodcastList podcasts={podcasts} />;
  };

  render() {
    const { searchTerms } = this.state;
    const { error } = this.props;
    return (
      <Fragment>
        <TopNavBar>
          <SearchBar
            searchTerms={searchTerms}
            handleChange={this.handleSearchTermChange}
            handleSearchSubmit={this.handleSearchSubmit}
          />
        </TopNavBar>
        {this.renderPodcasts()}
        {error}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ search: { searchResult, loading, error } }) => ({
  podcasts: searchResult,
  loading,
  error
});

export default connect(
  mapStateToProps,
  { searchPodcasts }
)(PodcastSearch);
