import "./log-entry.css";
import ImageGallery from "./ImageGallery";
import { ImageData } from "./ImageGallery";


interface LogEntryProps {
    title: string;
    text: string;
    images?: ImageData[];
}

export default function LogEntry({ title, text, images }: LogEntryProps)
{
    return (
        <div className="container">
            <h2 className="title">
                {title}
            </h2>
            <div className="content-container">
                <p className="text">
                    {text} 
                </p>
                {images && 
                <div className="image-gallery">  
                    <ImageGallery buttonClass="ig-button" images={images}/>
                </div>
                }
            </div>
        </div>
    );
}