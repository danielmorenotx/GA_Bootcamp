package fileoperations;

import javax.swing.*;
import java.io.*;
import java.io.FileReader;
import java.util.Scanner;

public class FrontEndExample {

    public static void main(String[] args) throws IOException {
        JTextField userChoiceField = new JTextField(20);
        JPanel panel = new JPanel();
        panel.add(userChoiceField);
        int result = JOptionPane.showConfirmDialog(null, panel, "Please enter '1' to sign in or '2' to sign up.", JOptionPane.OK_CANCEL_OPTION);
        if (result == JOptionPane.OK_OPTION) {
            String userChoice = userChoiceField.getText();
            System.out.println("User: " + userChoice);

            if (userChoice.equals("1")) { // prompt user to login
                
                JTextField usernameInput = new JTextField(10);
                JTextField passwordInput = new JTextField(10);

                JPanel credentialsPanel = new JPanel();
                credentialsPanel.add(usernameInput);
                credentialsPanel.add(passwordInput);

                int loginInfo = JOptionPane.showConfirmDialog(null, credentialsPanel, "Please enter your username and password to continue", JOptionPane.OK_CANCEL_OPTION);

                if (loginInfo == JOptionPane.OK_OPTION) {
                    String username = usernameInput.getText();
                    String password = passwordInput.getText();

                    try {
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

                            if (string.contains(username + " - " + password)) {
                                System.out.println("SUCCESSFUL LOGIN");
                            } else {
                                System.out.println("Username and Password do not match.");
                            }

                        } else {
                            System.out.println("User not found. Sign up for an account to continue.");
                        }
                    } catch (Exception e) {
                        e.getLocalizedMessage();
                    }

                }
            } else if (userChoice.equals("2")) {
                boolean usernameExists = true;
                while (usernameExists) {
                    JTextField newUsernameInput = new JTextField(10);
                    JTextField newPasswordInput = new JTextField(10);

                    JPanel signUpPanel = new JPanel();
                    signUpPanel.add(newUsernameInput);
                    signUpPanel.add(newPasswordInput);

                    int signUpInfo = JOptionPane.showConfirmDialog(null, signUpPanel, "To sign up, please enter your desired username and press 'Enter'.", JOptionPane.OK_CANCEL_OPTION);

                    String newUsername = newUsernameInput.getText();
                    String newPassword = newPasswordInput.getText();

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

                        String newEntry = (newUsername + " - " + newPassword);

                        FileWriter fileWriter = new FileWriter("./src/fileoperations/credentials.txt", true);
                        fileWriter.write(newEntry + "\n");
                        fileWriter.close();
                    }
                }
            }
        }
    }
}