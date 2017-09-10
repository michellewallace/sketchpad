$(document).ready(function() {

  $('button#start').click(function() {
    makeGrid();

  $('td').mouseenter(function() {
    $(this).addClass('hovered');
    increaseOpacity(this);
    });

  });


  $('button#reset').click(function() {
    $('*td').css('background-color', 'black');
    $('*td').css('opacity', '0.1');
  });


});

function makeGrid() {
  var size = prompt("Enter a grid size", 16);
  clearGrid();
  contents = '<tr>' + '<td></td>'.repeat(size) + '</tr>'
  count = 1;
  while (count <= size) {
    $('table').append(contents);
    count++;
  }
}

function clearGrid() {
  $('table').empty();
}

function increaseOpacity(element) {
  var opacity = parseFloat($(element).css('opacity'));
  $(element).css('opacity', opacity+0.1)
}
