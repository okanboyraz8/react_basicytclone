
import axios from "axios";

const homeAction = (data) => async(dispatch) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          //relatedToVideoId: '7ghhRHRP6t4',
          part: 'snippet',
          //type: 'video',
          q: data,
          maxResults: '50'
        },
        headers: {
          'X-RapidAPI-Key': 'def0458c99msh6789c9d9d8d90a4p1b69fcjsnd09e359de884',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      await axios.request(options).then(function (response) {
        dispatch({type: 'GET_VIDEOS', payload: response.data})
      }).catch(function (error) {
        console.log(error);
      });
    } catch (error) {
        console.log(error);
    }
}
export default homeAction