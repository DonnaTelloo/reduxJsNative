const redux = require("redux");

// CONSTANTS
const BUY_APPLE = "BUY_APPLE";
const BUY_BANANA = "BUY_BANANA";

// ACTIONS
const buyApple = () => {
    return {
        type: BUY_APPLE
    }
}

const buyBanana = () => {
    return {
        type: BUY_BANANA
    }
}

// INITIAL STATE
const initialState = {
    numberOfApples: 5,
    numberOfBananas: 10
}

// REDUCER
const Reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_APPLE: return {
            ...state,
            numberOfApples: state.numberOfApples - 1
        }
        case BUY_BANANA: return {
            ...state,
            numberOfBananas: state.numberOfBananas - 1
        }
        default: return state
    }
}


// CREATE STORE
const store = redux.createStore(Reducer);

// LOGGS
console.log(store.getState());

// ვაშლის ყიდვა - მოქმედების გამოძახება
console.log(store.dispatch(buyApple()));
console.log(store.dispatch(buyApple()));
// ბანანის ყიდვა - მოქმედების გამოძახება
console.log(store.dispatch(buyBanana()))
console.log(store.dispatch(buyBanana()))
console.log(store.dispatch(buyBanana()))

console.log(store.getState());