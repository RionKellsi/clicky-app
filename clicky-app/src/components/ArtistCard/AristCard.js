import React from "react";
import "./ArtistCard.css";

const ArtistCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectArist(props.artist)}
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
                >
                    <img alt={props.artist} src={props.image} />
                </a>
        
        </div>
    </div>
);

export default ArtistCard;