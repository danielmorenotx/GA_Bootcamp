import java.lang.reflect.Array;
import java.util.ArrayList;

public class Library {
    // ========== 12. Advanced Class Design =========
    private ArrayList<Book> books; // declares ArrayList called "books"

    public Library () { // Library constructor
        this.books = new ArrayList<>(); // this refers to this class, empty "books" ArrayList
    }

    public void addbook(Book book) { // method to add books
        books.add(book); // add book to the end of the books array
    }


}
