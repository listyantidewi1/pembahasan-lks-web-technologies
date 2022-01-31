function setImage(realimage) {
  var image = document.getElementsByName("image-swap")[0];
  image.src = realimage.options[realimage.selectedIndex].value;

  var image2 = document.getElementsByName("image-filter")[0];
  image2.src = realimage.options[realimage.selectedIndex].value;
}

function setFilter(filteredImage) {
  var image = document.getElementsByName("image-filter")[0];
  image.style.filter = filteredImage.options[filteredImage.selectedIndex].value;
}
