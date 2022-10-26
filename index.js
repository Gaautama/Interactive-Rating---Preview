
$(".value").click(function() {
  $(".value").removeClass("active");
  $(this).addClass("active");
  var rate = this.innerHTML;

  $(".rate").html("You selected " + rate + " of 5");
})
