var elForm = document.querySelector('.race__form')
var distansInput = elForm.querySelector('.race__input')

var humanResult = document.querySelector('.human_result')
var rideResult = document.querySelector('.ride_result')
var carResult = document.querySelector('.car_result')
var planeResult = document.querySelector('.plane_result')

var humanSpeed = 3.6;
var rideSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

elForm.addEventListener('submit', function(event) {
  event.preventDefault()
  var value = Number(distansInput.value)

  if(value <= 0) {
    alert('Raqam 0 dan katta bo\'lsin')
    return;
  }

  var onFoot = (value / humanSpeed).toFixed(1)
  var onRide = (value / rideSpeed).toFixed(1)
  var onCar = (value / carSpeed).toFixed(1)
  var onPlane = (value / planeSpeed).toFixed(1)

  humanResult.textContent = onFoot;
  rideResult.textContent = onRide;
  carResult.textContent = onCar;
  planeResult.textContent = onPlane;

  distansInput.value = ''
})