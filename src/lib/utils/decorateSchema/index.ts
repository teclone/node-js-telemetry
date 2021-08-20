import { Schema, Model } from 'mongoose';
import { ObjectOf } from '../../../typings';

export interface DecorateSchemaOptions {
  hideFields?: string[];
}

/**
 * the decorate schema method adds relevant static methods
 * and instant methods to mongoose schema
 *
 * it also overrides the toJSON method so that it masks desirable
 * fields from getting sent out to the api during json serialization
 *
 * @param schema
 * @param options
 * @returns
 */
export const decorateSchema = (
  schema: Schema,
  options?: DecorateSchemaOptions
) => {
  const hiddenFields = (options?.hideFields || []).reduce((result, key) => {
    result[key] = true;
    return result;
  }, {} as ObjectOf<boolean>);

  const passValue = (value: any) => {
    if (Array.isArray(value)) {
      return value.map((current) => passValue(current));
    } else if (value instanceof Model) {
      return value.toJSON();
    } else {
      return value;
    }
  };

  schema.method('toJSON', function () {
    const object = this.toObject();

    const that = this;
    return Object.keys(object).reduce(
      (acc, key) => {
        if (!key.startsWith('_') && typeof hiddenFields[key] === 'undefined') {
          acc[key] = passValue(that[key]);
        }
        return acc;
      },

      // _id is changed to normal id
      { id: object._id }
    );
  });

  return schema;
};
