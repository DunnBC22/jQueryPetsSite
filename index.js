/*
Name: Brian Dunn
Date: Tuesday, March 10th, 2020
Details: The jQuery for the page,
 including sorting the tabs as 
 well as the AJAX for the dog picture
*/

$(document).ready(function() {
  /* 
  This function is the AJAX that retrieves the dog picture from dog.ceo
  */
  $.ajax({
    type: "GET",
    url: "https://dog.ceo/api/breeds/image/random",
    dataType: "json",
    crossDomain: true,
    success: function(response) {
      $.each(response, function() {
        $("#dog-picture").html(
          `<img src="${response.message}" alt="Random Dog picture from dog.ceo/dog-api"></img>`
        );
      });
    },
    error: function() {
      alert(
        "Something seems to have gone wrong. We are working diligently to fix this as soon as possible."
      );
    }
  });

  /* 
  This function allows you to click a new tab to select it.
  */
  $(function() {
    $("#tabs").tabs({
      event: "click"
    });
  });
});
