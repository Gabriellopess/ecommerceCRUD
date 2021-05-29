import Vue from 'vue'
import axios from 'axios'


Vue.prototype.$http = axios.create({
    baseURL: 'http://localhost:8000/',

    headers: {
      Authorization: "Token bfd43854ce5f69c56702a274929d8a4547d9d147"
    }
});


const token = localStorage.getItem("user-token");
if (token) {
  (Vue.prototype.$http.defaults.headers.common["WWW-Authenticate"] = "Token"),
  (Vue.prototype.$http.defaults.headers.common["Authorization"] = " Token " + token);
}