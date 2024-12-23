Voting Machine Web Application
Overview
This is a simple voting machine web application that allows users to cast votes for three political parties (BJP, Congress, and AAP). The application includes user data collection (Name, Voter ID, Date of Birth) and performs validation to ensure that each Voter ID is used only once. The app stores the data locally and provides a way to view vote counts for each party.

Features:
Voting Form: Allows users to vote for one of the three political parties: BJP, Congress, or AAP.
Vote Count: Displays the total votes for each party.
Data Validation: Ensures that the same Voter ID cannot be used with different names or DOB.
Local Storage: Stores voting data locally and updates vote counts.
Clear Data: Clears the data stored in local storage.
Technologies Used:
HTML: Structure of the web page.
CSS: Styling for the web page.
JavaScript: Logic for vote submission, validation, and storage.
LocalStorage: Used for storing vote data persistently.
Getting Started
Clone the Repository: To get started, clone this repository to your local machine using Git:

bash
Copy code
git clone <repository-url>
Open the Application: Once the repository is cloned, you can open the index.html file in your web browser to start using the application.

bash
Copy code
open index.html
Features in Detail
1. Voting Form:
Users need to fill in their Name, Voter ID, and Date of Birth (DOB).
A dropdown menu allows the user to select a party (BJP, Congress, AAP).
After filling in the details, the user can submit their vote.
2. Vote Validation:
The system checks if the Voter ID has already been used.
If the same Voter ID is entered with a different name or DOB, an error message is displayed.
If all fields are correctly filled, the vote is stored and the total count is updated.
3. Vote Count:
The "Vote Count" section displays the total number of votes for each party.
Users can navigate between the Voting Form and Vote Count tabs from the header.
4. Clear Data:
The "Clear Data" button will remove all stored votes from local storage.
Files and Structure:
bash
Copy code
/VotingMachine
│
├── index.html         # Main HTML file for the application
├── style.css          # Styles for the application
└── script.js          # JavaScript file handling the application logic
index.html
Contains the structure of the voting form, vote count display, and navigation.
style.css
Provides styling for the webpage, including layout, buttons, and input fields.
script.js
Contains all the JavaScript logic for handling form submission, vote validation, vote counts, and local storage interactions.
How It Works:
Submitting a Vote:

When the user submits the voting form, the data is validated.
The application checks if the Voter ID has already been used and if the associated Name and DOB match.
If the data is valid, the vote is stored in localStorage and the count is updated.
Viewing Vote Count:

The user can click the "Vote Count" tab to view the total votes for each party (BJP, Congress, and AAP).
The app uses localStorage to keep track of the votes and updates the count dynamically.
Clearing Data:

The "Clear Data" button allows the administrator (or user) to clear all votes stored in localStorage, resetting the vote counts to zero.
How to Contribute:
Fork the repository.
Create a new branch for your feature or fix.
Submit a pull request with a detailed explanation of the changes.
License:
This project is open-source and licensed under the MIT License.# Voting-Machine-page
