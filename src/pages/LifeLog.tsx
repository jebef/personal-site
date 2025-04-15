import LogEntry from "../components/LogEntry";
import "./life-log.css";

export default function LifeLog()
{
    // let secret: string = "First entry! Playing Skate3 and listening to cool jazz. Goodnight!";
    
    return (
        <div className="entry-container">
            <LogEntry 
                title="Monday April 14, 2025"
                text="Spent the day at Precita, upstairs remodel. A fun day of solo building. Grabbed groceries and a gift for Audrey 
                on my walk home. Worked on fun website shit for the rest of the afternoon/evening. Album of the day: Fortress 'round My Heart - Ida Maria."
            />
            <LogEntry 
                title="Thursday Feb 13, 2025"
                text="Met the boss at York, loaded up our core gear, and bounced to Lombard. WAIT! Beronio first to pick up a 4ft piece 
                of treated siding. Rain today, strong winds, gray skies. Simple garage door fix. Stopped at TAP plastics, first visit. 
                Ended the day back at York finishing the sheetrock removal. Off early at 3pm, grabbed a meal at the Peruvian rotisserie, hit the gym around 4:30pm. Back day! Plus 
                a 5min piece on the erg, my form feels good. Now I sit and catch up on log entries. Did a little graphics programming 
                too. Excited for tomorrow, lots of fun things to do."
                images={[
                    { id: "0", src: "/02-13-25-yoda.png", alt: "yoda", caption: "Yoda at TAP Plastics." }
                ]}
            />
            <LogEntry 
                title="Wednesday Feb 12, 2025"
                text="Gave myself some time before work this morning! An hour equates oatmeal with banana butter sugar, extra strong 
                pour over, wide eyes and a smile. Work was kinda meh today. Back at York. Completed a small finishing detail for the 
                fencing I worked on yesterday but spent the majority of the day reorganizing the garage and cutting out long lateral 
                pieces of sheetrock. Did a little coding after work, let myself off easy. Rot time with friends desperately needed. 
                Jovanny ordered in Burger King and got me a Hershey pie. Perfect."
                images={[
                    { id: "0", src: "/02-12-25-fence.png", alt: "fence", caption: "Great grate, great." },
                    { id: "1", src: "/02-12-25-portrait.png", alt: "portrait", caption: "Garage digging." },
                    { id: "2", src: "/02-12-25-safe-sex.png", alt: "safe sex", caption: "Safe sex yo." },
                    { id: "3", src: "/02-12-25-pocket.png", alt: "pocket", caption: "Pocket done!" }
                ]}
            />
            <LogEntry 
                title="Tuesday Feb 11, 2025"
                text="Woke up later than I would have liked - I have been getting in the habit of giving myself a short 30min to get 
                ready in the mornings (not good). Goal for next week is to be up earlier and to bed a touch earlier too. Work was an 
                absolute blast. I spent the whole day at York expanding a portion of the cedar backyard fencing. Simple building, 
                fresh cold air, lush green bamboo. I work with a lot of icky materials; copper brown has to be one of the worst. 
                It is used to treat cut ends of pressure treated wood. The smell is insane. If the earth was full of gasoline people 
                their cars would run on copper brown. Spent a couple hours programming at Manny’s Cafe with Jovanny, my first visit! 
                Manny’s is close, cute, and open late. Reminds me of Central Perk. My end of day routine is constant and perfect - 
                time with friends whom I love. I am proud of the work I did today."
                images={[
                    { id: "0", src: "/02-11-25-before-0.png", alt: "before 0 ", caption: "Before - main." },
                    { id: "1", src: "/02-11-25-before-1.png", alt: "before 1", caption: "Before - pocket." },
                    { id: "2", src: "/02-11-25-after-0.png", alt: "after 0 ", caption: "After - main." },
                    { id: "3", src: "/02-11-25-after-1.png", alt: "after 1", caption: "After - pocket 0." },
                    { id: "4", src: "/02-11-25-after-2.png", alt: "after 2", caption: "After - pocket 1." },
                ]}
            />
            <LogEntry 
                title="Monday Feb 10, 2025"
                text="Worked from 8am to 4pm, no lunch. Kind of a random day - hopped around town with the boss man, cut some cracked
                 plaster out of a bedroom wall at York St, probably did a few other things that I am having trouble recalling at the
                 moment. Ended the day at York with instructions to expand some of the backyard fence. After decompressing at home for
                  a few I walked a block to the gym and hit chest. I am still very much not in lifting shape but I am excited to get
                   back in the flow of my old routine. Worked on some OpenGL/graphics stuff and spent some lazy time with my Cafe 
                   Ethiopia tribe. "
                images={[
                    { id: "0", src: "/02-10-25-bedsheets.png", alt: "bedsheets", caption: "York St. bedsheets." },
                    { id: "1", src: "/02-10-25-fence.png", alt: "fence instructions", caption: "Fence expansion download." },
                    { id: "2", src: "/02-10-25-window.png", alt: "window", caption: "Window - street textures." }
                ]}
            />
            <LogEntry 
                title="Sunday Feb 9, 2025"
                text="Not much to report here. As I am writing this several days late, my memory is a touch foggy. Spent time with
                 friends, programmed, listened to music, took some deep breaths, survived another 24 hours… ha! "
            />
            <LogEntry 
                title="Saturday Feb 8, 2025"
                text="Slept in. Brewed a tumbler full of Major Dickason's for breakfast. My current pour-over setup: small stainless
                 steel pot to boil water, glass V60 dripper, petite mug to scoop and pour water. Silly but functional. Spent most of
                  my day programming. Built a simple image gallery component to make my life log more interactive. Parallel played
                   with friends all evening and made delicious aguachiles (shoutout Mr. Jovanny). Put Samurai Cop on in the background
                    (I wish his hair was real). As dated as it is, Samurai Cop has its moments - familiar LA backdrops, cool 80s 
                    swag/music, beyond ridiculous dialogue and fighting sequences. Another lovely day."
                images={[
                    { id: "0", src: "/aguachile-02-08-25.png", alt: "aguachile", caption: "Homemade aguachile." },
                    { id: "1", src: "/friends-02-08-25.png", alt: "friends", caption: "Screenagers, Apt C." },
                ]}
            />
            <LogEntry 
                title="Friday Feb 7, 2025"
                text="Grabbed a hot vanilla pineapple latte from Grand Coffee this morning. A small treat for drinking Major Dickason's
                 all week. In the early afternoon I took the 33 to Twin Peaks - my first ever visit! I've wanted to bomb the route since
                  moving to the city last January; it did not disappoint. Ditch the 33 at Clayton/Corbett. Take Pemberton Place till you
                   hit Crown Terrace, make a left. Sharp right on Raccoon Drive. Twin Peaks Boulevard! Skate spot download: great 
                   flat-ground, banked concrete barrier, no cars, unbeatable setting. The way down felt like snowboarding a blue, chasing
                    the curl, something like dat. Pure thrill! The rest of my day: programming, friends, and doodles. Today was a good day."
                images={[
                    { id: "0", src: "/twin-peaks-tree.png", alt: "tree", caption: "Pemberton Place." },
                    { id: "1", src: "/twin-peaks-view.png", alt: "twin peaks", caption: "SF, skateboard, banked barrier." },
                    { id: "2", src: "/drawing-00.png", alt: "gate", caption: "Pen on Paper." }
                ]}
            />
        </div>
    );
}