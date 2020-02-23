export const REQUEST_DATA = 'REQUEST_DATA';
export const FETCH_DATA = 'FETCH_DATA';

export const requestData = () => {
    return {
        type: REQUEST_DATA
    }
}

export const fetchDataAction = (data) => {
    console.log(data);
    return {
        type: FETCH_DATA,
        payload: data
    }
}