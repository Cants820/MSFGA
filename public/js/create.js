$("#register-volunteer").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  console.log("Button Click");
  event.preventDefault();
  console.log(event);
  var newVolunteer = {
    activity: $("#activity-name").val().trim(),
    description: $("#description").val().trim(),
    location: $("#location").val().trim(),
    date: $("#date").val().trim()
  };
  console.log(newVolunteer);
  // Send the POST request.
  $.ajax("/event/create", {
    type: "Post",
    data: newVolunteer
  }).then(
    function () {
      console.log("created new Volunteer");
      // Reload the page to get the updated list
      location.reload();
    });
});