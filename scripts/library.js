const catalogue = document.getElementById("book-catalogue");

console.log(window.location.href);

const books = { //Books[Subject][Category][Book]
    library: { //home
        Reading : [
            "The 100 Endgames You Must Know - Jesus de la Villa.pdf",
        ]
    },
    chess: {
        Opening: [
            "Beating Minor Openings - Victor Mikhalevski.pdf",
            "Beating the Anti-Sicilians - Vassilios Kotronias.pdf",
            "Nimzo-Indian Defence - Michael Roiz.pdf",
            "Queen's Indian Defence - Michael Roiz.pdf",
            "The English Opening Vol 1 - Mihail Marin.pdf",
            "The English Opening Vol 2 - Mihail Marin.pdf",
            "The English Opening Vol 3 - Mihail Marin.pdf",
            "The Most Flexible Sicilian - Alexander Delchev.pdf",
            "The Sicilian Taimanov - Antonios Pavlidis.pdf"
        ],
        Strategy: [
            "Better Thinking, Better Chess - Joel Benjamin.pdf",
            "Beyond Material - Davorin Kuljasevic.pdf",
            "Move First, Think Later - Willy Hendriks.pdf",
            "On the Origin of Good Moves - Willy Hendriks.pdf",
            "Reassess Your Chess - Jeremy Silman.pdf",
            "Recognizing Your Opponent's Resources - Mark Dvoretsky.pdf",
            "Small Steps to Giant Improvement - Sam Shankland.pdf",
            "Strategic Chess Exercises - Emmanuel Bricard.pdf",
            "The Chess Toolbox - Thomas Willemze.pdf",
            'The Complete Chess Swindler - David Smerdon.pdf',
            "The Shereshevsky Method - Mikhail Shereshevsky.pdf",
            "Under the Surface - Jan Markos.pdf",
            "Zlotnik's Middlegame Manual - Boris Zlotnik.pdf"
        ],
        Endgame: [
            "Dvoretsky's Endgame Manual - Mark Dvoretsky.pdf",
            "The 100 Endgames You Must Know - Jesus de la Villa.pdf",
            "The 100 Endgames Workbook - Jesus de la Villa.pdf"
        ]
    }
}

let pathArray = window.location.pathname.split("/");
const subject = pathArray[pathArray.length - 2];

Object.entries(books[subject]).map(category => {
    const categoryName = "- " + category[0] + " -";
    catalogue.innerHTML += '<h2 class="book-category">' + categoryName + '<h2>';

    category[1].map(book => {
        let pdfPath = book;
        let path = pdfPath.slice(0, -4);
        let imgPath = path + ".png";
        let title = path.split(" - ")[0];
        let author = path.split(" - ")[1];
        
        catalogue.innerHTML += '<div class="book-listing"><a href="/media/library/books/' + pdfPath + '" target="_blank"><img src="/media/library/covers/' + imgPath + '" alt="' + path + '" class="book-img"></a><div class="book-title">' + title + '</div><div class="book-author">' + author +'</div></div>';
    })
})

// const fs = require("fs");
// fs.readdir("./../media/library/books", (err, files) => {
//     console.log(files);
// })
