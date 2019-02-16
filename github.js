class GitHub {
  constructor() {
    this.client_id = 'e0dacd65c29015d9b3c3';
    this.client_secret = '61aeb02666c581af8961b02c31d8a0591697af33';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
  }
}