
# File Operations lab and homework

This project consists of implementing a simple file operations package in Java. The purpose of this package is to handle user logins and signups through a text file called `credentials.txt`. Here are the steps to follow:

## Instructions

1. Create a package named `fileoperations`.
2. Inside the package, create a class that handles the following operations. Feel free to create multiple Classes if necessary.
3. Utilize the Java `FileReader`, `FileWriter`, and `File` classes to work with a text file named `credentials.txt`.
4. The file `credentials.txt` should store usernames obtained from terminal input using the `Scanner` class.
5. The `FileWriter` should be used in such a way that it appends to the file and does not overwrite existing values.
6. `File` should check if the file exists before any operations 
7. Implement appropriate exception handling whenever needed.

## User Input Flow

1. When the application starts, it should prompt the user to choose between (1) login or (2) signup.
2. If the user chooses (1) login:
   - Prompt the user to enter a username.
   - Check if the username exists in the `credentials.txt` file.
     - If it exists, display `SUCCESS!` in the terminal and terminate the application.
     - If it does not exist, display `User not found` in the terminal and terminate the application.
3. If the user chooses (2) signup:
   - Take a username from the user.
   - Print the username to the `credentials.txt` file, ensuring each username is on a new line.
   - Terminate the application.

Ensure that the `credentials.txt` file is created in a directory that the `Main` class has permissions to write to.

# recommanded steps

- First make sure you understand on how the [Scanner](https://www.digitalocean.com/community/tutorials/scanner-class-in-java) class works. U
- Then make sure you can user the Scanner class to interactively get inputs from the terminal. Inputs could be integers and strings. Make sure you `sout` this inputs from the user correctly.
- Then proceed to write a random string to a file.
- Then try reading files.
- Connect the dots you have achieved so far and create the required application.

# Bonus

1. Prompt the user to re-enter a different user name if it already exists.
2. Add a password to the prompt so it askes the user for username and password. It should make sure that it check if both the username and passwords are stored in the file in this format `{username} - {password}` i.e `joe - joepassword`
3. Create a tiny front end desktop app with java(Whoa!). We wont cover front end with java but this is a sneak peak if you are interested. Just copy this code in side a main method and run it. Try to understand what they are.

```
        JTextField textField = new JTextField(20);
        JPanel panel = new JPanel();
        panel.add(textField);
        int result = JOptionPane.showConfirmDialog(null, panel, "Please enter a value", JOptionPane.OK_CANCEL_OPTION);
        if (result == JOptionPane.OK_OPTION) {
            String input = textField.getText();
            System.out.println("User input: " + input);
        }
```