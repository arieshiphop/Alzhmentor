export default{
    API_PATH :"http://localhost:5000/api/",
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

