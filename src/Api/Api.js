import axios from "axios";

const key = '563492ad6f917000010000014df4a043679e45b49b6d2889ba53b8c6'
const server = 'https://api.pexels.com/v1/'


// https://api.pexels.com/v1/search?query=nature&size=small&orientation=square&page=1&per_page=10


const get = (path) => axios.get(server+path, {
    headers: {
        'Authorization': key
    }
})

const searchPhoto = (theme) => get(`search?query=${theme}`)

const searchQTPhoto = (theme, qt) => get(`search?query=${theme}&page=1&per_page=${qt}`)
                                    .then(({data}) => data.photos)


export const Api = {
    searchPhoto,
    searchQTPhoto
}
