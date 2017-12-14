var Search = (props) => {
  var getQuery = () => {
    props.searchCB(document.getElementById('inputBox').value);
  };
  
  var liveSearch = () => {
    _.debounce(props.searchCB(document.getElementById('inputBox').value), 2000);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" id="inputBox" onChange={liveSearch}/>
      <button className="btn hidden-sm-down" onClick={getQuery}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;