import * as ProductAPIUtil from '../util/product_api_util';
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

//REGULAR ACTION CREATORS
const receiveAllProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
})

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

const removeProduct = (productId) => ({
    type: DELETE_PRODUCT,
    productId
})


//THUNK ACTION CREATORS
export const requestProducts = () => dispatch => {
    ProductAPIUtil.fetchProducts().then(products => dispatch(receiveAllProducts(products)))
}

export const requestProduct = (id) => dispatch => {
    ProductAPIUtil.fetchProduct(id).then(product => dispatch(receiveProduct(product)))
}

export const createProduct = (product) => dispatch => {
    ProductAPIUtil.createProduct(product).then(product => dispatch(receiveProduct(product)))
}

export const updateProduct = (product) => dispatch => {
    ProductAPIUtil.updateProduct(product).then(product => dispatch(receiveProduct(product)))
}

export const deleteProduct = (id) => dispatch => {
    ProductAPIUtil.deleteProduct(id).then(productId => dispatch(removeProduct(productId)))
}