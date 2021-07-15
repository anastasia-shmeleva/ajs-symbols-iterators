/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  Bowman, Swordsman, Magician, Deamon, Undead, Zombie, Team,
} from './players';

const bowman = new Bowman('bowman', 'bowman');
const swordsman = new Swordsman('swordsman', 'Swordsman');
const magician = new Magician('magician', 'Magician');
const deamon = new Deamon('deamon', 'Deamon');
const undead = new Undead('undead', 'Undead');
const zombie = new Zombie('zombie', 'Zombie');
window.team = new Team([bowman, swordsman, magician, deamon, undead, zombie]);

console.log(window.team);
