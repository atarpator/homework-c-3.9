function startPage(){
  let city = localStorage.getItem('city');
  if (city != null)
    $('.city').placeholder(city);
  let status;
  for (let i = 0; i < 6; i++) {
    status = localStorage.getItem('checkbox' + i);
    if (status != null)
    {
      $('#checkbox' + i).check((status == 'true') ? true : false);
      $('#checkbox' + i).disable(true);
    }
  }
  if ((city != null)  || (status != null))
    $('#remove').show();
}

$('#save').click(() => {
  let city = $('.city').val();
  if (city)
  {
    localStorage.setItem('city', city);
	$('.city').val('');
	$('.city').placeholder(city);
  }
  for (let i = 0; i < 6; i++) {
    let status = $('#checkbox' + i).check();
    localStorage.setItem('checkbox' + i, status);
    $('#checkbox' + i).disable(true);
  }
});

$('#remove').click(() => {
  localStorage.removeItem('city');
  $('.city').val('');
  $('.city').placeholder('');
  for (let i = 0; i < 6; i++) {
    $('#checkbox' + i).check(false);
    $('#checkbox' + i).disable(false);
    localStorage.removeItem('checkbox' + i);
  }
});

startPage();
