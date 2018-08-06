const express = require('express');
const Repo = require('../../repository/base.repo');
const wrap = require('../../utils/asyncWrapper');

const crudRouter = (Model, expressRouter=null) => {
    const router = expressRouter || express.Router();
    const repo = Repo(Model);

    router.get('/', wrap(async (req, res) => {
        let list = await repo.list();
        res.json(list);
    }));

    router.get('/:id', wrap(async (req, res) => {
        let obj = await repo.get(req.params.id);
        res.json(obj);

    }));

    router.post('/', wrap(async (req, res) => {
        let list = await repo.create();
        return res.json(list);
    }));

    router.put('/', wrap(async (req, res) => {
        const { id, ...rest } = req.body;
        let list = await repo.update(id, rest);
        return res.json(list);
    }));

    router.delete('/:id', wrap(async (req, res) => {
        let list = await repo.delete(req.params.id);
        return res.json(list);
    }));

    return router;
};

module.exports = crudRouter;