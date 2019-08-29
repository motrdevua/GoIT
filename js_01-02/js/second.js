var arr = [];
function boom() {
  for (var i = 0; i < 5; i++) {
    arr[i] = prompt('name', '');
  }
  console.log(arr);

  var username = prompt('enter username:', '');

  for (var j = 0; j < arr.length; j++) {
    if (arr[j] == username) {
      return alert('welcome');
    } else {
      return alert('go away');
    }
  }
}
boom();
