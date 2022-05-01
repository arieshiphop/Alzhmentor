import config from "@/config.js";
import {createFetchSettings} from "@/config.js"
import api from "@/services/api.js";


export async function login(user, password) {
    const settings = config.createFetchSettings(
        "POST",
        "",
        JSON.stringify({
            user: user,
            password: password,
        })
      );    
    const response = await fetch(`${config.AUTH_PATH}/login`, settings);
    return response
}

export async function isUsernameRegistered(username) {
    let response = await fetch(`${api.API_PATH}users`)
    let data = await response.json()
    
    for (let user of data) {
        if (username == user.name) {
            alert("Ese usuario ya existe")
            return true
        }
    }
    console.log("salgo del bucle")
    return false
}
