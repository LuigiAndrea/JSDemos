describe("Animals - ObjectSetProperty", function () {

    let animals = require('./animal').Animal;
    let [animal,dog,akita] = [animals.animal,animals.dog,animals.akita];
    let actionsName = ['jump','run','sound'];

    it("dog jump", function () {
        let expectedResults = [undefined,'Jump'];
        let jumpAction = actionsName[0];

        expect(dog.jump).toEqual(expectedResults[0]);
        expect(jumpAction in dog).toBe(false);
        Object.setPrototypeOf(dog,animal);
        expect(jumpAction in dog).toBe(true);
        expect(dog.jump).toEqual(expectedResults[1]);

    });
  
    it("akita jump and run", function () {
        
        let [jumpAction,runAction,soundAction] = actionsName;

        expect(jumpAction in akita).toBe(false);
        expect(runAction in akita).toBe(false);
        expect(soundAction in akita).toBe(false);
        Object.setPrototypeOf(akita,dog); //dog has already the animal prototype
        expect(jumpAction in akita).toBe(true);
        expect(runAction in akita).toBe(true);
        expect(soundAction in akita).toBe(true);
        expect(akita.run()).toEqual("Running");
    });
  });
  