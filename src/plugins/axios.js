import Vue from 'vue'
import axios from 'axios'


Vue.prototype.$http = axios.create({
    baseURL: 'http://localhost:8000/',

    headers: {
      Authorization: "Token e31ca0037e6fcca0d9226f96f63bb5500c86b6e6"
    }
});


const token = localStorage.getItem("user-token");
if (token) {
  (Vue.prototype.$http.defaults.headers.common["WWW-Authenticate"] = "Token"),
  (Vue.prototype.$http.defaults.headers.common["Authorization"] = " Token " + token);
}