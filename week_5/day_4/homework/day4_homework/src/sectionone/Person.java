package sectionone;

public class Person {

    public void speak() { // Warm-up 1. Created speak method
        System.out.println("Hello");
    }

    public void speak(String words) { // Warm-up 6. overloaded method
        System.out.println(words);
    }

    public Person() {
    }

    public Person(String name) { // Warm-up 4. constructor
    }

    // Intermediate 6 Keyword usage
    String superclassQuestion = "accessed from subclass";
    public void accessMe() {
        System.out.println("This is a person method:" + superclassQuestion);
    }

    // Intermediate 7 Calling Superclass Methods
    public void walk() {
        System.out.println("People walk and...");
    }

    // Advanced 2 super Method Calls Across Levels
    public void advanced2() {
        System.out.println("This is the person class answer for Advanced 2. It will skip the student class.");
    }


}
