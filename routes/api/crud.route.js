const express = require('express');
const Repo = require('../../repository/base.repo');

const crudRouter = (Model, expressRouter=null) => {
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
            const { id, ...rest } = req.body;
            let list = await repo.update(id, rest);
            return res.json(list);
        } catch (error) {
            res.status(500).send('error getting list of objects');
        }
    });

    router.delete('/:id', async (req, res) => {
        try {
            let list = await repo.delete(req.params.id);
            return res.json(list);
        } catch (error) {
            res.status(500).send('error deleting objects');
        }
    });

    return router;
};

module.exports = crudRouter;