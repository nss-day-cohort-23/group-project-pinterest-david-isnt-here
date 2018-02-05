'use strict';

angular.module('PinterestApp')
.controller('NavBarCtrl', function (FBCreds, $q, $http, $scope, $window, $location, AuthFactory, $routeParams) {
    // $scope.boardid = $routeParams.bid;
    // console.log('scopeboardid',$scope.boardid);
    //  let getBoardName = (boardid) =>{
    //   return $q((resolve, reject)=>{
    //     $http.get(`${FBCreds.DBurl}/boards.json`)
    //     .then(({data}) => {
    //       let keys = Object.keys(data);
    //       keys.forEach(key => data[key].boardid = key);
    //       let newData = Object.values(data);
    //       console.log('newData',newData);
    //       resolve(newData);
    //     })
    //     .catch((err) => {
    //       reject(err);
    //     });
    //   });
    // };
    // getBoardName()
    // .then(boardArray =>{
    //   console.log('boardArray',boardArray);
    //   boardArray.forEach(board=>{
    //     if(board.boardid === $scope.boardid){
    //       console.log('THE RIGHT ONE',board);
    //     }
    //   });
    // });
    $scope.isActive = function (path) {
      let currentPath = $location.path().split('/')[1];
      if (currentPath.indexOf('?') !== -1)
        currentPath = currentPath.split('?')[0];
        return currentPath === path.split('/')[1];
    };
    $scope.clickLogout = () =>
      AuthFactory.logout()
      .then(() => $window.location.href = "#!/login");

  });