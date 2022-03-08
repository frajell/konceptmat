import React from "react";
import { useState } from "react";

const RecepieDisplay = ({recepies}) => {
    

    const [choseMeat, setChoseMeat] = useState(false);
    function onClickHandlerMeat() {
        setChoseVeg(false);
        setChoseFish(false);
        setChoseMeat(!choseMeat);
    }
    const [choseFish, setChoseFish] = useState(false);
    function onClickHandlerFish() {
        setChoseVeg(false);
        setChoseMeat(false);
        setChoseFish(!choseFish);
    }
    const [choseVeg, setChoseVeg] = useState(false);
    function onClickHandlerVeg() {
        setChoseMeat(false);
        setChoseFish(false);
        setChoseVeg(!choseVeg);
    }

    let type;
    let dish;

    if (choseMeat){
        type = <div>Kött</div>
       
       dish =<div>{recepies[0].name}</div>
    }
    if (choseFish){
        type = <div>Fisk</div>
        
        dish =<div>{recepies[1].name}</div>
    }
    if (choseVeg){
        type = <div>Vegetariskt</div>
        
        const randIndex = Math.floor(Math.random() * recepies.length);      

        dish =<div>{recepies[randIndex].name}</div>        
    }

    return (
        <section>
            <td>
                <button onClick={() =>onClickHandlerMeat()                    
                }>Kött</button>
                <button onClick={() =>onClickHandlerFish()                    
                }>Fisk</button>
                <button onClick={() =>onClickHandlerVeg()                    
                }>Veg</button>
            </td>            
            <td>{type}</td>
            <td>{dish}</td>
            
            
        </section>
    )
    }

    export default RecepieDisplay;