import RecepieDisplay from "./RecepieDisplay";


const WeekList =({recepies}) => {
    let html='';
    const week=['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
    week.forEach(day => {
        html+='<tr><td>'+{day}+'</td><td><RecepieDisplay recepies={recepies}/></td></tr>';
        
    })

  

    return (
        <section>
            
            <h4>Välj typ av mat för varje dag:</h4>
            <div>
                {/* {recepies.map((recepie) => (
                    <RecepieDisplay key={recepie.id}
                    recepie={recepie}
                    />
                ))} */}

                
            </div>
            <tr>
                <td>Måndag</td>
                <td><RecepieDisplay recepies={recepies}/></td>
            </tr>
            <tr><td>Tisdag</td>
                <td><RecepieDisplay recepies={recepies}/></td></tr>
            <tr><td>Onsdag</td>
                <td><RecepieDisplay recepies={recepies}/></td></tr>
            <tr><td>Torsdag</td>
                <td><RecepieDisplay recepies={recepies}/></td></tr>
            <tr><td>Fredag</td>
                <td><RecepieDisplay recepies={recepies}/></td></tr>
            <tr><td>Lördag</td>
                <td><RecepieDisplay recepies={recepies}/></td></tr>
            <tr><td>Söndag</td>
                <td><RecepieDisplay recepies={recepies}/></td></tr>
            
        </section>

    )
    
}



export default WeekList;