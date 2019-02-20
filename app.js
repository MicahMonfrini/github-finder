// Init classes
const github = new GitHub;
const ui = new UI;

// Search input
const searchUser = document.getElementById('search-user');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  userText = e.target.value;

  if(userText !== '') {
    // Make http request
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert

        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear profile
  }
})