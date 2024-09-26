
    module.exports = function (app) {
        const modelName = 'officer_in_charge';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            officerName: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
designation: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
telephoneNumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
ic: { type: String, required: false, unique: false, lowercase: false, uppercase: false, maxLength: 150, index: true, trim: true },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };