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

   // PUT (Update)
   // Modal
   $(".update-item").on("click", function(event) {
      event.preventDefault();
      $(".modal-bg").addClass("modal-active");
      let id = $(this).data("id");
      $.ajax({
         url: `/api/view-menu/ ${id}`,
         type: "PUT",
         data: {
            section: $(this).data("section"),
            item: $(this).data("item"),
            descrip: $(this).data("descrip"),
            price: $(this).data("price")
         }
      }).then(function () {
         console.log(`Updated item ${id}`);
      });
   });
   
   
   
   // Modal Save Button
   $(".save").on("click", () => {
      $(".modal-bg").removeClass("modal-active")
      location.reload();
   });

   // Modal Cancel Button
   $(".cancel").on("click", () => {
      $(".modal-bg").removeClass("modal-active")
   });


   // DELETE
   $(".delete-item").on("click", function (event) {
      event.preventDefault();
      let id = $(this).data("id");
      $.ajax(`/api/view-menu/ ${id}`, {
         type: "DELETE"
      }).then(function () {
         console.log(`Deleted item ${ id }`);
         location.reload();
      });
   });
});


 // $(".update-item").on("click", function (event) {
   //    event.preventDefault();
   //    let id = $(this).data("id");
   //    $.ajax({
   //       url: "/api/view-menu/" + id,
   //       type: "PUT",
   //       data: {
   //          section: $(this).data("section"),
   //          item: $(this).data("item"),
   //          descrip: $(this).data("descrip"),
   //          price: $(this).data("price")
   //       }
   //    }).then(function () {
   //       console.log("Updated item", id);
   //       location.reload();
   //    });
   // });