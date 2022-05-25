import { getUser } from "./api.js";
import api from "./api.js";
export async function getAdmin() {
  let user = getUser();
  user.level = 999;
  localStorage.setItem("user", JSON.stringify(user));
  const fetchData = await fetch(`${api.API_PATH}/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      email: user.email,
      phone: user.phone,
      bio: user.bio,
      level: user.level,
      experiencie: user.experiencie,
    }),
  });
}
async function getUserByUserId(userId) {
  let response = await fetch(`${api.API_PATH}/users/${userId}`);
  let data = await response.json();
  return data;
}
export async function getUsernameById(text, argsIndex) {
  let userId = text.substring(argsIndex + 1);
  let data = await getUserByUserId(userId);
  return data;
}
export async function setLevel(text) {
  let giveRoleParams = text.split(" ");
  let userGivedRole = {
    user_id: giveRoleParams[1],
    level: giveRoleParams[2],
  };
  const postData = await fetch(
    `${api.ADMIN_PATH}/users/${userGivedRole.user_id}/${userGivedRole.level}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userGivedRole.user_id,
        level: userGivedRole.level,
      }),
    }
  );
  console.log("postData", postData);
}
