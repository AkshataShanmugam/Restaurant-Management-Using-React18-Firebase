import React from "react";
import star from '../images/star.png'

import appetizer from '../images/appetizer-platter.png'
import caesar from '../images/caesar-salad.png'
import spaghetti from '../images/spaghetti-and-meatballs.png'
import salmon from '../images/grilled-salmon.png'
import chocolava from '../images/chocolate-lava-cake.png'
import chickenMarsala from '../images/chicken-marsala.png';
import newYorkStripSteak from '../images/new-york-strip-steak.png';
import tiramisu from '../images/tiramisu.png';
import frenchOnionSoup from '../images/french-onion-soup.png';
import lobsterMacAndCheese from '../images/lobster-mac-and-cheese.png';
import filetMignon from '../images/filet-mignon.png';
import cremeBrulee from '../images/creme-brulee.png';

export default function Card(props) {
    console.log(appetizer);
    console.log(props.item.coverImg);

    let badgeText
    let image = "";
    if (props.item.availability === 0) {
        badgeText = "SOLD OUT FOR THE EVENING"
    }

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
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={image} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span> {props.item.stats.rating} </span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>   
            <p className="card--title">{props.item.description}</p>   
        </div>
    )
}
