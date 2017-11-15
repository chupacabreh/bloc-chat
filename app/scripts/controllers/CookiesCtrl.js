(function() {
    function CookiesCtrl(Room, $uibModalInstance, $cookies) {
        this.createUsername = function() {
            if(!this.username || this.username === '') {
                return;
            }
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['Room', '$uibModalInstance', '$cookies', CookiesCtrl]);
})();
