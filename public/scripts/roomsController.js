/*---  Rooms Controller ----*/

myApp.controller('RoomsController', function(RoomsService) {
  console.log('in RoomsController');
  var vm = this;

  // reservation function
  vm.reservation = function() {
    var reservationObject = {
      checkIn: vm.checkInInput,
      checkOut: vm.checkOutInput,
      bed: vm.bedInput,
      nights: vm.nightsInput
    }; // end reservationObject
    console.log('reservationObject:', reservationObject);
    RoomsService.reservation(reservationObject).then(function() {
      sweetAlert("Chambre réservé!");
      vm.checkInInput = '';
      vm.checkOutInput = '';
      vm.bedInput = '';
      vm.nightsInput = '';
    }); // end RoomsService.reservation
  }; // end reservation function







}); // end controller
