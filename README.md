
Cordova Game plugin
====================

This is a fork of [cordova-plugin-game](https://github.com/cranberrygame/cordova-plugin-game) with an improved api.

You can now bind to events, rather than setting callback functions.

View [cordova-plugin-game](https://github.com/cranberrygame/cordova-plugin-game) for standard usage

##Improved event usage 

```js
var unsubscribe = game.subscribe('setupSuccess',function(result){});
var unsubscribe = game.subscribe('setupFailed',function(error){});
var unsubscribe = game.subscribe('loginSuccess',function(playerDetails){})
var unsubscribe = game.subscribe('loginFailed',function(error){})
var unsubscribe = game.subscribe('logoutSuccess',function(result){})
var unsubscribe = game.subscribe('logoutFailed',function(error){})
var unsubscribe = game.subscribe('submitScoreSuccess',function(result){}  );
var unsubscribe = game.subscribe('submitScoreSuccess-' + leaderboardId,function(result){});
var unsubscribe = game.subscribe('submitScoreFailed',function(error){});
var unsubscribe = game.subscribe('submitScoreFailed-' + leaderboardId,function(error){});
var unsubscribe = game.subscribe('showLeaderboardSuccess',function(result){});
var unsubscribe = game.subscribe('showLeaderboardSuccess-' + leaderboardId, function(result){});;
var unsubscribe = game.subscribe('showLeaderboardFailed',function(error){});
var unsubscribe = game.subscribe('showLeaderboardFailed-' + leaderboardId, function(error){});
var unsubscribe = game.subscribe('showLeaderboardsSuccess',function(result){});
var unsubscribe = game.subscribe('showLeaderboardsFailed',function(error){});
var unsubscribe = game.subscribe('getPlayerScoreSuccess',function(result){});
var unsubscribe = game.subscribe('getPlayerScoreSuccess-' + leaderboardId, function(result){});
var unsubscribe = game.subscribe('getPlayerScoreFailed',function(error){});
var unsubscribe = game.subscribe('getPlayerScoreFailed-' + leaderboardId, function(error){});
var unsubscribe = game.subscribe('unlockAchievementSuccess',function(result){} );
var unsubscribe = game.subscribe('unlockAchievementSuccess-' + achievementId, function(result){} );
var unsubscribe = game.subscribe('unlockAchievementFailed',function(error){});
var unsubscribe = game.subscribe('unlockAchievementFailed-' + achievementId, function(error){});
var unsubscribe = game.subscribe('incrementAchievementSuccess',function(result){});
var unsubscribe = game.subscribe('incrementAchievementSuccess-' + achievementId,function(result){});
var unsubscribe = game.subscribe('incrementAchievementFailed',function(result){});
var unsubscribe = game.subscribe('incrementAchievementFailed-' + achievementId, function(result){});
var unsubscribe = game.subscribe('showAchievementsSuccess',function(result){});
var unsubscribe = game.subscribe('showAchievementsFailed',function(result){});
var unsubscribe = game.subscribe('resetAchievementsSuccess',function(result){});
var unsubscribe = game.subscribe('resetAchievementsFailed',function(result){});
var unsubscribe = game.subscribe('getPlayerImageSuccess',function(result){});
var unsubscribe = game.subscribe('getPlayerImageFailed',function(result){});
```

You can manually unsubscribe through the unsubcribe/off method

```js
game.unsubscribe(eventName); //Unsubscribe all EventName

game.unsubscribe(eventName, handle); //Unsubscribe eventName handle

game.unsubscribe() //Unsubscribe all events
```


Need events to fire once? Easy

```js
var unsubscribe = game.subscribe('loginSuccess',function(playerDetails){
	unsubscribe(); //Call unsubscribe :)
})
```


You can be more terse with 
```js
game.on 
game.off
```
