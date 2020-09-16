function main(){
  $("#js-shopping-list-form").submit(event => {
    event.preventDefault();//keeps from refreshing your page
    const item = $(event.currentTarget).find("#shopping-list-entry");
    $(".shopping-list").append(`
    <li>
        <span class="shopping-item">${item.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    item.val("");
  });
  $(".shopping-list").on("click",".shopping-item-delete",function(event){
    $(this).closest("li").remove();
  });

  $(".shopping-list").on("click",".shopping-item-toggle",function(event){
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  });

}
$(main);


