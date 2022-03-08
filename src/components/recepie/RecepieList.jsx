import React from "react";
import Recepies from "../data/recepieData";
import RecepieDisplay from "./RecepieDisplay";

const RecepieList = ({recepies}) => {
    return (
        <section>
            <h1>Här är listan med recept</h1>
            <h4>Välj vilka alternativ som passar varje dag</h4>
            <div>
                {recepies.map((recepie) => (
                    <RecepieDisplay key={recepie.id}
                    recepie={recepie}
                    />
                ))}
            </div>
        </section>
    )

};

export default RecepieList;