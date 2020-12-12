import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     videos: [],
  //     currentVideo: null
  //   };

  //   this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  // }

  componentDidMount() {
    // this.getYouTubeVideos('react tutorials');
  }

  // deleted handleClickTitle method (check container)

  // getYouTubeVideos(query) {
  //   var options = {
  //     key: this.props.API_KEY,
  //     query: query
  //   };

  //   this.props.searchYouTube(options, (videos) =>
  //     this.setState({
  //       videos: videos,
  //       currentVideo: videos[0]
  //     })
  //   );
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
