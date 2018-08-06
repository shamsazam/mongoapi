
const repository = (Model) => { 
    let methods = {};
    methods.list = async () => await Model.find();
    methods.get = async (id) => await Model.findById(id);
    methods.create = async (obj) => await Model.create(obj);
    methods.update = async (obj) => await Model.update(obj.id, obj);
    methods.delete = async (id) =>  await Model.remove(id);
    return methods;
};

module.exports = repository;