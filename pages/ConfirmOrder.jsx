import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

import SpecialDishes from "./displayOrders.jsx"
import data from "./ConfirmMenuItems.jsx"

const ConfirmOrder = () => {

    const navigate = useNavigate();
    const storedItems = JSON.parse(localStorage.getItem('menuItems')) || {};
    const userOrder = storedItems; 

    console.log("storeditems:", storedItems);

    const specials = data.map(item => {
        return (
            <SpecialDishes
                key={item.id}
                item={item}
            />
        )
    }) 

    const returnToPage = () => {
        navigate("/placeOrder");
    };

    function removeLocalStorage() {
        localStorage.removeItem('menuItems');
    }

    const confirmOrder = () => {
    
        const appSettings = {
            databaseURL: "https://restaurant-management-v18-default-rtdb.firebaseio.com/"
        };
    
        const app = initializeApp(appSettings);
        const database = getDatabase(app);
        const menuItemsInDB = ref(database, "menuItems");

        const string =  Object.keys(userOrder);
        const new_key = string[0].replace(/[.#$\/[\]]/g, "*");
        const value = Object.values(userOrder);
        const object = Object.assign({}, { [new_key]: value });

        console.log(object);

    
        if (userOrder) {
            push(menuItemsInDB, object);
        } 

        removeLocalStorage();
        navigate("/orderSuccess");

    };
    

    return (
        <div>
            {/* <Display /> */}
            <section className="cards-list">
                {specials}
            </section>
            <button className="button--navigate" onClick={returnToPage}> RETURN TO ORDERS </button>
            <button className="button--navigate" onClick={confirmOrder}> CONFIRM ORDER </button>
        </div>
    )
}

export default ConfirmOrder
