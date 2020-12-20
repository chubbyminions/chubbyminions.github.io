const catalogue = document.getElementById("book-catalogue");

let books = [
    'Better Thinking, Better Chess - Joel Benjamin.pdf',
    'Beyond Material - Davorin Kuljasevic.pdf',
    'Small Steps to Giant Improvement - Sam Shankland.pdf',
    'The Chess Toolbox - Thomas Willemze.pdf',
    'Under the Surface - Jan Markos.pdf',
    "Zlotnik's Middlegame Manual - Boris Zlotnik.pdf"
];

books.map(book => {
    let pdfPath = book;
    let path = pdfPath.slice(0, -4);
    let imgPath = path + ".png";
    let title = path.split(" - ")[0];
    let author = path.split(" - ")[1];

    catalogue.innerHTML += '<div class="book-listing"><a href="/media/library/books/chess/' + pdfPath + '" target="_blank"><img src="/media/library/covers/' + imgPath + '" alt="' + path + '" class="book-img"></a><div class="book-title">' + title + '</div><div class="book-author">' + author +'</div></div>';
})


