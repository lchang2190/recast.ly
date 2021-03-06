class App extends React.Component {
  constructor () {
    super();
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }
  componentDidMount() {
    window.searchYouTube({query: 'warriors'}, this.updateVideo.bind(this));
  }
  changeVideo(props) {
    this.setState({
      currentVideo: props
    });
  }
  updateVideo(data) {
    this.setState({
      videoList: data,
      currentVideo: data[0]
    });
  }
  search(input) {
    window.searchYouTube({query: input}, this.updateVideo.bind(this));
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchCB={this.search.bind(this)} />
          </div>
        </nav> 
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onClick={this.changeVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;