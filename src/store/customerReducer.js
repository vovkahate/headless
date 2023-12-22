const defaultState = {
    customers: [],
};
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS';

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload],
            };
        case REMOVE_CUSTOMERS:
            return {
                ...state,
                customers: state.customers.filter(p => p.id !== action.payload),
            };
        default:
            return state;
    }
};

export const addCustomersAction = payload => ({ type: ADD_CUSTOMER, payload });
export const removeCustomersAction = payload => ({
    type: REMOVE_CUSTOMERS,
    payload,
});
