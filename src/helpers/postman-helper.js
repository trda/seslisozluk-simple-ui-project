
import axios from "axios";

export default {
  postSesliSozluk: function(word) {
    return axios.get(`http://www.seslisozluk.com/${word}-nedir-ne-demek/`)
      .then(response => {

         return {
           content: response.data
         };
      })
  },

  requestPost: function(word) {
    return axios.post(`/search/${word}`)
      .then(response => {

         return {
           data:response
         };
      })
  }
}




