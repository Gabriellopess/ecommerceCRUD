export default {
    AUTH_REQUEST({ commit, dispatch }, user) {
      return new Promise((resolve, reject) => {
        commit("AUTH_REQUEST");
        this._vm
          .$http({ url: "api-token-auth/", data: user, method: "POST" })
          .then(resp => {
            const token = resp.data.token;
            const id = resp.data.user_id;
            localStorage.setItem("user-token", token);
            localStorage.setItem("user-id", id); 
            this._vm.$http.defaults.headers.common["WWW-Authenticate"] = "Token";
            this._vm.$http.defaults.headers.common["Authorization"] = token;
            commit("AUTH_SUCCESS", token, id);
            resolve(resp);
          })
          .catch(err => {
            commit("AUTH_ERROR", err);
            localStorage.removeItem("user-token");
            localStorage.removeItem("user-id");
            reject(err);
          });
      });
    },
  
    AUTH_LOGOUT({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        commit("AUTH_LOGOUT");
        this._vm.$http.defaults.headers.common["WWW-Authenticate"] = "";
        this._vm.$http.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("user-token");
        localStorage.removeItem("user-id");
        resolve();
      });
    }
  };