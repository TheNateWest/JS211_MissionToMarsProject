'use strict';
const assert = require('assert');

// This is an object that has types of jobs and the values each provide.
const jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Build a class for CrewMember
  // should have a name, a job, a specialSkill and ship upon instantiation
  // can enter a ship

class CrewMember {
  constructor(name, job, specialSkill, ship){
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = ship;
  }

  enterShip = (vessel) => {
    this.ship = vessel

    vessel.crew.push(this)
  }

}
// Build a class for Ship.
  // should have a name, a type, an ability and an empty crew upon instantiation
  // can return a mission statement correctly

  // assert.equal(mav.crew.lenth, 0);
  // should a ship have more than one crew member?
  // what data type will let me hold multiple crew members?

class Ship {
  constructor(name, type, ability, ) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];

  }
  
missionStatement = () => {
// missionStatement = ability
// if i don't have crew, then I can't perform a mission yet.
if (this.crew.length === 0) {
  let noMission = "Can't perform a mission yet."
  return noMission;
} else {
  let mission = this.ability;
  return mission;
}

}

}

let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');

// console.log(mav.name + " , " + mav.type + " , " + mav.ability + " , " + mav.crew)
console.log(mav);

const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');

let rick = crewMember1;
console.log(rick)

// crewMember1.enterShip(mav);

      console.log(crewMember1)



// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      // this creates a CrewMember and passes the following arguments into its constructor:
      // 'Rick Martinez', 'pilot', 'chemistry'
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      // this creates a new Ship. Can you build a class that can be called so that this Ship can be built?
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit'); //Mars Ascent Vehicle, 'MAV', 'Ascend into low orbit, [] <-- no crew
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){

      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit'); //Mars Ascent Vehicle, 'MAV', 'Ascend into low orbit, [] <-- no crew
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry'); //'Rick Martinez', 'pilot', 'chemistry', null or undefined <-- no ship

      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');

      // at this point, I have 2 ships and 2 crewMembers, but I haven't added any crew to the ships.

      assert.equal(mav.missionStatement(), "Can't perform a mission yet."); // if i don't have crew, then I can't perform a mission yet.
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
