import { Schema, model } from 'mongoose';
import { decorateSchema } from './';
describe('decorateSchema', function () {
  it('it should decorate a schema and hide fields specified in the hideFields array when models are serialized to json', function () {
    const testSchema = decorateSchema(
      new Schema(
        {
          password: { type: String },
          name: { type: String },
        },

        { timestamps: true, minimize: false }
      ),

      {
        hideFields: ['password'],
      }
    );

    const testModel = model<{ name: string; password: string }>(
      'User',
      testSchema
    );

    const testModelInstance = new testModel({
      name: 'Harrison',
      password: '123455',
    });

    const serializedData = JSON.parse(JSON.stringify(testModelInstance));

    expect(serializedData).toHaveProperty('name');
    expect(serializedData).not.toHaveProperty('password');
  });
});
