import React from "react";
import {useState} from "react";

import WeekList from "./components/recepie/WeekList"

import Recepies from "./components/data/recepieData";


const App = () => {
    const [recepies, setRecepies] = useState(Recepies);
    return (
        <section>
           <WeekList recepies={recepies}/>
           
        </section>
    )
};

export default App;