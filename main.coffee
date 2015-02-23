redis = require('redis').createClient()
redis.get 'greet',(e,d)->
  console.log e,d