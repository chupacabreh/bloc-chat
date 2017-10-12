(function () {
  function HomeCtrl(Room) {
    console.log(Room.all);
    this.rooms = Room.all;

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
