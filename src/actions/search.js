import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


const handleVideoSearch = (q) => {
  let options = {
    q,
    key: YOUTUBE_API_KEY
  };

  return (dispatch) => {
    searchYouTube(options, (data) => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
};

export default handleVideoSearch;
