class Library{
    constructor(){
        this.books=[];
    }
    addBooks(book){
        this.books.push(...books);
    }
    ListAllBook(){
        this.books.forEach(function(book){
            console.log(`${this.book.name} is written by ${this.book.author}`);
        });
    }
}
class Book{
    constructor(name,isbn,price,author){
        this.name=name;
        this.isbn=isbn;
        this.price=price;
        this.author=author;
        this.readStatus=false;
    }
    info(){
        console.log(`${this.name}is written by ${this.author} and you have ${this.readStatus ? "read it": "not read it"},and is available at amazon at price ${this.price}`)
    }
    changeReadStatus(){
        this.readStatus=!this.readStatus;
    }
}
let library=new Library();
let book1=new Book("atomic habit",'jaljdfal',890,'james charles')
console.log(book1);
library.addBooks(book1);