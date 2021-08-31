import { TelematicDocument } from '../../schemas';

export interface TriggerInterface {
  /**
   * this is the trigger name;
   */
  name: string;

  /**
   * when the resolved promise is true, it means that the trigger executed.
   */
  trigger(data: TelematicDocument): Promise<boolean>;
}
