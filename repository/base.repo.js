
const list = async (Model) => {
    console.log(`getting list of ${Model} objects`);
    return await Model.find();
};
const get = async (Model, id) => {
    console.log('getting list of objects');
    return await Model.findById(id);
};
const create = async (Model, obj) => {
    console.log('getting list of objects');
    return await Model.find();
};
const update = async (Model, obj) => {
    console.log('getting list of objects');
    return await Model.update();
};
const remove = async (Model, id) => {
    console.log('getting list of objects');
    return await Model.find();
};

const repository = (Model) => { 
    let methods = {};
    methods.list = async () => list(Model);
    methods.get = async (id) => get(Model, id);
    methods.create = async (obj) => create(Model, obj);
    methods.update = async (obj) => update(Model, obj);
    methods.delete = async (id) => remove(Model, id);
    return methods;
};

module.exports = repository;