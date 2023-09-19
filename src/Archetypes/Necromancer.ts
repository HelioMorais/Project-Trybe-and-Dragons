import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static count = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer.count += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}