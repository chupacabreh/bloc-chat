(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open({
            templateUrl: '/templates/cookies.html',
            controller: 'CookiesCtrl as cookies',
            size: 'sm'
        });
    }
  };

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
