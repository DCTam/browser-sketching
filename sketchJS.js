
$(document).ready(function() {
    $('#button').on('click',function(){
        var gridSize = prompt("Enter grid size (Put ~70 unless you wanna blow your computer up");
        buildGrid(gridSize);
    });
    
    $('#grid').on('mouseover', 'td' , function(){
        $(this).css({"background-color": "black"});
    });
});

function buildGrid(size){
    $('table').empty();
    
    for (var x = 0; x < size; x++){
        $('#grid').append("<tr id='grid'></tr>");
        }
    for(var y = 0; y < size; y++){
        $('tr').append("<td id='draw'></td>");
        }
}
