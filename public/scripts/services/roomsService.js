/*---- Rooms Service ----*/

myApp.service('RoomsService', function($http) {
  var sv = this;

  // POST for reservation
  sv.reservationRequest = function(reservationRequest) {
    console.log('in reservationRequest POST in roomsService.js');
    return $http({
      method: 'POST',
      url: '/reservation',
      data: reservationRequest
    }).then(function(response) {
      console.log('back from reservcationRequest POST:', response);
    });
  }; // end reservation

  // GET for reservation
  // sv.getReservation = function() {
  //   return $http({
  //     method: 'GET',
  //     url: '/reservation'
  //   }).then(function(response) {
  //     console.log('back from getReservation:', response);
  //     sv.data = response.data;
  //   });
  // }; // end getReservation


}); // end service
