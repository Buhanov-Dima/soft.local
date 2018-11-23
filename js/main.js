/*var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/directories.json', true);
xhr.send();
xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;
  if (this.status != 200) return;

  var response = JSON.parse(xhr.responseText);
  var directories = response.response.directories;
  //console.log(directories);
  
  var blockArr = document.querySelectorAll('.main_block');
  
  for (var i = 0; i < directories.length; i++) {
    //console.log(directories[i].name);
    var newDiv = document.createElement('div');
    newDiv.classList.add('example');
    newDiv.textContent = directories[i].name;
    blockArr[i].appendChild(newDiv);
  }
}


$( document ).ready(function() {
  
  var a = 0, b = 6;
  var circle = 0 + 1;
  var arr = [80];
  var i = 0; 
	 while(rand != 6){
	 var rand = Math.floor(a + Math.random() * (b + 1 - a));
	 arr[i] = rand;
	 i++;
	 alert(rand);
	  if(rand == 6) break;
	  	circle++;
	 };
	 alert(arr);
});*/

$( document ).ready(function() {
  
	$.getJSON('data/directories.json', function(data){
		for(var i = 0; i < 9; i++){
			var dir = data.response.directories[i].name;
			$('.main_block').add('<div class="examp"> + dir + </div>');
			console.log(dir)};
	});
};