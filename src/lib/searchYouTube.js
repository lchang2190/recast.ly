var searchYouTube = (options, callback) => {
  
  
  
  $.ajax({
     // cache: false,
    data: {
      key: YOUTUBE_API_KEY,
      q: 'cats',
      part: 'snippet',
      maxResults: 10,
      type: 'video',
      videoEmbeddable: true
    },
    dataType: 'json',
    type: 'GET',
    timeout: 5000,
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: function(data) {
      var results = data.items;
      callback(results);

    }
  });

  

  
};

window.searchYouTube = searchYouTube;
