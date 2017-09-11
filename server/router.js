var Auth = require('./controllers/auth');
var BucketList = require('./controllers/bucketlistcontroller');

var passportService = require('./services/passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session:false});
var requireSignin = passport.authenticate('local', {session:false});

module.exports = function(app){
    app.get('/items', requireAuth, BucketList.fetchBucketLists);
    app.post('/signin', requireSignin, Auth.signin);
    app.post('/signup', Auth.signup);
    app.post('/newitem', requireAuth, BucketList.addBucketList);
    app.get('/items/:id', requireAuth, BucketList.fetchBucketList);
    app.put('/items/:id', requireAuth, BucketList.updateBucketList);
    app.delete('/items/:id', requireAuth, BucketList.deleteBucketList);
} 