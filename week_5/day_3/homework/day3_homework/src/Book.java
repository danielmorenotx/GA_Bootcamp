import java.util.ArrayList;
import java.util.Objects;

public class Book {

    // ========== 1. Create a Simple Class =========
    // Private instance variables
    private String title;
    private String author;
    private static int numberOfBooksCreated = 0; // part of Question 10

    // default constructor
//    Book() {
//        this.title = "";
//        this.author = "";
//    }
    // replaced with chained constructor

    // constructor with parameters
    Book(String title, String author) {
        this.title = title;
        this.author = author;
        numberOfBooksCreated++; // part of question 10
    }

    // ========== 2. Implement Getters and Setters =========

    // Getters
    public String getTitle() {
        return this.title;
    }

    public String getAuthor() {
        return this.author;
    }

    // ========== 7. Validating Parameters in Setters =========
    // Setters
    public void setTitle(String title) throws IllegalAccessException {
        if (title != null || title.length() > 3) {
            this.title = title;
        } else {
            throw new IllegalAccessException("Invalid. Cannot be null or too short");
        }

    }

    public void setAuthor(String author) throws IllegalAccessException {
        if (author != null || author.length() > 3) {
            this.author = author;
        } else {
            throw new IllegalAccessException("Invalid. Cannot be null or too short");
        }
    }


    // ========== 3. Use of 'this' Keyword =========
    // The 'this' keyword will allow the constructors and the setters to refer to the variables
    // that are set in their own existing environment/class.

    // ========== 4. Overloading Constructors =========
//    Book(String title) {
//        this.title = title;
//        this.author = "Unknown";
//    }
    //replaced by chained constructor


    // ========== 5. Instantiating Objects =========

//    public static void main(String[] args) {
//        Book book1 = new Book(); // Default constructor
//        Book book2 = new Book("Java Programming", "John Smith"); // Parameterized constructor
//        Book book3 = new Book("Python Basics"); // Overloaded constructor
//
//        // Outputting the details of each book
//        System.out.println("Book 1 - Title: " + book1.getTitle() + ", Author: " + book1.getAuthor());
//        System.out.println("Book 2 - Title: " + book2.getTitle() + ", Author: " + book2.getAuthor());
//        System.out.println("Book 3 - Title: " + book3.getTitle() + ", Author: " + book3.getAuthor());
//    }

    // commenting out so I can use it later

    // ========== 6. Chaining Constructors =========
    Book() {
        this("","");
    }

    Book(String title) {
        this(title,"Unknown");
    }

    // ========== 8. Static Variables and Methods =========
    private static int bookCount = 0; // static variable

    public static int getBookCount() {
        return bookCount;
    }

    // these static variables and methods belong to the class and not individual instances
    // The variable is shared among all instances.
    // The method does not need an instance of the class to be invoked.


    // ========== 9. Array of Objects =========
    public static void main(String[] args) {
        ArrayList<Book> books = new ArrayList<>(); // names <Book> as the object, makes list called "books"

        books.add(new Book("LotR"));
        books.add(new Book("Dune"));
        books.add(new Book("Harry Potter"));

        for (Book book : books) {
            System.out.println(book.getTitle()); // calls getTitle() method, which returns the title
        }
    }

    // ========== 10. Count the book instances =========

    public static int getNumberOfBooksCreated() {
        return numberOfBooksCreated;
    }
    // added numberOfBooksCreated++ to method to count when it is called

    // ========== 11. Custom toString Method =========

    // Override the toString() method to return a string representation of the book
    @Override
    public String toString() {
        return "Book{" +
                "title='" + title + '\'' +
                ", author='" + author + '\'' +
                '}';
    }


}
