$(document).ready(function(){

	$.getJSON('data/directories.json', function(data) {
			//console.log(data); вывод лога

			var output = '<div class="main_block">'; //создание переменной и diva в переменной
			$.each(data, function(key, val){
				output += '<p>' + val.name + '</p>'; //запрос через переменную значения в json
			});
			output += '</div>'

			$('.example').html(output);
	   });
});