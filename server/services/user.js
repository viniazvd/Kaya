const modelUser = require('./../models/user')
const ObjectId = require('mongoose').Types.ObjectId

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let service = {}

service.fetch = (params, cb) => {

  if(params._id) {
    params._id = new ObjectId(params._id)
  }

  modelUser.find(params, (err, users) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, users)
    }
  })
}

service.save = (data, cb) => {
  const user = new modelUser(data)
  user.save(user, (err, result) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, result)
    }
  })
}

service.update = (id, data, cb) => {
  id = new ObjectId(id)
  modelUser.update({_id: id},{'$set': data}, (err, results) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, results)
    }
  })
}

service.delete = (id, cb) => {
  modelUser.remove({_id: ObjectId(id)}, (err, results) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, results)
    }
  })
}

service.authenticate = (email, senha, cb) => {
  const secret = 'jwt.secret'

  modelUser.findOne({ email: email }, (err, results) => {
    if(err) cb(err);

    const  hash = bcrypt.hashSync(results.senha);
    if (results && bcrypt.compareSync(senha, hash)) {
      const token = jwt.sign({ sub: results._id }, secret)
      cb(null, token)
    } else {
      console.log('errowww')
    }
  })
}

module.exports = service

