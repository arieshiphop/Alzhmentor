import config from "@/config.js";
import {getUser} from '@/services/api.js'
import { v4 as uuidv4 } from "uuid";

function randId() {
    return uuidv4();
}
function getActualHour() {

    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes()
    if (String(minutes).length == 1) {
        minutes = "0" + minutes
    }

    return hour + ":" + minutes
}

export async function sendLogToProfile(dinero_entregado, dinero_ofrecido, completado) {
    let id = getUser()
    const settings = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            log_id: randId(),
            id: id.id,
            dinero_entregado: dinero_entregado,
            dinero_ofrecido: dinero_ofrecido,
            hora: getActualHour(),
            completado:completado
        }),

    };

    
    const response = await fetch(`${config.API_PATH}/users/${id.id}/logs`, settings);
    return response
}

