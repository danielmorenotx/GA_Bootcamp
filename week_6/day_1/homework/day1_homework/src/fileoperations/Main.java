package fileoperations;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Type '1' to log in.\nType '2' to sign up.\nPress 'Enter' when done.");
        int userChoice = scanner.nextInt();
        scanner.nextLine();

        if (userChoice == 1) { // prompt user to login

            try {
                System.out.println("To log in, please enter your username. Press 'Enter' when done.");
                String username = scanner.nextLine();
                FileReader fileReader = new FileReader("./src/fileoperations/credentials.txt");
                int character = fileReader.read();
                String string = ""; // create string to fill with characters from file
                while (character != -1) {
                    char currentCharacter = (char) character;
                    string += currentCharacter;
                    System.out.println(string);
                    character = fileReader.read();
                }
                if (string.contains(username.trim())) { // checks if the contents of the file contains the username input
                    System.out.println("Please enter your password to continue");
                    String password = scanner.nextLine();

                    if (string.contains(username + " - " + password)) {
                        System.out.println("SUCCESSFUL LOGIN");
                    } else {
                        System.out.println("Username and Password do not match.");
                    }

                }
                else {
                    System.out.println("User not found. Sign up for an account to continue.");
                }
            } catch (Exception e) {
                e.getLocalizedMessage();
            }

        } else if (userChoice == 2) { // prompts user to sign up
            boolean usernameExists = true;
            while (usernameExists) {
                System.out.println("To sign up, please enter your desired username and press 'Enter'.");
                String newUsername = scanner.nextLine();

                FileReader fileReader = new FileReader("./src/fileoperations/credentials.txt");
                int character = fileReader.read();
                String string = ""; // create string to fill with characters from file
                while (character != -1) {
                    char currentCharacter = (char) character;
                    string += currentCharacter;
                    character = fileReader.read();
                }

                if (string.contains(newUsername)) {
                    System.out.println("Username already exists!");
                } else {
                    usernameExists = false;
                    System.out.println("Please enter a new password.");
                    String newPassword = scanner.nextLine();

                    String newEntry = (newUsername + " - " + newPassword);

                    FileWriter fileWriter = new FileWriter("./src/fileoperations/credentials.txt", true);
                    fileWriter.write(newEntry + "\n");
                    fileWriter.close();
                }
            }
        }
    }
}
