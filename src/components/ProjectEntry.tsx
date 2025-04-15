import "./project-entry.css";
import ImageGallery from "./ImageGallery";
import { ImageData } from "./ImageGallery";
import "./image-gallery.css";


interface ProjectEntryProps {
    title: string;
    text: string;
    link?: string;
    images?: ImageData[];
}

export default function ProjectEntry({ title, text, link, images }: ProjectEntryProps)
{
    return (
        <div className="pe-container">
            <h2 className="title">
                {title}
            </h2>
            <div className="content-container">
                {images && 
                <div className="image-gallery">  
                    <ImageGallery buttonClass="ig-button large" images={images}/>
                </div>
                }
                <p className="text">
                    {text} 
                </p>
                <a href={link} target="_blank">
                    {link}
                </a>
            </div>
        </div>
    );
}