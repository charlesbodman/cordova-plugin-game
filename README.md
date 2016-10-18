
Cordova Game plugin
====================

This is a fork of [cordova-plugin-game](https://github.com/cranberrygame/cordova-plugin-game) with an improved api.

You can now bind to events, rather than setting callback functions.

View [cordova-plugin-game](https://github.com/cranberrygame/cordova-plugin-game) for standard usage

##Improved event usage 

```js
var unsubscribe = game.on('setupSuccess',function(result){});
var unsubscribe = game.on('setupFailed',function(error){});
var unsubscribe = game.on('loginSuccess',function(playerDetails){})
var unsubscribe = game.on('loginFailed',function(error){})
var unsubscribe = game.on('logoutSuccess',function(result){})
var unsubscribe = game.on('logoutFailed',function(error){})
var unsubscribe = game.on('submitScoreSuccess',function(result){}  );
var unsubscribe = game.on('submitScoreSuccess-' + leaderboardId,function(result){});
var unsubscribe = game.on('submitScoreFailed',function(error){});
var unsubscribe = game.on('submitScoreFailed-' + leaderboardId,function(error){});
var unsubscribe = game.on('showLeaderboardSuccess',function(result){});
var unsubscribe = game.on('showLeaderboardSuccess-' + leaderboardId, function(result){});;
var unsubscribe = game.on('showLeaderboardFailed',function(error){});
var unsubscribe = game.on('showLeaderboardFailed-' + leaderboardId, function(error){});
var unsubscribe = game.on('showLeaderboardsSuccess',function(result){});
var unsubscribe = game.on('showLeaderboardsFailed',function(error){});
var unsubscribe = game.on('getPlayerScoreSuccess',function(result){});
var unsubscribe = game.on('getPlayerScoreSuccess-' + leaderboardId, function(result){});
var unsubscribe = game.on('getPlayerScoreFailed',function(error){});
var unsubscribe = game.on('getPlayerScoreFailed-' + leaderboardId, function(error){});
var unsubscribe = game.on('unlockAchievementSuccess',function(result){} );
var unsubscribe = game.on('unlockAchievementSuccess-' + achievementId, function(result){} );
var unsubscribe = game.on('unlockAchievementFailed',function(error){});
var unsubscribe = game.on('unlockAchievementFailed-' + achievementId, function(error){});
var unsubscribe = game.on('incrementAchievementSuccess',function(result){});
var unsubscribe = game.on('incrementAchievementSuccess-' + achievementId,function(result){});
var unsubscribe = game.on('incrementAchievementFailed',function(result){});
var unsubscribe = game.on('incrementAchievementFailed-' + achievementId, function(result){});
var unsubscribe = game.on('showAchievementsSuccess',function(result){});
var unsubscribe = game.on('showAchievementsFailed',function(result){});
var unsubscribe = game.on('resetAchievementsSuccess',function(result){});
var unsubscribe = game.on('resetAchievementsFailed',function(result){});
var unsubscribe = game.on('getPlayerImageSuccess',function(result){});
var unsubscribe = game.on('getPlayerImageFailed',function(result){});
```

You can manually unsubscribe through the off method

```js
game.off(eventName); //Unsubscribe all EventName

game.off(eventName, handle); //Unsubscribe eventName handle

game.off() //Unsubscribe all events
```


Need events to fire once? Easy

```js
var unsubscribe = game.on('loginSuccess',function(playerDetails){
	unsubscribe(); //Call unsubscribe :)
})
```

