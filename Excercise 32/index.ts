/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

// step 1: creating Arrays
const current_users: string[]=["ali","Usman","Saira","Samreen","Muzammil","Ahmed"];

const new_users: string[]=["Muhammad","Taha","Saira","Malaika","Ali"];

//  function
for (const new_user of new_users) {
    // Check case-insensitive uniqueness
    const isUsernameTaken = current_users.some(
        (existing_user) => existing_user.toLowerCase() === new_user.toLowerCase()
    );

    // Print messages based on the result
    if (isUsernameTaken) {
        console.log(`The username '${new_user}' is not available. Please choose a different one.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}