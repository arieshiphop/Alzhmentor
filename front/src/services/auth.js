import config from "@/config.js";
import {createFetchSettings} from "@/config.js"
import api from "@/services/api.js";

//cambiado
export async function login(user, password) {
    //cambiado
    const settings = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: user,
            password: password,
        }),
    }; 
    const response = await fetch(`${config.AUTH_PATH}/login`, settings);
    return response
}

export async function isUsernameRegistered(username) {
    let response = await fetch(`${api.API_PATH}/users`)
    let data = await response.json()
    
    for (let user of data) {
        if (username == user.name) {
            return true
        }
    }
    return false
}
