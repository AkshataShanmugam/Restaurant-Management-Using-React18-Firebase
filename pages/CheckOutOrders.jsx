import React from "react";

import appetizer from '../src/images/appetizer-platter.png'
import caesar from '../src/images/caesar-salad.png'
import spaghetti from '../src/images/spaghetti-and-meatballs.png'
import salmon from '../src/images/grilled-salmon.png'
import chocolava from '../src/images/chocolate-lava-cake.png'
import chickenMarsala from '../src/images/chicken-marsala.png';
import newYorkStripSteak from '../src/images/new-york-strip-steak.png';
import tiramisu from '../src/images/tiramisu.png';
import frenchOnionSoup from '../src/images/french-onion-soup.png';
import lobsterMacAndCheese from '../src/images/lobster-mac-and-cheese.png';
import filetMignon from '../src/images/filet-mignon.png';
import cremeBrulee from '../src/images/creme-brulee.png';


export default function displayOrders(props) {
    // props = Object.values(props.item);
    // console.log("props:", Object.values(props.item)[0])
    let image;

    // for (let k in Object.values(props.item)){
    //     let temp = (Object.entries(props.item)[k][1]);
    //     console.log(temp)
    // }

    if ("/src/images/" + props.item.coverImg === appetizer) {
        image = appetizer
    } else if ("/src/images/" + props.item.coverImg === caesar) {
        image = caesar
    } else if ("/src/images/" + props.item.coverImg === spaghetti) {
        image = spaghetti
    } else if ("/src/images/" + props.item.coverImg === salmon) {
        image = salmon
    } else if ("/src/images/" + props.item.coverImg === chocolava) {
        image = chocolava
    } else if ("/src/images/" + props.item.coverImg === chickenMarsala) {
        image = chickenMarsala;
      } else if ("/src/images/" + props.item.coverImg === newYorkStripSteak) {
        image = newYorkStripSteak;
      } else if ("/src/images/" + props.item.coverImg === tiramisu) {
        image = tiramisu;
      } else if ("/src/images/" + props.item.coverImg === frenchOnionSoup) {
        image = frenchOnionSoup;
      } else if ("/src/images/" + props.item.coverImg === lobsterMacAndCheese) {
        image = lobsterMacAndCheese;
      } else if ("/src/images/" + props.item.coverImg === filetMignon) {
        image = filetMignon;
      } else if ("/src/images/" + props.item.coverImg === cremeBrulee) {
        image = cremeBrulee;
      }

      return (
        <div className="card">
            <img src={image} className="card--image" />
            <p className="card--title">{props.item.title}</p>   
            <p className="card--title">{props.item.description}</p>   
            <p className="card--price"><span className="bold">${props.item.price}</span></p>
            <p className="card--price"><span className="bold">Number of orders: {props.item.count}</span></p>
        </div>
    )
}
