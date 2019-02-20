class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <h1>IT WORKS</h1>
        </div>
      </div>
    `
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(message, className) {
    // clear any remaining alerts
    this.clearAlert();
    // create div
    const div = document.createElement('div');
    // add classes
    div.className = className;
    /// add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.searchContainer');
    // get search box
    const search = document.querySelector('.search');
    // insert alert
    container.insertBefore(div, search)

    // timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }
}