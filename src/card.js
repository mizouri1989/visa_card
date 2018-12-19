
import React from 'react';
import './card.css';
const Card=()=>{

    return(
<div className="backstyle">

    < div className="style">
            <h1>CREDIT CARD</h1>
            <img src={require('./photo/puce.PNG')}/>
             <p> 789 564 2564 365 </p>
          </div>
         <div className="Cardmains">
            <div className="Infos">
               <h1>5422</h1>
                <h1>CARD HOLDER</h1>
            </div>
            <div className="Date">
                   <div>
                       <h4>VALID</h4>
                       <h4> THRU</h4>
                   </div>
                 <div>
                   <p>MONTH/YEAR</p>
                      <h1>11/50</h1>
                  </div>
           </div>
           
           <div className="logo">
                   <img src={require('./photo/masterCard.png') }/>
        </div>
        </div>       
            
    </div> 
   )
}
export default Card;


