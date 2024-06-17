package Bonus;
import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
        Car car = new Car();
        Bicycle bicycle = new Bicycle();
        Airplane airplane = new Airplane();

        Scanner scanner = new Scanner(System.in); // creates the scanner object
        System.out.println("Select transport mode:\n1. Car\n2. Bicycle\n3. Airplane");
        int choice = scanner.nextInt(); // takes user input, must be an integer

        if (choice == 1) {
            car.travel();
        } else if (choice == 2) {
            bicycle.travel();
        } else if (choice == 3) {
            airplane.travel();
        }
    }
}
