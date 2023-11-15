import SpecialDishes from "./CheckOutOrders.jsx"
import Data from "./CheckOutData.jsx"

import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';
import logo from "../src/images/logo.png";

const CheckOut = () => {
    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        navigate(selectedValue);
    };

    const returnToPage = () => {
        navigate("/")
    }
    
    function flattenDictionary(dict) {
        const result = [];
        
        for (const key1 in dict) {
            const level1 = dict[key1];
            for (const key2 in level1) {
                const level2 = level1[key2];
                if (level2.hasOwnProperty("id") && level2.hasOwnProperty("title")) {
                    result.push({ "id": level2.id, "title": level2.title, "count": level2.count, "coverImg": level2.coverImg, "description":level2.description, "price":level2.price });
                } else {
                    for (const key3 in level2) {
                        const level3 = level2[key3];
                        result.push({ "id": level3.id, "title": level3.title, "count": level3.count, "coverImg": level3.coverImg, "description":level3.description, "price":level3.price });
                    }
                }
            }
        }
        
        return result;
    }

    const data = JSON.parse(localStorage.getItem('checkOutItems')) || [];
    console.log("data", data);

    const temp = flattenDictionary(Object.values(Object.values(data)));
    console.log("temp:", temp);
    console.log("special", temp.length);
    if (temp.length === 0){
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
                            <option value="/placeOrder">PLACE ORDERS</option>
                        </select>
                        </div>
                    </div>
                </nav>
                <h1 className="checkOut--null-text">Let's order some food!</h1>
                <button className="button--navigate" onClick={returnToPage}> RETURN HOME </button>
            </div>
        )

    } else {
        console.log("umm", flattenDictionary(Object.values(Object.values(data))));
        console.log("curr", Object.values(data[0]))
        const handleOptionChange = (event) => {
            const selectedValue = event.target.value;
            setSelectedOption(selectedValue);
            navigate(selectedValue);
        };

        const returnToPage = () => {
            navigate("/");
        };
        
        const specials = (temp).map(item => {
            return (
                <SpecialDishes
                    key={item.id}
                    item={item}
                />
            )
        }) 

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
}

export default CheckOut
// V1 :
// import SpecialDishes from "./CheckOutOrders.jsx"
// import data from "./CheckOutData.jsx"

// import React, {useState} from 'react';

// import { useNavigate } from 'react-router-dom';
// import logo from "../src/images/logo.png";

// // import GetSignedInEmail from "./SignInCheck.jsx"

// const CheckOut = () => {
//     const navigate = useNavigate();
//     const [selectedOption, setSelectedOption] = useState("");

//     console.log("dadada", Object.values(data[0]))

//     const handleOptionChange = (event) => {
//         const selectedValue = event.target.value;
//         setSelectedOption(selectedValue);
//         navigate(selectedValue);
//     };

//     const returnToPage = () => {
//         navigate("/");
//     };


//     // const appSettings = {
//     //     databaseURL: "https://restaurant-management-v18-default-rtdb.firebaseio.com/"
//     // };

//     function flattenDictionary(dict) {
//         const result = [];
        
//         for (const key1 in dict) {
//             const level1 = dict[key1];
//             for (const key2 in level1) {
//                 const level2 = level1[key2];
//                 if (level2.hasOwnProperty("id") && level2.hasOwnProperty("title")) {
//                     result.push({ "id": level2.id, "title": level2.title, "count": level2.count, "coverImg": level2.coverImg, "description":level2.description, "price":level2.price });
//                 } else {
//                     for (const key3 in level2) {
//                         const level3 = level2[key3];
//                         result.push({ "id": level3.id, "title": level3.title, "count": level3.count, "coverImg": level3.coverImg, "description":level3.description, "price":level3.price });
//                     }
//                 }
//             }
//         }
        
//         return result;
//     }

//     const temp = flattenDictionary(Object.values(Object.values(data)));
    
//     // const specials = (Object.values(data[0])).map(item => {
//     const specials = temp.map(item => {
//         return (
//             <SpecialDishes
//                 key={item.id}
//                 item={item}
//             />
//         )
//     }) 

//     // const app = initializeApp(appSettings);
//     // const database = getDatabase(app);
//     // const menuItemsInDB = ref(database, "menuItems");

//     // onValue(menuItemsInDB, function(snapshot) {
//     //     let menuItemsArray = Object.values(snapshot.val())
        
//     //     for (let i = 0; i < menuItemsArray.length; i++) {
//     //         let currentItem= menuItemsArray[i];
//     //         let emailId = Object.keys(currentItem);
//     //         console.log(Object.values(currentItem)[0][0]);
//     //     }
//     // })

