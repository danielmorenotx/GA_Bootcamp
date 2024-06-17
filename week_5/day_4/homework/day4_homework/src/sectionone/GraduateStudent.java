package sectionone;

public class GraduateStudent extends Student {

    @Override
    public void speak() { //Warm-up 5. multi-level intheritance and overriding
        super.speak(); // Intermediate 1 - calls speak method of person
        System.out.println("Hello, I am a graduate student.");
    }

    public GraduateStudent() {
    }

    // Intermediate 3 Use of super in Constructors
    public GraduateStudent(String name) {
        super(name); // passing the name to the student class constructor
    }

    // Intermediate 7 Calling Superclass Methods
    @Override
    public void walk() {
        super.walk();
        System.out.println("graduate students walk!");
    }

    // Advanced 2 super Method Calls Across Levels
    public void advanced2() {
        super.advanced2();
        System.out.println("This is the graduate student class answer for Advanced 2.");
    }


}
