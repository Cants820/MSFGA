$("#register-event").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  console.log("Button Click");
  event.preventDefault();
  console.log(event);
  var newEvent = {
    activityName: $("#event-name").val().trim(),
    description: $("#event-description").val().trim(),
    location: $("#event-location").val().trim(),
    date: $("#event-date").val().trim()
  };
  console.log(newEvent);
  // Send the POST request.
  $.ajax("/events/new", {
    type: "Post",
    data: newEvent
  }).then(function () {
      console.log("created new Volunteer");
      // Reload the page to get the updated list
      location.reload();
    });
});