export default{
  API_PATH: "http://localhost:5000/api/",
  ADMIN_PATH:"http://Localhost:5000/admin/",
}

export function getUserId() {
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson);
  return user.id;
}
  
  export  function getUser() {
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson)
    return user;
  }

