export default {
  // API_PATH: 'https://alzhmentor.herokuapp.com/api',
  // AUTH_PATH: 'https://alzhmentor.herokuapp.com/auth',
  API_PATH: "http://localhost:5000/api",
  AUTH_PATH: "http://localhost:5000/auth",
  ADMIN_PATH: "http://localhost:5000/admin",
};

export function getUserId() {
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson);
  return user.id;
}

export function getUser() {
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson);
  return user;
}
