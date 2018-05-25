import {
    put,
    takeLatest
} from "redux-saga/effects";
import { Vibration } from 'react-native';
import * as actionCreators from "../actionCreators/product"
import {
    GET_PRODUCTS, GET_PRODUCT, ADD_PRODUCT, SEARCH_PRODUCT, DELETE_PRODUCT
} from "../actionTypes/product";

let URI = "http://10.100.205.36:19000";

function vibrate() {
    Vibration.vibrate(1000);
}

function* getProducts(action) {
    try {
        let products = yield fetch(`${URI}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}
function* getProduct(action) {
    try {
        let product = yield fetch(`${URI}/products/${action.id}`).then(r => r.json());

        yield put(actionCreators.getProductSuccess(product))
    } catch (error) {
        console.log(error)
        yield put(actionCreators.getProductFailure(error))
    }
}
function* searchProduct(action) {
    console.log(action.product);
    let url = `${URI}/products?title_like=${action.product}`;
    console.log(url);
    try {
        let products = yield fetch(url).then(r => r.json());
        yield put(actionCreators.searchProductSuccess(products));
    } catch (error) {
        yield put(actionCreators.searchProductFailure(error));
    }
}

function* deleteProduct(action) {

    try {
        let product = yield fetch(`${URI}/products/${action.product}`, {
            method: 'DELETE'
        }).then(result => result.json());
        yield put(getProductsSuccess(product));
        yield vibrate
    }
    catch (error) {
        yield put(getProductsFailure(error));
    }
}
function* addProduct(action) {

    try {
        let product = yield fetch(`${URI}/products`, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.item)
        }).then(result => result.json());
        yield put(addProductSuccess(product));
    }
    catch (error) {
        yield put(addProductFailure(error));
    }
}
export function* productWatchers() {
    yield [takeLatest(GET_PRODUCTS, getProducts),
    takeLatest(GET_PRODUCT, getProduct),
    takeLatest(ADD_PRODUCT, addProduct),
    takeLatest(SEARCH_PRODUCT, searchProduct),
    takeLatest(DELETE_PRODUCT, deleteProduct)]
}