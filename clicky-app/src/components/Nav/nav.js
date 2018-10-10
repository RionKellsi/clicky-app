import React from "react";
import "./Nav.css";

const Navtab = props => (
    <div>
        <ul className="nav na-tab nav-justified">
            <li><a href="/">Music Artist Clicky Game</a></li>
            <li 
                className={props.message.indexOf('incorrectly') !== -1 ?
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" : 
                        "desc-normal"} >

                            {props.message}
                        </li>

                        <li>Score: <span style={{color: "pink"}}>{props.curScore}</span></li>
        </ul>
    </div>
);

export default Navtab;