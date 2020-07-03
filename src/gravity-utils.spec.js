const calculateCircularOrbit = require('./gravity-utils').calculateCircularOrbit;

describe('calculateCircularOrbit', () => {
    it('should return the x and y velocities for a body that will put it on a circular orbit around the central body', () => {
        const body = { positionX:  0, positionY: 100, velocityX: 0, velocityY: 0, mass: 0 };
        const centralBody = { positionX:  0, positionY: 0, velocityX: 0, velocityY: 0, mass: 400 };

        const xy = calculateCircularOrbit(body, centralBody);

        expect(xy).toEqual({
            x: 2, // squareroot((G*m)/r) 
            y: 0
        });
    });

    it('should include the velocity of the central body', () => {
        const body = { positionX:  0, positionY: 100, velocityX: 0, velocityY: 0, mass: 0 };
        const centralBody = { positionX:  0, positionY: 0, velocityX: 50, velocityY: 50, mass: 400 };

        const xy = calculateCircularOrbit(body, centralBody);

        expect(xy).toEqual({
            x: 52, // squareroot((G*m)/r) + parent body x value
            y: 50 // parent body y value
        });
    });
});
