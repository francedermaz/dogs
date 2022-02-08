import axios from 'axios';

export const GET_ALL_DOGS = 'GET ALL DOGS';
export const GET_DOG_NAME = 'GET DOG NAME';
export const GET_DOG_ID = 'GET DOG ID';
export const GET_TEMPERAMENTS = 'GET TEMPERAMENTS';
export const POST_DOG = 'POST DOG';
export const ORDER_BY = 'ORDER BY';
export const FILTER_TEMPERAMENTS = 'FILTER TEMPERAMENTS';
export const FILTER_DBORAPI = 'FILTER DB OR API';

export const getAllDogs = () => {
    return async function (dispatch){
        let aux = await axios.get("http://localhost:3001/dogs/")
        return dispatch({
            type: GET_ALL_DOGS,
            payload: aux.data,
        })
    }
}

export const getTemperaments = () => {
    return async function (dispatch){
        let aux = await axios.get("http://localhost:3001/temperament/")
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: aux.data,
        })
    }
}

export const getDogName = (payload) => {
    return async function (dispatch){
        try{
            let aux = await axios.get("http://localhost:3001/dogs?name="+payload)
            return dispatch({
                type: GET_DOG_NAME,
                payload: aux.data,
            })
        }
        catch(e){
            return dispatch({
                type: GET_DOG_NAME,
                payload: "Not found",
            })
        }
    }
}

export const getDogID = (payload) => {
    return async function (dispatch){
        let aux = await axios.get("http://localhost:3001/dogs/"+payload)
        return dispatch({
            type: GET_DOG_ID,
            payload: aux.data
        })
    }
}

export const postDog = (payload) => {
    return async function (dispatch){
        let aux = await axios.post("http://localhost:3001/dogs/",payload)
        return dispatch({
            type: POST_DOG,
            payload: aux
        })
    }
}

export const orderBy = (payload) => {
    return async function (dispatch) {
        dispatch({type:ORDER_BY,payload})
    }
}

export const filterTemperaments = (payload) => {
    return async function (dispatch){
        dispatch({type:FILTER_TEMPERAMENTS,payload})
    }
}

export const filterDBorAPI = (payload) => {
    return async function (dispatch){
        let aux = await axios.get("http://localhost:3001/filter/"+payload);
        return dispatch({
            type: FILTER_DBORAPI,
            payload: aux.data,
        })
    }
}

// export const filterDBorAPI = (payload) => {
//     return async function (dispatch){
//         dispatch({type:FILTER_DBORAPI,payload})
//     }
// }