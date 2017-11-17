(function () {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
        this.title = "Messages";
        this.rooms = Room.all;
        this.currentRoom = null;
        this.messages = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.newMessage = {
            content: null,
            roomId: null,
            sentAt: null,
            username: null
        }

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

        this.sendMessage = function() {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.username = this.currentUser;
            this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
            Message.send(this.newMessage);
            document.getElementById("textarea").value = "";
        };

      }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();
