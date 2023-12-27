import axios from "axios";

let config = {
    header: {
        'Content-Type' : 'application/json'
    }
}

//logs
export const getLogs = () => axios.get('/logs')

export const addLogs = async(log) => {
    const { data } = await axios.post('/logs', log, config)

    return data
}

export const deleteLogs = (id) =>  axios.delete(`/logs/${id}`)

export const updateLogs = async(log) => {
    const { data } = await axios.put(`/logs/${log.id}`,log, config)
    
    return data
}


//techs
export const getTechs = () => axios.get('/techs')

export const addTechs = async(tech) => {
    const { data } = await axios.post('/techs', tech, config)

    return data
}

export const deleteTech = (id) => axios.delete(`/techs/${id}`)