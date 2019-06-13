import axios from 'axios'
axios.defaults.withCredentials = true
const g = (option) => {
    const {
        url,
        params
    } = option
    return axios.get(url, {
        params: {
            ...params
        }
    })
}

const p = (option) => {
    const {
        url,
        params
    } = option
    return axios.post(url, {
        params: {
            ...params
        }
    })
}

export default {
    g,
    p
}
