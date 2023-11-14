import React from "react"
import logo from "../src/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

import SpecialDishes from "../src/components/MenuCard.jsx";
import Footer from "../src/components/Footer.jsx";
import data from "../src/components/fullMenu.jsx";

import GetSignedInEmail from "./SignInCheck.jsx";

export default function Main() {
    const check = GetSignedInEmail();
    console.log(check);
    const navigate = useNavigate();

    const specials = data.map(item => {
        return (
            <SpecialDishes
                key={item.id}
                item={item}
            />
            // 
            console.log("checking src", item);
            // 
        )
    }) 

    const confirmAllOrder = () => {
        navigate("/confirmOrder", { replace: true });
        window.location.reload();
    };

    return (
        <div className="makeOrders--div">
            <nav>
                <img src={logo} className="nav--logo" />
                <div className="nav--components"> 
                    <Link to = "/"> HOME </Link>
                    <Link to = "/logout"> LOG OUT </Link>
                </div>
            </nav>
            <section className="cards-list">
                {specials}
            </section>
            <button className="button--navigate" onClick={confirmAllOrder}> CONFIRM ORDER </button>
            <Footer />
        </div>
    )

}
