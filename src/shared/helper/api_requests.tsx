import axios from "axios"


export async function makeRequest(config: any) {
    return await axios(config)
}


export const formAPIConfig = (method: string, url: string, data: any) => {
    return {
        method: method,
        url: url,
        data:data
    }
}

export const getAPIWithParams = (method: string, url: string, params: any) => {
    return {
        method: method,
        url: url,
        params:params
    }
}