/**
 * A course page body that contains the course and lecture information and a presentation of material relevant to the specific student
 * @author Daniel Runge Petersen
 * @returns HTML body for a course and its lecture material
 */
function coursehtml() {
    let courseObj = {
        coursedescription: `Undervisere: Brian Nielsen og Michele Albano
        Sekretær: Diana Wolff Bie
        
        Computer netværk, og især Internettet spiller i dag en enorm rolle i den måde som vi anvender computere på, og i den måde vi programmerer større applikationer. Tænk på Intranet til deling af fælles ressourcer som printere, netværksdrev, og interne dokumenter. Tænk på Internet til sociale medier, WWW, fil-deling, chat, video-konference, streaming og gaming, Internet-of-things og cyber-physical systems, der kobler den fysiske verden til nettet. Personlige netværk til dit telefon, smart-watch, høretelefoner hører også med. Endvidere kører moderne programmer (applikationer) ofte "over nettet". De er delt op i en front-end på brugerens enhed og en back-end, der kører på en server eller i en sky (som software-as-a service).  Alternativt, anvender programmer ofte eksisterende services som komponenter, og anvender disse via Web-API som del af programmet.  Derfor bør en professionel datalog eller software ingeniør have et fundamentalt kendskab til hvordan netværk er opbygget, virkemåde, og hvordan de kan programmeres. 
        
        Kurset følger en top-down tilgang, hvor vi starter med programmering af applikationer, både front-end (klient) og back-end (server) delen. Specifikt får du i IWP en grundlæggende introduktion til ”front-end triaden” JavaScript, HTML5, (i begrænset omfang) CSS , og back-end systemet Node.js, der også muliggør programmering af denne del vha. JavaScript. Kurset introducerer de dele af JavaScript, der er nødvendige for kurset, men nedtoner mange feature, ligesom funktions- og objekt-orienteret programmering kommer i andre kurser senere i uddannelsen. Klient og server delene bindes sammen med kommunikation ved brug af http protokollen. Kurset viser hvordan simple dynamiske web-sites og web-apps kan programmeres.  
        
        Herefter tager vi en kort, mere klassisk introduktion til de underliggende netværkslag og almindelige Internet protokoller: Applikationslags-protokoller, som applikationer typisk benytter sig af. Dernæst transportlags-protokoller (som handler om at få data helt og korrekt og effektivt frem til modtageren).  Transportlaget kan programmers direkte vha. "Sockets" abstraktionen.  Da kurset bredt orienteret mod software ingeniører og dataloger fokuserer vi på de øverste lag i stakken (til og med transport laget) og mindre på de underliggende netværks- og link-laget.
        
        Udover at give nyttig viden og kompetencer i sig selv, illustrerer kurset også generelt hvordan komplekse systemer (som Internettet) kan bygges ved at opdele dem i lag med stigende grad af "abstraktion", men også begrænsninger ved disse, og at man til tider skal kende til de underliggende teknologier. Af tilsvarende generel viden er begrebet "protokoller", der definerer måden hvorpå to eller flere del-systemer skal kommunikerer for at virke korrekt.  Endeligt er faget en del af distribuerede systemer, som du kan komme til at stifte yderligere bekendtskab med senere i uddannelsen. 
        
        
        Eksamen er en 4-timers skriftlig prøve, og vil bestå af en teori-del (ca. 75%) og en hands-on del (ca 25%). Teori-delen er en blanding af multiple-choice og traditionelle opgaver, der skal checke forståelsen af pensum. Hands-on delen vil typisk være en mindre programmeringsøvelse.
        
         
        
        Tidsforbrug Vi forventer at tidsforbruget vil være nogenlunde jævn gennem semesteret med normalt 1 lektion om ugen. Fordelingen af aktivitet ser sådan ud:
        
        5 ECTS =def 5 * 27.5 timer = 137.5 timer studieaktivitet
        12 lektioner á 2 timer                          = 24 timer
        12 øvelsesgange á 2 timer +1 á 3       = 27 timer
        3.5 timers læsning til hver lektion    ~= 42 timer
        Resterende øvelser hjemme                = 17,5 timer
        Eksamens-repetition                            = 27 timer
        I talt 137.5 timer i alt`
    };
    let lectureArray = [
        {
            lessonNumber: 1,
            lessonname: 'Poggers',
            CourseID: 4 
        },
        {
            lessonNumber: 2,
            lessonname: 'PogChamp',
            CourseID: 4  
        }, 
        {
            lessonNumber: 3,
            lessonname: 'Ik pog',
            CourseID: 5   
        }
    ];
    let learningGoalArray = [
        {
            learnigGoalName: 'UwU',
            lessonNumber: 1
        },
        {
            learnigGoalName: 'kekW',
            lessonNumber: 1
        },
        {
            learnigGoalName: 'pepoWide',
            lessonNumber: 2
        },
        {
            learnigGoalName: 'kappa',
            lessonNumber: 3
        }
    ];
    const content = `
    <main class="course">
        <div class="course-container">
            <h1>Lectures</h1>
            ${lectureOverviewhtml(lectureArray,learningGoalArray, 4)}

        </div>
        <div class="lecture-container">
            <h1>Course overview</h1>
            <div class="lecture">
               ${courseDescriptionhtml(courseObj)}
            </div>




        </div>
    </main>

</body>

</html>`;
    return content;
}

function courseDescriptionhtml(course){
return '<p>' + course.coursedescription + '</p>';
}
function lectureOverviewhtml(lectures, learningGoals, courseID){
    let content = ``;
    lectures.forEach(lecture => {
        if (lecture.CourseID === courseID) {
            content += `<h3>${lecture.lessonNumber}. ${lecture.lessonname}</h3>`;
            content += `<ol>`
            learningGoals.forEach(learningGoal => {
                if (learningGoal.lessonNumber === lecture.lessonNumber) {
                    content += `<li>${learningGoal.learnigGoalName}</li>`
                }
            })
            content += `</ol>`
        }
    });
    return content;
}
/* <div class="lecture-container">
            <h1>Current Lecture Material</h1>
            <div class="lecture">
                <table>
                    <thead>
                        <tr>
                            <th>Material/link</th>
                            <th>Fit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pages 29-37 CLRS</td>
                            <td>
                                <div class="like-dislike">
                                    <input type="submit" class="dislike" value="dislike">
                                    <input type="submit" value="like">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a target="_blank" href="https://www.youtube.com/watch?v=4VqmGXwpLqc"
                                    class="material">Merge
                                    Sort</a>
                            </td>
                            <td>
                                <div class="like-dislike">
                                    <input type="submit" class="dislike" value="dislike">
                                    <input type="submit" value="like">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Covered</td>
                            <td>33%</td>
                        </tr>
                    </tfoot>
                </table>
            </div>




        </div> 
        
        
        
                    <h3>Lecture 1</h3>
            <ol>
                <li>Subject</li>
                <li class="current">Subject</li>
                <li>Subject</li>
            </ol>
            <h3>Lecture 2</h3>
            <ol>
                <li>Subject</li>
                <li>Subject</li>
                <li>Subject</li>
            </ol>*/

module.exports = { coursehtml };