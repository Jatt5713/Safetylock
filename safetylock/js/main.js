console.log('loaded');



const addButton = document.getElementById('add-button');
const urlNameInput = document.getElementById('url-name'); // Assuming this is meant to be the username
const passwordInput = document.getElementById('password');
const entriesList = document.getElementById('entries-list'); // To be used for displaying entries

let credentials = [
    {
        username: "test",
        password: "test123"
    },
];

function updateEntriesList() {
    // Clear the current list
    entriesList.innerHTML = '';

    // Add each credential as a new list item
    credentials.forEach(credential => {
        const li = document.createElement('li');
        // Here we'll only display the username for security reasons
        // Consider how you might securely display or handle the passwords
        li.textContent = `Username: ${credential.username} Password: ${credential.password}`;
        entriesList.appendChild(li);
    });
}

// Initial update to display any pre-existing credentials
updateEntriesList();

addButton.addEventListener('click', () => {
    let usernameToAppend = urlNameInput.value.trim();
    let passwordToAppend = passwordInput.value;
    credentials.push({username: usernameToAppend, password: passwordToAppend});
    console.log(credentials);

    // Update the list each time a new credential is added
    updateEntriesList();

    // Clear the input fields after adding
    urlNameInput.value = '';
    passwordInput.value = '';
});
