var player;
var YouTubeVideoApp = angular.module('YouTubeVideoApp', ['ngRoute']);

YouTubeVideoApp.controller(
    'videoManager',

['$scope', '$http', function ($scope, $http) {
    $scope.myGenre;

    $scope.genres = [
        { name: 'Asian Pop', song1: 'fPgAKkz9FC4', song2: 'SMB6YpzndgI', song3: 'gTGsaiYlkBs' },    //Kathy - Lam Truong, Mai Mai - Lam Truong, Tieng Sao Phieu Bong - Lam Truong
        { name: 'Classical', song1: '4Tr0otuiQuU', song2: 'GRjyxr1ysKw', song3: 'NlprozGcs80' },    //Moonlight Sonata, Carl Orff, Canon In D Major
        { name: 'Country', song1: 'psuRGfAaju4', song2: 'SrrCpcIvz8g', song3: 'iXi6IHFHeIA' },      //Fire FLies, Enchanted, Take Your Time
        { name: 'Pop', song1: '09R8_2nJtjg', song2: 'AJtDXIazrMo', song3: 'CmadmM5cOk' },           //Sugar, Love Me Like You Do, Style
        { name: 'Rock', song1: 'fmXLzY8kbYA', song2: 'vSkb0kDacjs', song3: 'VDvr08sCPOc' }          //Snow, Iron, Remember the Name
    ];

    $scope.playVideo = function () {
        if ($scope.myGenre == null) {
            alert("Please select a genre!");
        } else {
            var videoId;
            var random = Math.floor((Math.random() * 3) + 1);
            if (random == 1) {
                videoId = $scope.myGenre.song1;
            } else if (random == 2) {
                videoId = $scope.myGenre.song2;
            } else {
                videoId = $scope.myGenre.song3;
            }
            player.loadVideoById(videoId);
            player.playVideo();
        }
    }
}]);

function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {
        height: '390',
        width: '640',
    });
}