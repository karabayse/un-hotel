/*---- Rooms Service ----*/

myApp.service('RoomsService', function($http) {
  var sv = this;

  // POST for reservation
  sv.reservationRequest = function(reservationRequest) {
    return $http({
      method: 'POST',
      url: '/reservation',
      data: reservationRequest
    }).then(function(response) {
      console.log('back from requestReservation post:', response);
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
