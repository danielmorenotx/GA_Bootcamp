package sectionone;

public class Student extends Person{ //Warm-up 1. inherits Person class


    @Override //Warm-up 2. method overrides Person method
    public void speak() {
        super.speak(); // will return method from superclass
        System.out.println("Hello, I am a student");
    }

    public Student() {
    }

    public Student(String name) {
        super(name); //Warm-up 4. super calls constructor of Person
    }

    // Intermediate 4 Overriding vs Overloading
    // this method is a property of the student and graduate student classes
    public void study(int hours) {
        System.out.println("I study daily for " + hours);
    }

    // Intermediate 6 Keyword usage
    String superclassQuestion = "student subclass";
    @Override
    public void accessMe() {
        super.accessMe();
        System.out.println("This will display the Person method");
        System.out.println("And the student string: " + superclassQuestion);
    }

    // Intermediate 7 Calling Superclass Methods
    @Override
    public void walk() {
        super.walk();
        System.out.println("students work and...");
    }

    // Advanced 2 super Method Calls Across Levels
    // no corresponding class

}
