const { Cofffee } = require('../models')

module.exports = {

    async create(req, res) {
        try {
            const Cofffee = await Cofffee.create(req.body)
            res.send(Cofffee.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Cofffee incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Cofffee.update(req.body, {
                where: {
                    id: req.params.CofffeeId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Cofffee incorrect'
            })
        }

    },

    async remove(req, res) {
        try {
            const Cofffee = await Cofffee.findOne({
                where: {
                    id: req.params.CofffeeId
                }
            })
            if (!Cofffee) {
                return res.status(403).send({
                    error: 'The Cofffee information was incorrect'
                })
            }
            await Cofffee.destroy()
            res.send(Cofffee)
        } catch (err) {
            res.status(500).send({
                error: 'The Cofffee information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const Cofffee = await Cofffee.findByPk(req.params.CofffeeId)
            res.send(Cofffee)
        } catch (err) {
            res.status(500).send({
                error: 'The Cofffee information was incorrect'
            })
        }
    },

    async index(req, res) {
        try {
            const Cofffees = await Cofffee.findAll()
            res.send(Cofffees)
        } catch (err) {
            res.status(500).send({
                error: 'The Cofffees information was incorrect'
            })
        }
    }

}