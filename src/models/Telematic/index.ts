import { model } from 'mongoose';
import {
  TelematicDocument,
  TelematicSchema,
} from '../../schemas/TelematicSchema';

export const Telematic = model<TelematicDocument>('Telematic', TelematicSchema);
