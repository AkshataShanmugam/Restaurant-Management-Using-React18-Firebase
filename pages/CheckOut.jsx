import SpecialDishes from "./CheckOutOrders.jsx"
import data from "./CheckOutData.jsx"

import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';
import logo from "../src/images/logo.png";

import GetSignedInEmail from "./SignInCheck.jsx"

const CheckOut = () => {
    const check = GetSignedInEmail();
    console.log("curr email", check);
    localStorage.setItem('emailId', JSON.stringify(check));
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("");

    console.log("da", data[0]);

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        navigate(selectedValue);
    };

    const returnToPage = () => {
        navigate("/");
    };


    // const appSettings = {
    //     databaseURL: "https://restaurant-management-v18-default-rtdb.firebaseio.com/"
    // };
    
    const specials = data[0].map(item => {
        return (
            <SpecialDishes
                key={item.id}
                item={item}
            />
        )
    }) 

    // const app = initializeApp(appSettings);
    // const database = getDatabase(app);
    // const menuItemsInDB = ref(database, "menuItems");

    // onValue(menuItemsInDB, function(snapshot) {
    //     let menuItemsArray = Object.values(snapshot.val())
        
    //     for (let i = 0; i < menuItemsArray.length; i++) {
    //         let currentItem= menuItemsArray[i];
    //         let emailId = Object.keys(currentItem);
    //         console.log(Object.values(currentItem)[0][0]);
    //     }
    // })

    return (
        <div>
            <nav>
                <div className='nav--div'>
                    <img src={logo} className="nav--logo" />
                    <div className="nav--components">
                    <select
                        onChange={handleOptionChange}
                        value={selectedOption}
                        className="nav--select"
                    >
                        <option value="" disabled hidden>
                        More Options
                        </option>
                        <option value="/">HOME</option>
                        <option value="/logout">LOG OUT</option>
                    </select>
                    </div>
                </div>
            </nav>
            <section className="cards-list">
                {specials}
            </section>
            <button className="button--navigate" onClick={returnToPage}> RETURN HOME </button>
        </div>
    )
}

export default CheckOut
