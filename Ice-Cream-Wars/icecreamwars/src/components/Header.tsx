import { useState } from 'react';
import '../css/Header.css';

function Header() {
    let [userName] = useState<string>("Blair");
    
    return(
        <header>
            <h1>Ice Cream Wars</h1>
            <p id='welcomeUser'>Welcome {userName}</p>
        </header>
    )
}

export default Header;