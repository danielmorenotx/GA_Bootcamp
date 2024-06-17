public class Main {

    public static void main(String[] args) {
        Main instance = new Main();
        String string1 = "HElloo world";

        String hello = "HEllo";
        String world = "world";

        String helloWorld = hello + " " + world;

        System.out.println(instance.isEqualString(string1, helloWorld));

        int number = 6;

        System.out.println(instance.isLargerThan50(number));

        System.out.println(instance.isStringLongerThan10("world"));

        System.out.println(instance.concatString("Happy", "Birthday"));

        System.out.println(instance.countOccurrences("Hello world", 'o'));
    }
    // - Define a method isEqualString that takes two strings and return true if they are equal and returns false if they are not-

    public boolean isEqualString (String string1, String string2) {
//        if (string1.equals(string2)) {
//            return true;
//        } else {
//            return false;
//        }

//        return string1.equals(string2);

        boolean result = string1.equals(string2) ? true : false;

        return result;
    }

    // -Define a method called isLargerThan 50. Returns true if the number provided is larger than 50 else false.

    public boolean isLargerThan50(int num1) {
        boolean result = num1 > 50 ? true : false;
        return result;
    }

    // Define a method called isStringLongerThan10. Returns true if the sting length is > 10 else false

    public boolean isStringLongerThan10(String word) {
        boolean result = word.length() > 10 ? true : false;
        return  result;
    }


    // Define a method called concatString, it takes two stings and concats them then returns the new combined string.

    public String concatString(String string1, String string2) {
        String result = string1.concat(string2);
        return result;
    }


    // Define a method called countOccurrences that takes a string and a target char to check how many times that char exists in the string and returns the count.
    // Example - String str = "Hello World" ['h', 'e', 'l']
    // Target Char = 'o'

    public int countOccurrences(String word, char target) {
        int count = 0;

        for (int i = 0; i < word.length(); i++) {
            if (word.charAt(i) == target) {
                count++;
            }
        }

        return count;
    }


}
