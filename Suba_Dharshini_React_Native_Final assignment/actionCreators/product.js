import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCT,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    SEARCH_PRODUCT,
    SEARCH_PRODUCT_FAILURE,
    SEARCH_PRODUCT_SUCCESS,
    DELETE_PRODUCT
} from "../actionTypes/product";

export function getProducts(page, limit) {
    return {
        type: GET_PRODUCTS,
        page,
        limit
    }
}

export function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    }
}

export function getProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    }
}

export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id
    }
}

export function getProductSuccess(product) {
    return {
        type: GET_PRODUCT_SUCCESS,
        product
    }
}

export function getProductFailure(error) {
    return {
        type: GET_PRODUCT_FAILURE,
        error
    }
}

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function addProductSuccess(product) {
    return {
        type: ADD_PRODUCT_SUCCESS,
        product
    }
}

export function addProductFailure(error) {
    return {
        type: ADD_PRODUCT_FAILURE,
        error
    }
}
export function searchProduct(product) {
    return {
        type: SEARCH_PRODUCT,
        product
    }
}

export function searchProductSuccess(product) {
    return {
        type: SEARCH_PRODUCT_SUCCESS,
        product
    }
}

export function searchProductFailure(error) {
    return {
        type: SEARCH_PRODUCT_FAILURE,
        error
    }
}
export function deleteProduct(product) {
    return {
        type: DELETE_PRODUCT,
        product
    }
}