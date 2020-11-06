/* Implement a HTML page where you create a table dynamically with JavaScript and populate the table with data from an array of 50 elements.
a) The array contains objects of book data (title, author, published date, Amazon link).
b) When you click on the name column heading, the page sorts the data of the table according to that column.
 */

var books = [
    {
     title: 'The diary of a your girl',
     author: 'Anne Frank',
     publishedDate: 1947,
     link: 'https://www.amazon.de',
    },
    {
    title: 'A Man Called Ove',
    author: 'Fredrik Backman',
    publishedDate: 2012,
    link: 'https://www.amazon.de'
    },
    {
    title: 'Shoe Dog',
    author: 'Phil Knight',
    publishedDate: 2016,
    link: 'https://www.amazon.de'
    },
    {
    title: 'Educated',
    author: 'Tara Westover',
    publishedDate: 2018,
    link: 'https://www.amazon.de'
    },
    {
    title: 'The Green Mile',
    author: 'Stephen King',
    publishedDate: 1996,
    link: 'https://www.amazon.de'
    }
]; 

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
    
function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }
    }
}


/* var sortByTitle = document.createElement('p');
sortByTitle.innerText = '1.Click here to sort by Title';
document.body.appendChild(sortByTitle); */


/* sortByTitle.addEventListener('click', () => let sortTitle = books.sort((a,b) => {
    return a.title - b.title;
    });); */


//I found this exercise very difficult, I didn't manage to do it by myself and I found a template online, the above is not my solution. Also, I didn't manage to sort the table...

