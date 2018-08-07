
const repository = (Model) => { 
    let methods = {};
    methods.list = async () => await Model.find();
    methods.get = async (id) => await Model.findById(id);
    methods.create = async (obj) => await Model.create(obj);
    methods.update = async (id, obj) => await Model.findByIdAndUpdate(id, { $set: obj});
    methods.delete = async (id) =>  await Model.findByIdAndDelete(id);
    return methods;
};

module.exports = repository;