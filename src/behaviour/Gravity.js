import Force from './Force';
import { getEasingByName } from '../ease';

/**
 * Behaviour that forces particles down the y axis.
 *
 */
export default class Gravity extends Force {
  /**
   * Constructs a Gravity behaviour instance.
   *
   * @param {number} gravity - the force to pull the particle down the y axis
   * @param {number} life - the life of the particle
   * @param {string} easing - the easing equation to use
   * @return void
   */
  constructor(gravity, life, easing) {
    super(0, -gravity, 0, life, easing);
  }

  static fromJSON(json) {
    const { gravity, life, easing } = json;

    return new Gravity(gravity, life, getEasingByName(easing));
  }
}
