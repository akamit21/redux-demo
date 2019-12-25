const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReduces = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
// action
/**
 * the only way application can interact with the store
 * carry some info from app to the redux store
 * are plain javascript objects
 * have a `type` property that indicates the type of action
 * being performed
 * the `type` property is typically defined as string constants
 */
const BUY_CAKE = "BUY_CAKE";
const BUY_COOKIE = "BUY_COOKIE";
// action is an object having `type` property
/*{
  type: BUY_CAKE,
  info: "First Redux Action"
}*/

// action creator
/* it is a function that return an action */

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Redux Action"
  };
};

const buyCookie = () => {
  return {
    type: BUY_COOKIE
  };
};

// reducers
/**
 * specify how the app's changes in the response to the actions
 * sent to the store
 * it's a function that accepts state and action as arguments,
 * and returns the next state of the application
 * (previousState, action) => newState
 */
// const initialState = {
//   numOfCakes: 10,
//   numOfCookies: 20
// };
const cakeState = {
  numOfCakes: 10
};
const cookieState = {
  numOfCookies: 20
};
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       };
//     case BUY_COOKIES:
//       return {
//         ...state,
//         numOfCookies: state.numOfCookies - 1
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};

const cookieReducer = (state = cookieState, action) => {
  switch (action.type) {
    case BUY_COOKIE:
      return {
        ...state,
        numOfCookies: state.numOfCookies - 1
      };
    default:
      return state;
  }
};

// redux store
/**
 * one store for entire application
 * holds application state
 * allows access to state via `getState()`
 * allows state to be updated via `dispatch(action)`
 * register listner via `subscribe(listner)`
 * subscribe method accepts a function as parameter which is
 * executed any time state in redux store changes
 */
const rootReducer = combineReduces({
  cake: cakeReducer,
  cookie: cookieReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State: ", store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log("Updated State: ", store.getState())
// );
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCookie());
store.dispatch(buyCookie());

unsubscribe();

// middleware
/**
 * it is the suggested way to extend redux with custom functionality
 * provide a third-party extension point between dispatching an action,
 * and the moment it reaches the reducer
 * used for logging, crash reporting, performing async tasks ...
 */
