/* ------ Author ------ */
class Author {
    name =  "";
    email = "";
    gender = '';

    constructor(name, email, gender){
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
    toString(){
    return `Author [ name = ${this.name}, email = ${this.email}, gender = ${this.gender}]`
    }
}


/* ------ Book ------ */
class Book {
    name = "";
    authors = [];
    price = 0;
    qty = 0;

    constructor(name, authors, price, qty = 0){
        this.name = name;
        this.author = authors;
        this.price = price;
        this.qty = qty;
    }
    /*
    constructor(name, authors, price){
        this.name = name;
        this.author = authors;
        this.price = price;
    }
    */
    getName(){
        return this.getName;
    }
    getAuthors(){
        return this.getAuthors;   
    }
    getPrice(){
        return this.getPrice;
    }
    setPrice(price){
        this.price = price;
    }
    getQty(){
        return this.getQty;
    }
    setQty(qty){
        this.qty = qty;
    }
    toString() {
        let authorDetails = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorDetails += this.authors[i] + `, gender = ${this.authors[i].gender}]`;
            if (i < this.authors.length -1 ) {
                authorDetails += ', ';
            }
        }
        return `Book [name = ${this.name}, authors = {${authorDetails}}, price = ${this.price}, qty = ${this.qty}]`;
    }

    getAuthorsNames(){
        let authorNames = [];
        for (let i = 0; i < this.authors.length; i++) {
            authorNames.push(this.authors[i].getName());
            if (i < this.author.length -1){
                authorNames += ", ";
            }
        }
        return authorNames;
    }
}


/* ------ Main ------ */
const main = () => {
    const author1 = new Author("Vick", "vick@eamil.com",'Male'); 
    const author2 = new Author("Mind", "mind@eamil.com",'Female'); 

    console.log(author1.toString());
    console.log(author2.toString());

    // สร้างหนังสือโดยระบุผู้แต่ง
    const book1 = new Book("JavaProgaming", [author1, author2], 29.99, 100);

    //const book2 = new Book("JavaProgaming", [author2], 29.99, 100);

    console.log(book1.toString());
   // console.log(book2.toString());
};
main();