$(document).ready(() => {
   // POST
   $(".new-item").on("submit", function(event) {
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
            console.log("Test 1");
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
      let section = $(this).data("section")
      let item = $(this).data("item")
      let descrip = $(this).data("descrip")
      let price = $(this).data("price")
      
      $("#section").val(section)
      $("#item").val(item)
      $("#descrip").val(descrip)
      $("#price").val(price)

      $("#save").attr("data-id", id);
   });
   
   // Modal Save Button
   $(".save").on("click", function (event) {
      event.preventDefault();
      $(".modal-bg").removeClass("modal-active");
      const id = $(this).data("id");
      $.ajax({
         url: `/api/view-menu/${id}`,
         type: "PUT",
         data: {
            section: $("#section").val().trim(),
            item: $("#item").val().trim(),
            descrip: $("#descrip").val().trim(),
            price: $("#price").val().trim()
         }
      }).then(function () {
         console.log(`Updated item ${id}`);
      });
      location.reload();
   });

   // Modal Cancel Button
   $(".cancel").on("click", function() {
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