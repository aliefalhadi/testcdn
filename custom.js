$(".btn-img").click(function() {
  let modal = document.getElementById("myModal");

  modal.style.display = "block";
  document.getElementById("img01").src = $(this).siblings()[0].src;
  console.log($(this).siblings()[0].src);
});

$("#close").click(function() {
  document.getElementById("myModal").style.display = "none";
});
