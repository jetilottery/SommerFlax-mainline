define(["com/pixijs/pixi", "com/pixijs/pixi-particles", "com/pixijs/pixi-filters"], function(PIXI) {
    return {
        player0G1: {
            "alpha": {
                "start": 0,
                "end": 1
            },
            "scale": {
                "start": 1,
                "end": 0.25,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#FFFFFF",
                "end": "#FFFFFF"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "ring",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 30,
                "minR": 20
            },
            "autoUpdate": false
        },
        player1G1: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#8F52A1",
                "end": "#8F52A1"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "ring",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 30,
                "minR": 20
            },
            "autoUpdate": false
        },
        lucky0G1: {
            "alpha": {
                "start": 0,
                "end": 1
            },
            "scale": {
                "start": 1,
                "end": 0.25,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#FFFFFF",
                "end": "#FFFFFF"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "ring",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 30,
                "minR": 20
            },
            "autoUpdate": false
        },
        lucky1G1: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#8F52A1",
                "end": "#8F52A1"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "ring",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 30,
                "minR": 20
            },
            "autoUpdate": false
        },
        player0G2: {
            "alpha": {
                "start": 0,
                "end": 1
            },
            "scale": {
                "start": 1,
                "end": 0.25,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#FFFFFF",
                "end": "#FFFFFF"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0002,
            "emitterLifetime": 0.1,
            "maxParticles": 2000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player1G2: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#8F52A1",
                "end": "#8F52A1"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player0G3: {
            "alpha": {
                "start": 0,
                "end": 1
            },
            "scale": {
                "start": 1,
                "end": 0.25,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#FFFFFF",
                "end": "#FFFFFF"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(-19.96,1.79),
                    new PIXI.Point(-14.37,-8.64),
                    new PIXI.Point(-8.58,-16.46),
                    new PIXI.Point(-5.04,-22.98),
                    new PIXI.Point(-2.05,-29.69),
                    new PIXI.Point(-1.49,-34.16),
                    new PIXI.Point(0.93,-34.72),
                    new PIXI.Point(2.24,-29.69),
                    new PIXI.Point(5.60,-22.42),
                    new PIXI.Point(9.33,-16.09),
                    new PIXI.Point(14.37,-7.89),
                    new PIXI.Point(19.40,2.35),
                    new PIXI.Point(21.64,11.29),
                    new PIXI.Point(19.59,21.54),
                    new PIXI.Point(12.87,28.80),
                    new PIXI.Point(4.66,34.02),
                    new PIXI.Point(-5.41,33.65),
                    new PIXI.Point(-15.49,28.25),
                    new PIXI.Point(-20.34,19.30),
                    new PIXI.Point(-21.08, 8.31)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player1G3: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#8F52A1",
                "end": "#8F52A1"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(-19.96,1.79),
                    new PIXI.Point(-14.37,-8.64),
                    new PIXI.Point(-8.58,-16.46),
                    new PIXI.Point(-5.04,-22.98),
                    new PIXI.Point(-2.05,-29.69),
                    new PIXI.Point(-1.49,-34.16),
                    new PIXI.Point(0.93,-34.72),
                    new PIXI.Point(2.24,-29.69),
                    new PIXI.Point(5.60,-22.42),
                    new PIXI.Point(9.33,-16.09),
                    new PIXI.Point(14.37,-7.89),
                    new PIXI.Point(19.40,2.35),
                    new PIXI.Point(21.64,11.29),
                    new PIXI.Point(19.59,21.54),
                    new PIXI.Point(12.87,28.80),
                    new PIXI.Point(4.66,34.02),
                    new PIXI.Point(-5.41,33.65),
                    new PIXI.Point(-15.49,28.25),
                    new PIXI.Point(-20.34,19.30),
                    new PIXI.Point(-21.08, 8.31)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player0G4: {
            "alpha": {
                "start": 0,
                "end": 1
            },
            "scale": {
                "start": 1,
                "end": 0.25,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#FFFFFF",
                "end": "#FFFFFF"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(-26.23,0.98),
                    new PIXI.Point(-0.00,-22.23),
                    new PIXI.Point(26.72,0.73),
                    new PIXI.Point(0.25,23.94)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player1G4: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#8F52A1",
                "end": "#8F52A1"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(0,-17),
                    new PIXI.Point(6,-15),
                    new PIXI.Point(13,-1),
                    new PIXI.Point(13,10),
                    new PIXI.Point(10,15),
                    new PIXI.Point(3,18),
                    new PIXI.Point(-3,18),
                    new PIXI.Point(-10,15),
                    new PIXI.Point(-13,10),
                    new PIXI.Point(-13,-1),
                    new PIXI.Point(-6,-15)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        filterAll: new PIXI.filters.OutlineFilter(1, 0x0000FF)
    };
});
