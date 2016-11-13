(function($){

  function getData(data) {
    $.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
      addUser(data);
    })
    .fail(function() {
      errorItem();
    });

    $('button').prop('disabled', true);
  }

  function errorItem() {
    var div = $('<div></div>', {
      'class': 'alert alert-danger',
      text: 'Nie udało się załadować danych!'
    })

    $('div.container').append(div);
  }

  function addUser(data) {

      $.each(data, function (i, el) {
        var list = $('#list'),
            listItem = $('<li class="list-group-item"></li>'),
            value = 'name: ' + el.name + ', username: ' + el.username + ', email: ' + el.email + ', phone: ' + el.phone;
        listItem.text(value);
        list.append(listItem);
        //console.log(listItem.text());
  });
  }

  $('button').on('click', getData);


})(jQuery)
