import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_DATA, fetchDataAction } from './actions';
import axiosInstance from './api/getData';

const getData = async () => {
    const result = await axiosInstance.get('/data');
    return result.data;
}

function* fetchData(action) {
    try{
        console.log('before');
        const data = yield call(getData);
        console.log(data);
        yield put(fetchDataAction(data));
        console.log('after');
    }catch(e) {
        console.log(e.message);
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_DATA, fetchData);
}