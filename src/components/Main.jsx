import React from "react"

import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import Card from "./MenuCard.jsx"
import SpecialDishes from "./SingatureDishes.jsx"
import AboutUs from "./AboutUs.jsx"
import Footer from "./Footer.jsx"
import PreLoader from "../../pages/PreLoader.jsx"

// import Confirm from "./Confirm.jsx"
import data from "./menu.jsx"

export default function Main() {
    const specials = data.map(item => {
        return (
            <SpecialDishes
                key={item.id}
                item={item}
            />
        )
    })  
    
    // const menuItems = data.map(item => {
    //     return (
    //         <Confirm
    //             key={item.id}
    //             item={item}
    //         />
    //     )
    // }) 

    return (
        <div>
            <PreLoader />
            <Navbar />
            <Hero />
            <section className="cards-list">
                {specials}
            </section>
            {/* <section className="cards-list">
                {menuItems}
            </section> */}
            <AboutUs />
            <Footer />
        </div>
    )

}