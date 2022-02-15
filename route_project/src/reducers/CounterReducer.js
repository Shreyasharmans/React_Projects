export const[INCREMENT, DECREMENT,RESET] = ["INCREMENT", "DECREMENT", "RESET"];
const counterReducer = (state= {count: 0} , action) => {
    switch (action.type) {
        case INCREMENT:
        return {...state,count: state.count + 1};
        case DECREMENT:
        return {...state,count: state.count - 1};
        case RESET:
        return {...state,count: 0};
        case "TEST":
            let testPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Test");
                }, 2000);
            });
            return {...state,testPromise};
        case "TEST_FULFILLED":
            return {...state, testPromise: action.payload};
        default:
            return state;
    }
};
export default counterReducer;