//     return (
//         <div>
//             <nav>
//                 <div className='nav--div'>
//                     <img src={logo} className="nav--logo" />
//                     <div className="nav--components">
//                     <select
//                         onChange={handleOptionChange}
//                         value={selectedOption}
//                         className="nav--select"
//                     >
//                         <option value="" disabled hidden>
//                         More Options
//                         </option>
//                         <option value="/">HOME</option>
//                         <option value="/logout">LOG OUT</option>
//                     </select>
//                     </div>
//                 </div>
//             </nav>
//             <section className="cards-list">
//                 {specials}
//             </section>
//             <button className="button--navigate" onClick={returnToPage}> RETURN HOME </button>
//         </div>
//     )
// }

// export default CheckOut


// V2:
// import SpecialDishes from "./CheckOutOrders.jsx"
// import data from "./CheckOutData.jsx"

// import React, {useState} from 'react';

// import { useNavigate } from 'react-router-dom';
// import logo from "../src/images/logo.png";

// import GetSignedInEmail from "./SignInCheck.jsx"

// const CheckOut = () => {
//     const navigate = useNavigate();

//     const [selectedOption, setSelectedOption] = useState("");
//     const handleOptionChange = (event) => {
//         const selectedValue = event.target.value;
//         setSelectedOption(selectedValue);
//         navigate(selectedValue);
//     };

//     const returnToPage = () => {
//         navigate("/")
//     }

//     console.log("attempt", Object.values(Object.values(data)));
    
//     function flattenDictionary(dict) {
//         const result = [];
        
//         for (const key1 in dict) {
//             const level1 = dict[key1];
//             for (const key2 in level1) {
//                 const level2 = level1[key2];
//                 if (level2.hasOwnProperty("id") && level2.hasOwnProperty("title")) {
//                     result.push({ "id": level2.id, "title": level2.title, "count": level2.count, "coverImg": level2.coverImg, "description":level2.description, "price":level2.price });
//                 } else {
//                     for (const key3 in level2) {
//                         const level3 = level2[key3];
//                         result.push({ "id": level3.id, "title": level3.title, "count": level3.count, "coverImg": level3.coverImg, "description":level3.description, "price":level3.price });
//                     }
//                 }
//             }
//         }
        
//         return result;
//     }

//     const temp = flattenDictionary(Object.values(Object.values(data)));
//     console.log("special", temp.length);
//     if (temp.length === 0){
//         return (
//             <div>
//                 <nav>
//                     <div className='nav--div'>
//                         <img src={logo} className="nav--logo" />
//                         <div className="nav--components">
//                         <select
//                             onChange={handleOptionChange}
//                             value={selectedOption}
//                             className="nav--select"
//                         >
//                             <option value="" disabled hidden>
//                             More Options
//                             </option>
//                             <option value="/">HOME</option>
//                             <option value="/logout">LOG OUT</option>
//                             <option value="/placeOrder">PLACE ORDERS</option>
//                         </select>
//                         </div>
//                     </div>
//                 </nav>
//                 <h1 className="checkOut--null-text">Let's order some food!</h1>
//                 <button className="button--navigate" onClick={returnToPage}> RETURN HOME </button>
//             </div>
//         )

//     } else {
//         console.log("umm", flattenDictionary(Object.values(Object.values(data))));
//         console.log("curr", Object.values(data[0]))
//         const handleOptionChange = (event) => {
//             const selectedValue = event.target.value;
//             setSelectedOption(selectedValue);
//             navigate(selectedValue);
//         };

//         const returnToPage = () => {
//             navigate("/");
//         };
        
//         const specials = (temp).map(item => {
//             return (
//                 <SpecialDishes
//                     key={item.id}
//                     item={item}
//                 />
//             )
//         }) 

//         return (
//             <div>
//                 <nav>
//                     <div className='nav--div'>
//                         <img src={logo} className="nav--logo" />
//                         <div className="nav--components">
//                         <select
//                             onChange={handleOptionChange}
//                             value={selectedOption}
//                             className="nav--select"
//                         >
//                             <option value="" disabled hidden>
//                             More Options
//                             </option>
//                             <option value="/">HOME</option>
//                             <option value="/logout">LOG OUT</option>
//                         </select>
//                         </div>
//                     </div>
//                 </nav>
//                 <section className="cards-list">
//                     {specials}
//                 </section>
//                 <button className="button--navigate" onClick={returnToPage}> RETURN HOME </button>
//             </div>
//         )

//     }
// }

// export default CheckOut
