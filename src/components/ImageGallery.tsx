import { useState } from "react";
import "./image-gallery.css";

export interface ImageData {
    id: string;
    src: string; 
    alt: string;
    caption: string;
}

export default function ImageGallery({buttonClass, images}: {buttonClass: string, images: ImageData[]}) {
    const [isOpen, setIsOpen] = useState(false);

    function onClick() {
        setIsOpen(true);
    }

    function onClose() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={onClick} className={buttonClass}>
                <img id={images[0].id} src={images[0].src} alt={images[0].alt}
                    className="ig-button-image"/>
            </button>
            {isOpen && <OpenGallery onClose={onClose} images={images} />}
        </div>
    );

}

function OpenGallery({ onClose, images }: { onClose: () => void, images: ImageData[]} ) {
    const [index, setIndex] = useState(0);

    function onForwardClick() {
        setIndex(index + 1);
    }

    function onBackwardClick() {
        setIndex(index - 1);
    }

    return (
        <div className="ig-open-gallery">
            <button className="ig-close-button" onClick={onClose}> x </button>
            <img id={images[index].id} src={images[index].src} alt={images[index].alt}
                className="ig-image"/>
            <p>
                {images[index].caption}
            </p>
            <div>
                {(index > 0) && <button onClick={onBackwardClick} className="ig-nav-button"> &lt; </button>}
                {(index < images.length - 1) && <button onClick={onForwardClick} className="ig-nav-button"> &gt; </button>}
            </div>
        </div>
    );
}