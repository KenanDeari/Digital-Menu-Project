$(document).ready(() => {
   $("form.new-item").on("submit", event => {
      event.preventDefault();
      const sectionInput = $("input#section");
      const itemInput = $("input#item");
      const descripInput = $("input#descrip");
      const priceInput = $("input#price");

      const newItem = {
         section: sectionInput.val().trim(),
         item: itemInput.val().trim(),
         descrip: descripInput.val().trim(),
         price: priceInput.val().trim(),
      };

      if (!newItem.section || !newItem.item || !newItem.descrip || !newItem.price) {
         return;
      }
      postItem(newItem.section, newItem.item, newItem.descrip, newItem.price);
      sectionInput.val("");
      itemInput.val("");
      descripInput.val("");
      priceInput.val("");
   });

   function postItem(section, item, descrip, price) {
      $.post("/api/add-to-menu", {
         section: section,
         item: item,
         descrip: descrip,
         price: price,
      })
         .then(() => {
            console.log("Created new item");
            window.location.replace("/api/view-menu");
         })
         .catch(err => {
            console.log(err);
      });
   };

   $(".delete-item").on("click", event => {
      event.preventDefault();
      let id = $(this).menu("id");
      $.ajax("/api/menu-item/" + id, {
         type: "DELETE"
      }).then(() => {
         console.log("Delete item", id);
         location.reload();
      });
   });
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