import { useState } from 'react';
import '../css/Votes.css';

function Votes() {
    const [chocolateVotes, setChocolateVotes] = useState(0);
    const [vanillaVotes, setVanillaVotes] = useState(0);
    const [strawberryVotes, setStrawberryVotes] = useState(0);
    const [visible, setVisible] = useState(true);


    function getTotal(){
        return chocolateVotes + strawberryVotes + vanillaVotes;
    }
    
    function calculatePercentage(votes:number, totalVotes:number){
        return (votes / totalVotes * 100).toFixed(1) + '%';
    }
  
    // function showBar() {
        
    // }

    return(
        <div className="Votes">
            <h2>Vote Here</h2>
            <div className="button-bar">
                <button onClick={()=> {
                    setChocolateVotes(chocolateVotes + 1);
                    // showBar();
                    }}>Chocolate</button>
                <button onClick={() => setVanillaVotes(vanillaVotes + 1)}>Vanilla</button>
                <button onClick={() => setStrawberryVotes(strawberryVotes + 1)}>Strawberry</button>
            </div>
            { getTotal() === 0 ?
            <>
            <p>No votes yet</p>
            </>
            :
            <>
          {chocolateVotes > 0 ?
            <p>
                <label>Chocolate</label> {chocolateVotes} ({calculatePercentage(chocolateVotes, getTotal())})
            </p>
            <progress className="progressChocolate" value={ chocolateVotes / getTotal()}></progress>
        :  <div></div>
        }
            <p>
                <label>Vanilla</label> {vanillaVotes} ({calculatePercentage(vanillaVotes, getTotal())})
            </p>
            <progress className="progressVanilla" value={ vanillaVotes / getTotal()}></progress>
            <p>
                <label>Strawberry</label> {strawberryVotes} ({calculatePercentage(strawberryVotes, getTotal())})
            </p>
            <progress className="progressStrawberry" value={ strawberryVotes / getTotal()}></progress>
            </>}
        </div>
    )
}

export default Votes;