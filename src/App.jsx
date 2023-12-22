import { useDispatch, useSelector } from 'react-redux';
import {
    addCustomersAction,
    removeCustomersAction,
} from './store/customerReducer';

const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = cash => {
        dispatch({ type: 'ADD_CASH', payload: cash });
    };

    const getCash = cash => {
        dispatch({ type: 'GET_CASH', payload: cash });
    };
    const addCustomer = info => {
        const person = {
            id: Date.now(),
            name: info,
        };
        dispatch(addCustomersAction(person));
    };
    const removeCustomer = customer => {
        dispatch(removeCustomersAction(customer));
    };

    return (
        <div>
            <div>
                <h2>{cash}</h2>
                <button onClick={() => addCash(Number(prompt()))}>add</button>
                <button onClick={() => getCash(Number(prompt()))}>del</button>
                <button onClick={() => addCustomer(prompt())}>
                    add customer
                </button>
            </div>
            {customers.length > 0 ? (
                <div>
                    {customers.map(customer => (
                        <div onClick={() => removeCustomer(customer.id)}>
                            {customer.name}
                        </div>
                    ))}
                </div>
            ) : (
                <div>Клиенты отсутсвуют</div>
            )}
        </div>
    );
};

export default App;
