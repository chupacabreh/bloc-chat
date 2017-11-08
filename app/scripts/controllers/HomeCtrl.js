(function () {
    function HomeCtrl(Room, $uibModal, Message) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.messages = null;

        this.addRoom = function (){
          $uibModal.open({
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl as modal',
            size: 'sm'
          });
        };

        this.setCurrentRoom = function(room) {
          this.currentRoom = room;
          this.messages = Message.getByRoomId(room.$id);
        };

      }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
