import java.util.Date;

public class Teacher {
    int pkeyTeacherId;
    String teacherFirstName;
    String teacherLastName;
    String email;
    String department;

    public Teacher(int pkeyTeacherId, String teacherFirstName, String teacherLastName, String email, String department) {
        this.pkeyTeacherId = pkeyTeacherId;
        this.teacherFirstName = teacherFirstName;
        this.teacherLastName = teacherLastName;
        this.email = email;
        this.department = department;
    }

    public int getPkeyTeacherId() {
        return pkeyTeacherId;
    }

    public void setPkeyTeacherId(int pkeyTeacherId) {
        this.pkeyTeacherId = pkeyTeacherId;
    }

    public String getTeacherFirstName() {
        return teacherFirstName;
    }

    public void setTeacherFirstName(String teacherFirstName) {
        this.teacherFirstName = teacherFirstName;
    }

    public String getTeacherLastName() {
        return teacherLastName;
    }

    public void setTeacherLastName(String teacherLastName) {
        this.teacherLastName = teacherLastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
