export default {
    token: localStorage.getItem("user-token") || "",
    userID: localStorage.getItem("user-id"),
    produtoID: sessionStorage.getItem("produtoID"),
    status: ""
  };