// action
const BUY_CAKE = "BUY_CAKE";

// action is an object having `type` property
/*{
  type: BUY_CAKE,
  info: "First Redux Action"
}*/

// action creator
/* it is a function that return an action */

buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Redux Action"
  };
};
