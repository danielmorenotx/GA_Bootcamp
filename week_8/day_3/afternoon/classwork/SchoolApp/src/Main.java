import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/School";
        String username = "postgres";
        String password = "dradis50461!";

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            System.out.println("Connected to PostgreSQL database!");
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(
                    "SELECT * FROM student"
            );
            List<Student> students = new ArrayList<>();
            while (resultSet.next()) {

                int id = resultSet.getInt("studentId");
                String firstName = resultSet.getString("firstName");
                String lastName= resultSet.getString("lastName");
                String email = resultSet.getString("email");
                Date dob = resultSet.getDate("dateofbirth");

                Student newStudent = new Student(id, firstName,lastName, dob, email);
                students.add(newStudent);

                System.out.println(newStudent);
                System.out.print(id);
                System.out.print(firstName);
                System.out.print(lastName);
                System.out.print(dob);
                System.out.print(email);
                System.out.println("");
            }

            System.out.println(students.size());

        } catch (SQLException e) {
            e.printStackTrace();
        }

        // TEACHER
        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            System.out.println("Connected to PostgreSQL database!");
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(
                    "SELECT * FROM teacher"
            );

            List<Teacher> teachers = new ArrayList<>();
            while (resultSet.next()) {

                int id = resultSet.getInt("teacherid");
                String firstName = resultSet.getString("firstName");
                String lastName= resultSet.getString("lastName");
                String email = resultSet.getString("email");
                String department = resultSet.getString("department");

                Teacher newTeacher = new Teacher(id, firstName, lastName, email, department);
                teachers.add(newTeacher);

                System.out.println(newTeacher);
                System.out.print(id);
                System.out.print(firstName);
                System.out.print(lastName);
                System.out.print(department);
                System.out.print(email);
                System.out.println("");
            }

            System.out.println(teachers.size());

        } catch (SQLException e) {
            e.printStackTrace();
        }


    }
}
