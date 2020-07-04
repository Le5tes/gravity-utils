const GravityFunctions = require('@gravity-simulator/gravity-resolver').GravityFunctions;

function calculateCircularOrbit(body, centralBody, g = 1) {
    const distanceX = body.positionX - centralBody.positionX
    const distanceY = body.positionY - centralBody.positionY
    const distance = GravityFunctions.calculateHypoteneuse(distanceX, distanceY)

    const velocity = Math.sqrt(g * (body.mass + centralBody.mass) / distance)
    let velocityX = GravityFunctions.unconjugate(velocity, distanceX/distanceY)
    let velocityY = GravityFunctions.unconjugate(velocity, distanceY/distanceX)

    if (body.positionY < centralBody.positionY) {
        velocityX = -velocityX
    } 

    if (body.positionX > centralBody.positionX ) {
        velocityY = -velocityY
    }

    return {
        x: velocityX + centralBody.velocityX,
        y: velocityY + centralBody.velocityY
    }
}

module.exports = {
    calculateCircularOrbit: calculateCircularOrbit
}
