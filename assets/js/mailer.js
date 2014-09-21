var bjorg = angular.module('bjorg', []);

bjorg.controller('mailer', ['$scope', function($scope) {
    Parse.initialize("5DaKMydWmtxbHDBGeNT1LYhnDQTKPibcKs5ObNJf", "aiggeCYClT6opuqsG1BJ65qLRxw55rI8nccmelXS");

    $scope.send = function() {
      $scope.sending = true;
      $scope.success = false;
      $scope.error = false;

      var data = {
        name: $scope.name,
        email: $scope.email,
        phone: $scope.phone,
        message: $scope.message
      }

      Parse.Cloud.run("sendEmail", data, {
        success: function(object) {
          $scope.$apply(function() {
            $scope.success = true;
            $scope.sending = false;
            $scope.error = false;
          });
        },
   
        error: function(object, error) {
          $scope.$apply(function() {
            $scope.error = true;
            $scope.sending = false;
            $scope.success = false;
          });
        }
      });
    }
}]);