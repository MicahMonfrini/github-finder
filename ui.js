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
}