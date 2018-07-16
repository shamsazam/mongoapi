const express = require('express');
const Repo = require('../../repository/base.repo');

const crudController = (Model, expressRouter=null) => {
    const router = expressRouter || express.Router();
    const repo = Repo(Model);

    router.get('/', async (req, res) => {
        try {
            let list = await repo.list();
            return res.json(list);
        } catch (error) {
            res.status(500).send('error getting list of objects');
        }
    });

    router.get('/:id', async (req, res) => {
        try {
            let obj = await repo.get(req.params.id);
            return res.json(obj);
        } catch (error) {
            res.status(500).send('error getting object');
        }
    });

    router.post('/', async (req, res) => {
        try {
            let list = await repo.create();
            return res.json(list);
        } catch (error) {
            res.status(500).send('error getting list of objects');
        }
    });

    router.put('/', async (req, res) => {
        try {
            let list = await repo.update();
            return res.json(list);
        } catch (error) {
            res.status(500).send('error getting list of objects');
        }
    });

    router.delete('/', async (req, res) => {
        try {
            let list = await repo.delete();
            return res.json(list);
        } catch (error) {
            res.status(500).send('error getting list of objects');
        }
    });

    return router;
};

module.exports = crudController;