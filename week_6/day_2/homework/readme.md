# Project Exercise: Stream API in Java - Filtering and Analyzing Dating App Profiles

## Introduction
- In this exercise, we will explore the powerful features of the Java Stream API, focusing on map, filter, anyMatch, allMatch, and count operations. These operations allow us to process collections of data in a functional style, making it easier to perform complex data processing tasks with less code. We will apply these concepts within a simulated context of a dating application.

- We have not covered anyMatch, allMatch, and count in class but this is the time to once again be adventurous!
### References
- [anymatch](https://www.geeksforgeeks.org/stream-anymatch-java-examples/)
- [allMatch](https://www.geeksforgeeks.org/stream-allmatch-java-examples/)
- [count](https://www.geeksforgeeks.org/stream-count-method-java/)

## Set up

### Creating the Profile Class

- Create a datingapp package
-  you will start by creating a class named Profile. This class will represent user profiles within the dating app. Here are the requirements for the Profile class:

**Attributes**: 
    
    - profileName (String): The name of the user.
    - profileDescription (String): A short bio of the user.
    - hobby (String): The main hobby of the user.
    - age (int): The age of the user.
    - likes (String): What the user likes.
    - superUser (Boolean): 

**Constructor**: Create a constructor that initializes all the attributes.

**Getters and Setters:** Generate getters and Setters for all attributes. 

## Instruction

#### Attention! For the questions below create a class named `Utils` and for each question create a `static` method with an appropriate name and return type.
- Example Usage will be `Utils.findAllProfiles()`
 
### Filter

1. Use the filter method to find all profiles where the age is greater than 25 and the hobby is "hiking".

2. Find all profiles where the user is between 18 and 35 years old, and likes contain "movies". 

3. Filter profiles to find users whose hobby is either "cooking" or "photography". 

4. It's important for our dating app to encourage complete profiles for better matchmaking. Use the filter method to exclude (remove) profiles where the hobby field is either empty or null.

### Map
5. Generate a list of integers representing the ages of all profiles.
6. Generate a list of all names with the first letter capitalized.
  

### Anymatch() , AllMatch() and Count()

7. Verify if there are any profiles in the list where the user is under 18 years old. This check is crucial for ensuring that all users meet the age requirement of the dating app. Use anyMatch() to determine if any such profiles exist.

8. Count how many profiles mention "music" in their likes. This operation is useful for understanding the popularity of interests within the app, which can inform event planning or feature development. Use the count() method after filtering profiles to only include those that have "music" in their likes.

9. Ensure all users are of legal age to use the app by checking that every profile represents a user who is at least 18 years old. This is crucial for compliance and safety reasons. Use allMatch() to verify that all profiles meet this age requirement.


### Advanced - 

10. Using chained methods, Filter profiles to include only those that are fully completed. A profile is considered fully completed if none of its attributes (profileDescription, hobby, likes) are empty or null. Then transform the profile to have a super user attribute of true. Then Count how many of these fully completed profiles list a hobby that is related to "arts" or "music".


### Test data
- The follwong profiles are created for you to use. Make sure all are created, if there is a missing constructor that needs to be created, do so.
  
```
        List<Profile> profiles = Arrays.asList(
            new Profile("Alice", "Enjoys hiking and photography", "hiking", 26, "traveling"),
            new Profile("Bob", "Movie enthusiast", "cooking", 29, "movies, music"),
            new Profile("Charlie", "Passionate about photography", "photography", 22, "cooking, movies"),
            new Profile("Diana", "", "", 31, ""), 
            new Profile("Edward", "Loves the outdoors and hiking", "hiking", 27, "coffee, traveling"),
            new Profile("Fiona", "Avid cook", "cooking", 34, "music, traveling"),
            new Profile("George", "Cinema lover", "acting", 23, "movies, theater"),
            new Profile("Hannah", "Music and photography are my life", "photography", 21, "music, arts"),
            new Profile("Ian", "", "gaming", 17, "movies"), 
            new Profile("Julia", "Adventurer and hiker", "hiking", 28, "outdoor activities"),
            new Profile("Kyle", "Tech enthusiast", "coding", 40, "gadgets"),
            new Profile("Linda", "Business analyst", "reading", 45, "economics"),
            new Profile("Mike", "Gym goer", "working out", 25, "health"),
            new Profile("Nina", "High school teacher", "teaching", 37, "education"),
            new Profile("Oscar", "Engineer", "problem solving", 29, "technology")
            new Profile("Olivia", "Fascinated by the arts", "painting", 24, "arts, galleries"),
            new Profile("Noah", "Fitness enthusiast", "running", 26, "marathons, health"),
            new Profile("Emma", "Tech lover and coder", "coding", 30, "technology, startups"),
            new Profile("Liam", "Professional chef", "cooking", 32, "food festivals"),
            new Profile("Sophia", "Documentary filmmaker", "filmmaking", 29, "movies, documentaries"),
            new Profile("Mason", "Budding musician", "music", 21, "guitar, concerts"),
            new Profile("Isabella", "Avid reader and writer", "writing", 28, "literature, poetry"),
            new Profile("Jacob", "Outdoor adventure lover", "hiking", 35, "camping, climbing"),
            new Profile("Ava", "Health and wellness advocate", "yoga", 27, "meditation, fitness"),
            new Profile("William", "Coffee connoisseur", "exploring coffee cultures", 34, "coffee, travel"),
            new Profile("Mia", "Passionate about photography", "photography", 22, "traveling, arts"),
            new Profile("Ethan", "Cinema enthusiast", "watching movies", 23, "film making, acting"),
            new Profile("James", "Amateur astronomer", "astronomy", 25, "stargazing, science"),
            new Profile("Alexander", "History buff", "studying history", 31, "museums, books"),
            new Profile("Emily", "Dedicated environmentalist", "environmental activism", 29, "sustainability, conservation"),
            new Profile("Michael", "Professional gamer", "gaming", 24, "esports, streaming"),
            new Profile("Benjamin", "Jazz musician", "playing jazz music", 26, "saxophone, live performances"),
            new Profile("Charlotte", "Ballet dancer", "ballet", 22, "dance, performances"),
            new Profile("Daniel", "Aspiring actor", "acting", 20, "theater, movies"),
            new Profile("Amelia", "Creative writer", "writing", 25, "fiction, poetry"),
            new Profile("Henry", "Robotics engineer", "building robots", 27, "technology, innovation"),
            new Profile("Joseph", "Political scientist", "researching politics", 29, "debate, policy analysis"),
            new Profile("Chloe", "Surfer", "surfing", 26, "beach, travel"),
            new Profile("David", "Veterinarian", "animal care", 32, "pets, wildlife conservation"),
            new Profile("Ella", "Urban planner", "designing cities", 30, "architecture, sustainability")

        );
```