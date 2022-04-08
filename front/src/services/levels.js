import { getUser } from '@/services/api.js'

export function getLevelName() {
    let level = getUser().level;
    return levels[level]
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
    "998": -1,
    "999": -1
}
    


