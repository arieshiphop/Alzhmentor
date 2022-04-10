import { getUser } from '@/services/api.js'
import config from '@/config.js'
export function getLevelName() {
    let level = getUser().level;
    return levels[level]
}
export function getPercentForNextLevel() {
    let level = getUser().level;
    let nextLevel = parseInt(level) + 1;
    let experience = getUser().experiencie;
    let percent = parseInt(experience) / expForLevel[nextLevel] * 100;
    return percent
}
export async function setLevel() {
    let user_id = getUser().id;
    const settings = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: user_id,
            name: getUser().name,
            avatar: getUser().avatar,
            email: getUser().email,
            phone: getUser().phone,
            bio: getUser().bio,
            level: getUser().level,
            experiencie: getUser().experiencie
        }),
    };

    
    const response = await fetch(`${config.API_PATH}/users/${user_id}`, settings);
    return response
}

export async function upLevel(user) {
    
    let level = getUser().level;
    let experiencie = getUser().experiencie;
    let nextLevel = parseInt(level) + 1;
    let twoMoreLevels = parseInt(level) + 2;
    if (parseInt(experiencie) >= parseInt(expForLevel[String(nextLevel)])
        && parseInt(experiencie) < parseInt(expForLevel[String(twoMoreLevels)])) {
        user.level = nextLevel;
        user.experiencie = experiencie;
        localStorage.setItem("user", JSON.stringify(user));
        await setLevel();
        console.log("sube de nivel",experiencie)
    } else {
        console.log("no sube de nivel",experiencie)
    }
    
}
export async function addExperiencie() {
    let user = getUser();
    
    let experiencie = user.experiencie;
    let oneMoreEXP = parseInt(experiencie) + 2;
    user.experiencie = String(oneMoreEXP)
    localStorage.setItem("user", JSON.stringify(user));
    await upLevel(user);
    await setLevel();
}

export const levels = {
    "0": "Amateur",
    "1": "Beginner",
    "2": "Intermediate",
    "3": "Advanced",
    "4": "Expert",
    "5": "Master",
    "998": "Premium",
    "999": "Admin"
}
export const expForLevel = {
    "0": 0,
    "1": 200,
    "2": 400,
    "3": 800,
    "4": 1500,
    "5": 3000,
    "998": 9999999999999,
    "999": 9999999999999
}
    


