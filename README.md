Voting Machine Application
This is a simple Voting Machine application built using HTML, CSS, and JavaScript. The application allows users to submit their vote after verifying their name, voter ID, and date of birth (DOB). The voting data is stored in the local storage of the browser, which persists across page reloads. The system includes basic validation to ensure that only authorized voters can vote.

Features:
Voter Registration: Users are asked to enter their name, voter ID, and DOB before voting. The system validates these inputs against predefined valid data.
Vote Submission: After successful validation, users can choose their preferred political party (BJP, Congress, or AAP) and submit their vote.
View Vote Counts: Users can view the total vote count for each party.
Clear Data: The system allows clearing of all voting data.
Access Restrictions: Certain features (such as viewing vote counts and checking votes) are restricted until a user has submitted a vote.
Predefined Data
The following valid names, voter IDs, and DOBs are predefined in the system:

Valid Names: Vaibhav, Shivam, Roy, Rahul
Valid Voter IDs: 1234, 5678, 9876, 4321
Valid Dates of Birth (DOBs): 22/11/2002, 10/11/1999, 20/05/1996, 13/06/1986
Only users whose information matches these predefined values are allowed to vote.

Technology Stack:
Frontend: HTML, CSS, JavaScript
Storage: Local Storage (for storing votes)
File Structure:
index.html: The main HTML file containing the structure and logic for the voting machine.
style.css: Contains styles for the voting interface.
JavaScript embedded within the HTML file handles the functionality of the voting system.
How to Use:
Open the Application: Open the index.html file in any modern web browser.

Voter Registration:

Enter a name, voter ID, and date of birth (DOB).
The application will check if the entered details match any of the predefined valid values.
If the information is correct, the user can proceed to vote.
Vote for Party:

After registration, the user will be redirected to a page where they can choose a political party (BJP, Congress, or AAP).
The selected party vote will be recorded.
View Vote Counts:

After submitting a vote, the user can view the total vote count for each party.
The counts are displayed dynamically based on the votes submitted.
Clear Data:

You can clear all data (voter records and vote counts) by clicking the "Clear Data" button.
Notes:
Local Storage: The vote data is stored in the browser's local storage. This means the data is persistent until the browser is closed or the "Clear Data" button is used.
One Vote per Voter: Each voter can only vote once, as the system uses the voter ID to track whether a vote has been submitted.
How It Works:
Name and DOB Validation:

The system checks if the entered name matches any name from the predefined valid list.
Similarly, the entered DOB is compared against the valid DOBs list.
Voter ID Validation:

A four-digit voter ID is required. The system ensures that only valid IDs from the list can be used.
Vote Counting:

After submitting the vote for a party, the system dynamically counts and displays the number of votes for each political party (BJP, Congress, and AAP).
Data Clearing:

Clicking "Clear Data" removes all records from the local storage and resets the application.
Screenshots:
(Include any relevant screenshots of the application here if you have them.)

Troubleshooting:
Error: Invalid Voter ID: This error occurs if the voter ID entered doesn't match any of the predefined valid IDs.
Error: Invalid Name or DOB: This error occurs if the entered name or DOB doesn't match the valid predefined values.
Voter Already Voted: If a voter attempts to vote again, the system will prevent the second vote submission.
Future Enhancements:
Server-side Validation: Currently, validation is handled in the frontend. A real-world application would need to handle validation on the server side.
Multiple Party Options: Expand the list of political parties to allow users to select from a wider range of options.
User Authentication: Implement user authentication and allow for more sophisticated access control.
