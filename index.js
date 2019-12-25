const redux = require("redux");
const createStore = redux.createStore;
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

// reducers
/**
 * specify how the app's changes in the response to the actions
 * sent to the store
 * it's a function that accepts state and action as arguments,
 * and returns the next state of the application
 * (previousState, action) => newState
 */
const initialState = {
  numOfCakes: 10
};

const reducer = (state = initialState, action) => {
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
const store = createStore(reducer);
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Upated State: ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
