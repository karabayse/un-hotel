/*---- Rooms Service ----*/

myApp.service('RoomsService', function($http) {
  var sv = this;

  // POST for reservation
  sv.reservation = function(reservation) {
    return $http({
      method: 'POST',
      url: '/reservation',
      data: reservation
    }).then(function(response) {
      console.log('back from reservation post:', response);
    });
  }; // end reservation 




}); // end service
