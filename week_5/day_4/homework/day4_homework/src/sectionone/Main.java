package sectionone;

public class Main {
    public static void main(String[] args) {

        // Warm-up 7 Instance creation
        Person newPerson = new Person();
        Student newStudent = new Student();
        GraduateStudent newGrad = new GraduateStudent();
        Professor newProfessor = new Professor();

        newPerson.speak();
        newStudent.speak();
        newGrad.speak();

        //Warm-up 8 Upcasting and Downcasting
        Person person = new Student(); // upcasting Student object to person
        // the Student object will have the properties of the Person class
        System.out.println("'person' is now and instance of 'Student'");
        person.speak();

        // downcasting
        if (person instanceof Student) { // checks if 'person' is an instance of Student object
            Student student = (Student) person; // downcasts 'person' back to a student object
            // syntax is 'Child variable = (Child) parentVariable'
            student.speak();
        } else {
            System.out.println("'person' is not an instance of Student class");
        }

        // Intermediate 2 Superclass Reference
        superclassReference(newPerson);
        superclassReference(newStudent);
        superclassReference(newGrad);
        superclassReference(newProfessor);

        // Intermediate 5 person reference holding grad object
        Person personReference = new GraduateStudent();
        System.out.println("This is a person reference with a grad object");
        personReference.speak();

        // Intermediate 6 Keyword usage
        Student question6 = new Student();
        question6.accessMe();

        // Intermediate 7 Calling Superclass Methods
        GraduateStudent question7 = new GraduateStudent();
        question7.walk(); // only called from grad object but accessed student then person

        // Advanced 1 Polymorphic Array
        Student studentElement = new Student();
        GraduateStudent graduateElement = new GraduateStudent();
        Professor professorElement = new Professor();
        Person[] personArray = {studentElement, graduateElement, professorElement}; // created array with 3 spaces

        System.out.println("Advanced question 1 answer");
        for (Person personElement : personArray) {
            System.out.println("iteration:");
            personElement.speak();
        }

        //Advanced 2 super Method Calls Across Levels
        GraduateStudent answer2 = new GraduateStudent();
        answer2.advanced2();
    }

    // Intermediate 2 Superclass Reference
    public static void superclassReference(Person person) {
        person.speak();
    }

}