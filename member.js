function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '='
        },
        templateUrl: 'skillsMember.html',
        link: function(scope, element, attrs) {
            scope.getPercent = function() {
                var total = 0;
                var count = 0;
                angular.forEach(scope.member.skills, function(skill) {
                    total += skill.level;
                    count++;
                });
                return (total / count) * 10;
            };
        }
    };
}