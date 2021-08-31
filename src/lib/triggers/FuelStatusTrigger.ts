import { TriggerInterface } from '../../Interface';
import { TelematicDocument } from '../../schemas';

export class FuelStatusTrigger implements TriggerInterface {
  name: 'FuelStatus';

  trigger(doc: TelematicDocument) {
    return Promise.resolve(doc.FuelRemaining.Percent < 5);
  }
}
