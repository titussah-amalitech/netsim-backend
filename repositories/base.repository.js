export default class BaseRepository {
   constructor(model) {
      this.model = model;
   }

   async find(filter = {}) { return this.model.find(filter); }
   async findById(id) { return this.model.findById(id); }
   async create(entity) { return this.model.create(entity); }
   async update(id, payload) { return this.model.findByIdAndUpdate(id, payload, { new: true }); }
   async delete(id) { return this.model.findByIdAndDelete(id); }
}