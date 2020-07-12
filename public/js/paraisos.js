$(document).ready(function () {
   $("button.add-item").on("submit", event => {
      event.preventDefault();
      console.log("Test - 1");
       const newItem = {
         section: $("#section").val().trim(),
         item: $("#item").val().trim(),
         descrip: $("#descrip").val().trim(),
         price: $("#price").val().trim(),
      };

      $.ajax("/api/add-to-menu", {
         type: "POST",
         data: newItem
      }).then(function() {
         console.log("Created new item");
         // location.reload();
      });
   });
})

//    $(document).on("submit", ".add-item", function(event) {
//       event.preventDefault();
//       console.log("Test - 1");
//       let newItem = {
//          section: $("#section").val().trim(),
//          item: $("#item").val().trim(),
//          descrip: $("#descrip").val().trim(),
//          price: $("#price").val().trim(),
//       };

//       $.ajax("/api/add-to-menu", {
//          type: "POST",
//          data: newItem
//       }).then(function() {
//          console.log("Created new item");
//          // location.reload();
//       });
//    });
// })

   
//    $(".delete-item").on("click",function(event) {
//       event.preventDefault();
//       let id = $(this).data("id");
//       $.ajax("/api/burgers/" + id, {
//          type: "DELETE"
//       }).then(function() {
//          console.log("Deleted burger", id);
//          location.reload();
//       });
//    });
// });