import { useState } from "react";
import "./gallery.css";

export interface ImageData {
    id: string;
    src: string; 
    alt: string;
    caption: string;
}

export default function Gallery({images}: {images: ImageData[]} ) {
    const [index, setIndex] = useState(0);

    function onForwardClick() {
        setIndex(index + 1);
    }

    function onBackwardClick() {
        setIndex(index - 1);
    }

    return (
        <div className="ig2-gallery">
        
            {(index > 0) && 
            <button className="ig2-nav-button-left" onClick={onBackwardClick}> 
                <img className="ig2-button-image" id={images[index - 1].id} src={images[index - 1].src} alt={images[index - 1].alt}/>
                <span className="ig2-button-text">&lt;</span>
            </button>}

            {(index < images.length - 1) && 
            <button onClick={onForwardClick} className="ig2-nav-button-right">
                <img className="ig2-button-image" id={images[index + 1].id} src={images[index + 1].src} alt={images[index + 1].alt}/>
                <span className="ig2-button-text">&gt;</span>
            </button>}

            <img className="ig2-image" id={images[index].id} src={images[index].src} alt={images[index].alt}/>

        </div>
    );
}