import { TriggerInterface } from '../Interface';

const triggers: TriggerInterface[] = [];

export const registerTrigger = (trigger: TriggerInterface) => {
  if (triggers.find((current) => current.name === trigger.name)) {
    return;
  } else {
    triggers.push(trigger);
  }
};

export const getRegisteredTriggers = () => {
  return triggers;
};
