$(document).ready(function() {
    $('#button').on('click',function(){
       //$('body').append("<p id='red'>hi</p>");
        //var height = prompt("Select a height");
        //ar width = prompt("Select a width");
    
        for (var x = 0; x < 10; x++){
            $('#grid').append("<tr></tr>");
        }
        for(var y = 0; y < 10; y++){
            $('tr').append("<td>hi</td>");
        }

    });
});