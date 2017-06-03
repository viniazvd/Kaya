  const service = require('./../services/user')

  let controller = {}

  controller.list = (req, res) => {
    service.fetch(req.query, (err, user) => {
      if (err) {
        res.status(500).send()
      } else {
        res.json(user)
      }
    })
  }

  controller.getUser = (req, res) => {
    const handleResponse = (err, user) => {
      if (err) {
        res.status(500).send()
      } else {
        res.json(user[0])
      }
    }
    service.fetch({_id: req.params.id}, handleResponse)
  }

  controller.save = (req, res) => {
    let user = req.body
    service.save(user, (err, result) => {
      if (err) {
        res.status(500).send()
      } else {
        res.json(result)
      }
    })
  }

  controller.delete = (req, res) => {
    service.delete(req.params.id, (err, result) => {
      if (err) {
        res.status(500).send()
      } else {
        res.json(result)
      }
    })
  }

  controller.update = (req, res) => {
    service.update(req.params.id, req.body, (err, result) => {
      if (err) {
        res.status(500).send()
      } else {
        res.json(result)
      }
    })
  }

  controller.authenticate = (req, res) => {
    service.authenticate(req.body.email, req.body.senha, (err, result) => {
      if (err) {
        res.status(500).send()
      } else {
        res.json(result)
      }
    })
  }

module.exports = controller


