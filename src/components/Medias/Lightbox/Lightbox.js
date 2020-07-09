import React from "react";
import "./Lightbox.css";

const Lightbox = (props) => {
    return (
      <div className="lightboxContainer">
        <img src={props.image} alt={props.title}/>
        <button className="prev" onClick={() => props.previousImage()}>Précédent</button>
        <button className="next" onClick={() => props.nextImage()}>Suivant</button>
        <button className="close" onClick={() => props.closePreview()}>Sortir</button>
      </div>
    );
}

export default Lightbox;
