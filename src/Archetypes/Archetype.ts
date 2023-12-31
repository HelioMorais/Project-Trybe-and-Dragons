import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special: number;
  private _name: string;
  private _cost: number;

  constructor(n: string) {
    this._name = n;
    this._special = 0;
    this._cost = 0;
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}