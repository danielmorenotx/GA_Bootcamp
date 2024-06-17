package sectiontwo;

public class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Ducksy can fly");
    }

    @Override
    public void swim() {
        System.out.println("Ducksy can swim");
    }
}
