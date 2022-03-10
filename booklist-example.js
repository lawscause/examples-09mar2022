let booklist = [];

let book0 = {
    title: "my title",
    author: "Jane Doe",
    isbn: "asdfsdf"
}

let book1 = {
    title: "my title",
    author: "Jane Doe",
    isbn: "asdfsdf"
}

booklist.push(book0);
booklist.push(book1);

for(let i=0; i<booklist.length; i++) {
    doSomething(booklist[i])
}

function doSomething({title, author, isbn}) {
    return title;
}
