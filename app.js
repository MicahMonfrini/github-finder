// Search input
const searchUser = document.getElementById('search-user');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  userText = e.target.value;

  if(userText !== '') {
    console.log(userText);
  }
})