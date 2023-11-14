import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

import React from "react";

let mylist = [];

const appSettings = {
    databaseURL: "https://restaurant-management-v18-default-rtdb.firebaseio.com/"
};


const app = initializeApp(appSettings);
const database = getDatabase(app);
const menuItemsInDB = ref(database, "menuItems");

const storedItems = JSON.parse(localStorage.getItem('emailId')) || {};
const props = storedItems; 

onValue(menuItemsInDB, function(snapshot) {
    let menuItemsArray = Object.values(snapshot.val())
    
    for (let i = 0; i < menuItemsArray.length; i++) {
        let currentItem= menuItemsArray[i];
        let emailId = Object.keys(currentItem);
        emailId = emailId[0];
        emailId = emailId.replace(/\*/g, ".");
        if (emailId === props){
            let temp = Object.values(currentItem)[0][0]
            mylist.push(temp);
            console.log("this?:", mylist);
        }
    }
})

export default mylist;
