import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    return (
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node,
};

export default UserProvider;

const CartContext = ({ children }) => {
    const [items, setItems] = useState([]);
    const addItem = (newItem, quantity) => {
        !items.find(item => item.id === newItem.id) && setItems([...items, { ...newItem, quantity }]);
    };
    const removeItem = id => setItems(items.filter(item => item.id !== id));
    const clear = () => setItems([]);
    const isInCart = (id) => items.find(item => item.id === id) ? true : false;

    return (
        <AppContext.Provider value={{items, addItem, removeItem, clear, isInCart}}>
            {children}
        </AppContext.Provider>
    );
}

CartContext.propTypes = {
    children: PropTypes.node,
};