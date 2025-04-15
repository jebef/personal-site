import Gallery from "../components/Gallery";

export default function About()
{
    return (
        <div>
            <h2>
                Hey! I'm Wyatt Jebef! That's me!
            </h2>
            <Gallery
                images={[
                    { id: "0", src: "/images/selfies/baptism.JPG", alt: "bedsheets", caption: "York St. bedsheets." },
                    { id: "1", src: "/images/selfies/halloween.JPG", alt: "bedsheets", caption: "York St. bedsheets." },
                    { id: "2", src: "/images/selfies/yosemite.jpg", alt: "bedsheets", caption: "York St. bedsheets." },
                    { id: "3", src: "/images/selfies/baby.jpg", alt: "bedsheets", caption: "York St. bedsheets." }
                ]}
            />
        </div>
    );
}