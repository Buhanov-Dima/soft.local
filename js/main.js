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
}*/

/*
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
});
*/
  /*$.getJSON( "ajax/test.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" ) }).appendTo( "body" );
});

	$.getJSON('data/directories.json', function(data){
		for(var i = 0; i < 9; i++){
			var dir = data.response.directories[i].name;
			$.each( data, function( key, val ) {
      dir( "<li id='" + key + "'>" + val + "</li>" );
    });
	};
});*/







/*  for (var i = 0; i < directories.length; i++) {
    //console.log(directories[i].name);
    var newDiv = document.createElement('div');
    newDiv.classList.add('example');
    newDiv.textContent = directories[i].name;
    blockArr[i].appendChild(newDiv);
  }


function init() {
  $.getJSON("data/directories.json", out);
}

function out(data) {
  var out = '';
  var road = data.response.directories[1].name;
  console.log(road);
  for (var road in data) {
  	
    out += '<div class="card">'
    out += '<h2>' + road + '<h2>'
    out += '</div>'
  }

  $(".main_block").html(out)
}

$(function() {
  init();
})

*/

$.getJSON('data/directories.json', function(data){
	var name = data.response.directories;
	var blockArr = document.querySelectorAll('.main_block');
	for( i = 0; i < name.length; i++) {
		$(blockArr[i]).html(name[i].name);
	};
});

$.getJSON('data/directory.json', function(data){
	var fields = data.response.directory.fields;
	var items = data.response.directory.items;
	var arrName = document.querySelectorAll('.name');
	var arrWeight = document.querySelectorAll('.weight');
	var arrPoint = document.querySelectorAll('.point');
	var arrEndDate = document.querySelectorAll('.endDate');
	//var newDiv = document.createElement('<div class>');

/*	$('.value_directory').click(function(){

          if ($(this)==(".hover")){
            $(this).addClass('hover');

          }else{
            $(this).removeClass('hover');

    };
*/

	for( i = 0; i < items.length; i++) {
		console.log(items[i].name);
		$(arrName[i]).html(items[i].name);
	};

	for( i = 0; i < items.length; i++) {
		//console.log(items[i].weight);
		$(arrWeight[i]).html(items[i].weight);
	};

	for( i = 0; i < items.length; i++) {
		//console.log(items[i].point);
		$(arrPoint[i]).html(items[i].point);
	};

	for( i = 0; i < items.length; i++) {
		//console.log(items[i].endDate);
		$(arrEndDate[i]).html(items[i].endDate);
	};

	 var newDiv = [items.length];

	for( i = 0; i < items.length; i++) {
		//$(".value_directory").clone([true]).appendTo(".main__value");
		newDiv[i] = $(".value_directory").clone([true]).appendTo(".main__value");
	};
	
});

