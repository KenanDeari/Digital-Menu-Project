$(document).ready(() => {
   $("button.add-item").on("submit", event => {
      event.preventDefault();
      const newItem = {
         section: $("#section").val().trim(),
         item: $("#item").val().trim(),
         descrip: $("#descrip").val().trim(),
         price: $("#price").val().trim(),
      };

      if (!newItem.section) {
         return;
      }
      postItem(newItem.section, newItem.item, newItem.descrip, newItem.price);
      $("#section").val("");
      $("#item").val("");
      $("#descrip").val("");
      $("#price").val("");
   });

   function postItem(section, item, descrip, price) {
      $.post("/add-to-menu", {
         section: section,
         item: item,
         descrip: descrip,
         price: price

      }).then(() => {
         console.log("Created new item");
         window.location.redirect("/view-menu")
      });
   };
});

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