$(document).ready(() => {
   // POST
   $(".new-item").on("submit", event => {
      event.preventDefault();
      const sectionInput = $("#section");
      const itemInput = $("#item");
      const descripInput = $("#descrip");
      const priceInput = $("#price");

      const newItem = {
         section: sectionInput.val().trim(),
         item: itemInput.val().trim(),
         descrip: descripInput.val().trim(),
         price: priceInput.val().trim(),
      };

      if (!newItem.section || !newItem.item || !newItem.price) {
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
            window.location.replace("/view-menu");
         })
         .catch(err => {
            console.log(err);
      });
   };

   $(".update-item").on("click", function (event) {
      
   })

   // $(".delete-item").on("click", function(event, req) {
   //    event.preventDefault();
   //    let id = req.params.id;
   //    $.ajax("/api/menu-item/" + id, {
   //       type: "DELETE"
   //    }).then(() => {
   //       console.log("Delete item", id);
   //       location.reload();
   //    });
   // });

   $(document).on("click", ".delete-item", trashCan);

   function trashCan() {
   //  var listItemData = $(this).parent("td").parent("tr").data("author");
    let id = $(this).id;
    $.ajax({
      method: "DELETE",
      url: "/api/view-menu/" + id
    })
      // .then(view-menu);
  }
   //    $(".delete-item").on("click", function (event) {
   //    event.preventDefault();
   //    let del = `id = ${req.params.id}`;
   //    para.delete(del, result => {
   //       if (result.affectedRows == 0) {
   //          return res.status(404).end();
   //       } else {
   //          res.status(200).end();
   //       }
   //    })
   // });
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