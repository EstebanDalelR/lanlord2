var express = require('express');
var router = express.Router();
var mongodb =require('mongodb');

var url ="mongodb://165.227.187.208:4536/tenants";

function getTenants(callback){
  mongodb.connect(url, (err,db) => {
    if (err) throw err;

    var tenants =  db.collection("tenants");
    tenants.find({}).toArray((err2, tenants)=>{
      if (err2) throw err2;

      callback(tenants);

    });
  });
}

/* GET tenants */
router.get('/tenants', function(req, res) {
  getTenants((tenants) => {
    res.json(tenants);
  });
});

module.exports = router;
