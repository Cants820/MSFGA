$("#register-user").on("click", function (event) {
      // Make sure to preventDefault on a submit event.
      console.log("Button Click");
      event.preventDefault();
      console.log(event);
      var newUser = {
        userName: $("#user-name").val().trim(),
        password: $("#password").val().trim(),
        email: $("#e-mail").val().trim(),
        points: parseInt(0)
      };
      console.log(newUser);
      // Send the POST request.
      $.ajax("/user/register", {
        type: "Post",
        data: newUser
      }).then(
        function () {
          console.log("created new User");
          // Reload the page to get the updated list
          location.reload();
        });
});