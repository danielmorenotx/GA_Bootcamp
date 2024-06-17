import org.w3c.dom.ls.LSOutput;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        int[] array = {1,2,3,4,5};
        printArray(array);

        int target = 6;
        boolean isFound = findElementInArray(array,target);
        System.out.println(isFound);

        // 3
        int target2 = 3;
        int[] array3 = {3,3,3,3,3};
        System.out.println(countOccurences(array3,target2));

        // 4
        int[] array4 = {5,4,8,3,4,7,1,9,7,9};
        System.out.println(findMaxValueInArrayList(array4));

        // 5
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        System.out.println("Original ArrayList: " + list);

        reverseArrayList(list);

        System.out.println("Reversed ArrayList: " + list);

        // 6
        int[] array5 = {1,2,3,4,5,6,7,8};
        reverseArray(array5);

        // 7 Bonus
        mergeArray(array3,array4);
    }

    //## Exercise 1: Print Array Elements
    //Write a method named `printArray` that takes an array of integers as input and prints all its elements to the console.
    public static void printArray(int[] arr) {
        System.out.println(Arrays.toString(arr));
    }

    //## Exercise 2: Find Element in Array
    //Write a method named `findElementInArray` that takes an array of integers and a target value as input, and returns true if the target value is present in the array, and false otherwise.
    public static boolean findElementInArray(int[] arr, int target) {
        for (int num : arr) {
            if (num == target) {
                return true;
            }
        }
        return false;
    }
    //## Exercise 3: Count Occurrences
    //Write a method named `countOccurrences` that takes an array of integers and a target value as input, and returns the number of times the target value appears in the array.

    public static int countOccurences(int[] arr,int target) {
        int occurenceCount = 0;
        for (int num : arr) {
            if (num == target) {
                occurenceCount += 1;
            }
        }
        return occurenceCount;
    }


    //## Exercise 4: Find Maximum Value in ArrayList
    //Write a method named `findMaxValueInArrayList` that takes an ArrayList of integers as input and returns the maximum value in the ArrayList.
    public static int findMaxValueInArrayList(int[] arr) {
        Arrays.sort(arr);
        return arr[arr.length - 1];
    }

    //## Exercise 5: Reverse ArrayList
    //Write a method named `reverseArrayList` that takes an ArrayList of integers as input and reverses the order of the elements in the ArrayList.
    public static void reverseArrayList(ArrayList<Integer> list) {
        Collections.reverse(list);
    }

    //## Exercise 6: Reverse Array
    //Write a method named `reverseArray` that takes an Array of integers as input and reverses the order of the elements in the Array.
    public static void reverseArray(int[] arr) {
        int[] array = new int[arr.length];
        int x = 0;
        for (int i = arr.length - 1; i >= 0; i--) {
            array[x] = arr[i];
            x++;
        }
        System.out.println(Arrays.toString(array));
    }

    //# Bonus
    //## Exercise 7: Merge Arrays
    // Write a method named `mergeArray` that takes two sorted arrays of integers as input and returns a new array that contains the merged elements from both arrays in sorted order.
    public static void mergeArray(int[] arr1, int[] arr2) {
        int[] mergedArray = new int[arr1.length + arr2.length];
        int index = 0;

        for (int i = 0; i < arr1.length - 1; i++) {
            mergedArray[index++] = arr1[i];
        }
        for (int i = 0; i < arr2.length; i++) {
            mergedArray[index++] = arr2[i];
        }
        Arrays.sort(mergedArray);

        System.out.println(Arrays.toString(mergedArray));
    }

}
