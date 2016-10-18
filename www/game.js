var events = {};


var addEventListener = function( eventName, fn )
{
    if( events.hasOwnProperty( eventName ) === false )
    {
        events[ eventName ] = [];
    }

    events[ eventName ].push( fn );

    return function()
    {
        removeEventListener( eventName, fn );
    }
}



var removeEventListener = function( eventName, fn )
{
    if( arguments.length === 0 )
    {
        events = {};
    }
    else
    {
        if( events.hasOwnProperty( eventName ) )
        {
        	if(typeof fn === 'undefined')
        	{
        		events[eventName] = [];
        	}
        	else
        	{
	            var eventCallbacks = events[ eventName ];
	            for( var i in eventCallbacks )
	            {
	                if( eventCallbacks[ i ] === fn )
	                {
	                    eventCallbacks.splice( i, 1 );
	                    break;
	                }
	            }
        	}
        }
    }
}


var triggerEvent = function( eventName )
{
    var slicedArgs = Array.prototype.slice.call( arguments, 1 );

    if( events.hasOwnProperty( eventName ) )
    {
        var eventCallbacks = events[ eventName ];
        for( var i in eventCallbacks )
        {
            eventCallbacks[ i ].apply( this, slicedArgs );
        }
    }
}


var Game = {

    _loggedin: false,

    tag: '',

    on:function()
    {
    	addEventListener.apply(this, arguments);
    },

    off:function()
    {
    	removeEventListener.apply(this, arguments);
    },

    subscribe:function()
    {
    	addEventListener.apply(this, arguments);
    },

    unsubscribe:function()
    {
    	removeEventListener.apply(this, arguments);
    },

    setUp: function()
    {
        cordova.exec( function( result )
        {
            triggerEvent( 'setupSuccess', result );
        }, function( error )
        {
            triggerEvent( 'setupFailed', error );
        }, "Game", "setUp", [] )
    },

    login: function( tag )
    {
        var self = this;
        cordova.exec( function( result )
        {
            var playerDetails = result;
            self._loggedin = true;
            self.tag = tag;

            if( self.onLoginSucceeded )
            {
                self.onLoginSucceeded( playerDetails );
            }

            triggerEvent( 'loginSuccess', playerDetails );

        }, function( error )
        {

            self.tag = tag;

            if( self.onLoginFailed )
            {
                self.onLoginFailed( error );
            }

            triggerEvent( 'loginFailed', error );

        }, "Game", "login", [] );
    },

    logout: function()
    {
        var self = this;
        cordova.exec( function( result )
            {
                self._loggedin = false;
                triggerEvent( 'logoutSuccess', result );
            },
            function( error )
            {
                triggerEvent( 'logoutFailed', error );
            }, "Game", "logout", [] );
    },

    isLoggedIn: function()
    {
        return this._loggedin;
    },

    submitScore: function( leaderboardId, score, tag )
    {
        var self = this;

        cordova.exec( function( result )
            {
                self.tag = tag;

                if( self.onSubmitScoreSucceeded )
                {
                    self.onSubmitScoreSucceeded( result );
                }

                triggerEvent( 'submitScoreSuccess', result );
                triggerEvent( 'submitScoreSuccess-' + leaderboardId, result );

            },
            function( error )
            {
                self.tag = tag;

                if( self.onSubmitScoreFailed )
                {
                    self.onSubmitScoreFailed( error );
                }

                triggerEvent( 'submitScoreFailed', error );
                triggerEvent( 'submitScoreFailed-' + leaderboardId, error );

            }, "Game", "submitScore", [ leaderboardId, score ] );
    },

    showLeaderboard: function( leaderboardId )
    {
        cordova.exec(
            function( result )
            {
                triggerEvent( 'showLeaderboardSuccess', result );
                triggerEvent( 'showLeaderboardSuccess-' + leaderboardId, result );
            },
            function( error )
            {
                triggerEvent( 'showLeaderboardFailed', error );
                triggerEvent( 'showLeaderboardFailed-' + leaderboardId, error );
            }, "Game", "showLeaderboard", [ leaderboardId ] );
    },

    showLeaderboards: function()
    {
        cordova.exec(
            function( result )
            {
                triggerEvent( 'showLeaderboardsSuccess', result );
            },
            function( error )
            {
                triggerEvent( 'showLeaderboardsFailed', error );
            }, "Game", "showLeaderboards", [] );
    },

    getPlayerScore: function( leaderboardId, tag )
    {
        var self = this;
        cordova.exec( function( result )
            {
                var playerScore = result;
                self.tag = tag;
                if( self.onGetPlayerScoreSucceeded )
                {
                    self.onGetPlayerScoreSucceeded( playerScore );
                }
                triggerEvent( 'getPlayerScoreSuccess', result );
                triggerEvent( 'getPlayerScoreSuccess-' + leaderboardId, result );
            },
            function( error )
            {
                self.tag = tag;

                if( self.onGetPlayerScoreFailed )
                {
                    self.onGetPlayerScoreFailed( error );
                }

                triggerEvent( 'getPlayerScoreFailed', error );
                triggerEvent( 'getPlayerScoreFailed-' + leaderboardId, error );

            }, "Game", "getPlayerScore", [ leaderboardId ] );
    },


    unlockAchievement: function( achievementId, tag )
    {
        var self = this;
        cordova.exec( function( result )
            {
                self.tag = tag;
                if( self.onUnlockAchievementSucceeded )
                {
                    self.onUnlockAchievementSucceeded( result );
                }
                triggerEvent( 'unlockAchievementSuccess', result );
                triggerEvent( 'unlockAchievementSuccess-' + achievementId, result );
            },
            function( error )
            {
                self.tag = tag;
                if( self.onUnlockAchievementFailed )
                {
                    self.onUnlockAchievementFailed( error );
                }

                triggerEvent( 'unlockAchievementFailed', error );
                triggerEvent( 'unlockAchievementFailed-' + achievementId, error );

            }, "Game", "unlockAchievement", [ achievementId ] );
    },


    incrementAchievement: function( achievementId, incrementalStepOrCurrentPercent, tag )
    {
        var self = this;
        cordova.exec( function( result )
            {
                self.tag = tag;
                if( self.onIncrementAchievementSucceeded )
                {
                    self.onIncrementAchievementSucceeded( result );
                }

                triggerEvent( 'incrementAchievementSuccess', result );
                triggerEvent( 'incrementAchievementSuccess-' + achievementId, result );
            },
            function( error )
            {
                self.tag = tag;
                if( self.onIncrementAchievementFailed )
                {
                    self.onIncrementAchievementFailed( error );
                }

                triggerEvent( 'incrementAchievementFailed', result );
                triggerEvent( 'incrementAchievementFailed-' + achievementId, result );

            }, "Game", "incrementAchievement", [ achievementId, incrementalStepOrCurrentPercent ] );
    },

    showAchievements: function()
    {
        cordova.exec(
            function( result )
            {
                triggerEvent( 'showAchievementsSuccess', result );
            },
            function( error )
            {
                triggerEvent( 'showAchievementsFailed', error );
            }, "Game", "showAchievements", [] );
    },

    resetAchievements: function()
    {
        var self = this;
        cordova.exec( function( result )
            {
                if( self.onResetAchievementsSucceeded )
                {
                    self.onResetAchievementsSucceeded( result );
                }
                triggerEvent( 'resetAchievementsSuccess', result );
            },

            function( error )
            {
                if( self.onResetAchievementsFailed )
                {
                    self.onResetAchievementsFailed( error );
                }

                triggerEvent( 'resetAchievementsFailed', error );

            }, "Game", "resetAchievements", [] );
    },
    getPlayerImage: function()
    {
        var self = this;
        cordova.exec( function( result )
            {
                var playerImageUrl = result;
                if( self.onGetPlayerImageSucceeded )
                {
                    self.onGetPlayerImageSucceeded( playerImageUrl );
                }
                triggerEvent( 'getPlayerImageSuccess', result );
            },
            function( error )
            {
                if( self.onGetPlayerImageFailed )
                {
                    self.onGetPlayerImageFailed( error );
                }
                triggerEvent( 'getPlayerImageFailed', error );

            }, "Game", "getPlayerImage", [] );
    },
    onLoginSucceeded: null,
    onLoginFailed: null,
    onSubmitScoreSucceeded: null,
    onSubmitScoreFailed: null,
    onGetPlayerScoreSucceeded: null,
    onGetPlayerScoreFailed: null,
    onUnlockAchievementSucceeded: null,
    onUnlockAchievementFailed: null,
    onIncrementAchievementSucceeded: null,
    onIncrementAchievementFailed: null,
    onResetAchievementsSucceeded: null,
    onResetAchievementsFailed: null,
    onGetPlayerImageSucceeded: null,
    onGetPlayerImageFailed: null
}

module.exports = Game;
