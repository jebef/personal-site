import ProjectEntry from "../components/ProjectEntry";
import "./projects.css";

export default function Projects()
{
    return (
        <div>
            <ProjectEntry
                title="Lone Palm Island"
                text="A 3D renderer/demo written in C++ that leverages the OpenGL 3.3 graphics specification."
                link="https://github.com/jebef/lone-palm-island"
                images={[
                    { id: "0", src: "/images/projects/island/view_0/img0.png", alt: "view 0, img 0", caption: "Day." },
                    { id: "1", src: "/images/projects/island/view_0/img3.png", alt: "view 0, img 3", caption: "Transition." },
                    { id: "2", src: "/images/projects/island/view_0/img6.png", alt: "view 0, img 6", caption: "Night." }
                ]}
            />
        </div>
    );
}