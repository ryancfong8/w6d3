const APIUtil = require("./api_util.js");

class UsersSearch {
  constructor (el) {
    this.$el = $(el);
    this.input = this.$el.find("input");
    this.ul = this.$el.find("ul");
    this.$el.on("keyup", this.handleInput.bind(this));
  }

  handleInput(event) {
    this.ul.empty();
    APIUtil.searchUsers(this.input.val())
      .then((users) => this.renderResults(users));
  }

  renderResults(users) {
    console.log(users);
    users.forEach((user) => {
      let $li = $("<li>");
      $li.append(`<a href= /users/${user.id}>${user.username}</a>`);
      this.ul.append($li);
    });
  }
}

module.exports = UsersSearch;
