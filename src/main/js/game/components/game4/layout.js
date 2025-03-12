define({
    _BASE_GAME: {
        children: ["game4"]
    },
    /*
     * GAME 4
     */
    game4: {
        type: "rectangle",
        children: ["bgG4", "playerTilesG4", "gameLabelG4", "gameLabelG4Large", "legendG4"],
        fillAlpha: 0,
        width: 640,
        height: 1136,
        landscape: {
            x: 544,
            y: 124,
            scale: 0.35
        },
        landscapeSelected: {
            x: 179,
            y: -94,
            scale: 0.68
        },
        portrait: {
            x: 0,
            y: 0,
            scale: 1
        }
    },
        bgG4: {
            type: "sprite",
            anchor: 0,
            x: 22,
            y: 327,
            texture: "flamingoBase"
        },
        playerTilesG4: {
            type: "container",
            children: [
                "playerTile1G4",
                "playerTile2G4",
                "playerTile3G4",
                "playerTile4G4",
                "playerTile5G4",
                "playerTile6G4",
                "playerTile7G4",
                "playerTile8G4",
                "playerTile9G4",
                "playerTile10G4",
                "playerTile11G4",
                "playerTile12G4",
                "playerTile13G4",
                "playerTile14G4",
                "playerTile15G4",
                "playerTile16G4",
                "playerTile17G4",
                "playerTile18G4",
                "playerTile19G4",
                "playerTile20G4"
            ],
            x: 0,
            y: 0
        },
            playerTile1G4: {
                type: "container",
                x: 199,
                y: 551
            },
            playerTile2G4: {
                type: "container",
                x: 283,
                y: 537
            },
            playerTile3G4: {
                type: "container",
                x: 374,
                y: 549
            },
            playerTile4G4: {
                type: "container",
                x: 458,
                y: 547
            },
            playerTile5G4: {
                type: "container",
                x: 128,
                y: 597
            },
            playerTile6G4: {
                type: "container",
                x: 214,
                y: 623
            },
            playerTile7G4: {
                type: "container",
                x: 299,
                y: 608
            },
            playerTile8G4: {
                type: "container",
                x: 390,
                y: 618
            },
            playerTile9G4: {
                type: "container",
                x: 495,
                y: 618
            },
            playerTile10G4: {
                type: "container",
                x: 111,
                y: 669
            },
            playerTile11G4: {
                type: "container",
                x: 131,
                y: 740
            },
            playerTile12G4: {
                type: "container",
                x: 229,
                y: 749
            },
            playerTile13G4: {
                type: "container",
                x: 317,
                y: 749
            },
            playerTile14G4: {
                type: "container",
                x: 426,
                y: 725
            },
            playerTile15G4: {
                type: "container",
                x: 513,
                y: 698
            },
            playerTile16G4: {
                type: "container",
                x: 160,
                y: 798
            },
            playerTile17G4: {
                type: "container",
                x: 243,
                y: 821
            },
            playerTile18G4: {
                type: "container",
                x: 331,
                y: 819
            },
            playerTile19G4: {
                type: "container",
                x: 419,
                y: 807
            },
            playerTile20G4: {
                type: "container",
                x: 499,
                y: 771
            },
        gameLabelG4: {
            type: "text",
            string: "gameLabelG4",
            anchor: 0.5,
            x: 60,
            y: 530,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            style: "gameLabel"
        },
        gameLabelG4Large: {
            type: "text",
                string: "gameLabelG4",
                anchor: 0.5,
                x: 217,
                y: 401,
                scale: 1.16,
                landscape: {visible: true},
            landscapeSelected: {visible: false},
            portrait: {visible: false},
            style: "gameLabelLarge"
        },
        legendG4: {
            type: "sprite",
            children: [
                "legendQuantity0G4",
                "legendDrink0G4",
                "legendDrink1G4",
                "legendDrink2G4",
                "legendDrink3G4",
                "legendDrink4G4",
                "legendDrink5G4",
                "legendDrink6G4",
                "legendDrink7G4",
                "legendDrink8G4",
                "legendValue0G4",
                "legendQuantity1G4",
                "legendBeachBall0G4",
                "legendBeachBall1G4",
                "legendBeachBall2G4",
                "legendBeachBall3G4",
                "legendBeachBall4G4",
                "legendBeachBall5G4",
                "legendBeachBall6G4",
                "legendBeachBall7G4",
                "legendValue1G4",
                "legendQuantity2G4",
                "legendIceCream0G4",
                "legendIceCream1G4",
                "legendIceCream2G4",
                "legendIceCream3G4",
                "legendIceCream4G4",
                "legendIceCream5G4",
                "legendIceCream6G4",
                "legendValue2G4",
                "legendQuantity3G4",
                "legendFlower0G4",
                "legendFlower1G4",
                "legendFlower2G4",
                "legendFlower3G4",
                "legendFlower4G4",
                "legendFlower5G4",
                "legendValue3G4",
                "legendQuantity4G4",
                "legendSnorkel0G4",
                "legendSnorkel1G4",
                "legendSnorkel2G4",
                "legendSnorkel3G4",
                "legendSnorkel4G4",
                "legendValue4G4",
                "legendQuantity5G4",
                "legendSun0G4",
                "legendSun1G4",
                "legendSun2G4",
                "legendSun3G4",
                "legendValue5G4",
                "legendQuantity6G4",
                "legendShades0G4",
                "legendShades1G4",
                "legendShades2G4",
                "legendValue6G4"
            ],
            anchor: 0,
            x: 15,
            y: 240,
            texture: "keyBox",
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
        },
            legendQuantity0G4: {
                        type: "text",
                        string: "legendQuantity0G4",
                        anchor: 0.5,
                        x: 14,
                        y: 18,
                        style: "legendG4"
                    },
            legendDrink0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 45,
                y: 18,
                texture: "keysymDrink"
            },
            legendDrink1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 78,
                y: 18,
                texture: "keysymDrink"
            },
            legendDrink2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 111,
                y: 18,
                texture: "keysymDrink"
            },
            legendDrink3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 144,
                y: 18,
                texture: "keysymDrink"
            },
            legendDrink4G4: {
                type: "sprite",
                anchor: 0.5,
                x: 177,
                y: 18,
                texture: "keysymDrink"
            },
            legendDrink5G4: {
                type: "sprite",
                anchor: 0.5,
                x: 210,
                y: 18,
                texture: "keysymDrink"
            },
            legendDrink6G4: {
                type: "sprite",
                anchor: 0.5,
                x: 243,
                y: 18,
                texture: "keysymDrink"
            },
            legendDrink7G4: {
                type: "sprite",
                anchor: 0.5,
                x: 276,
                y: 18,
                texture: "keysymDrink"
            },
            legendDrink8G4: {
                type: "sprite",
                anchor: 0.5,
                x: 309,
                y: 18,
                texture: "keysymDrink"
            },
            legendValue0G4: {
                type: "text",
                string: "legendValue0G4",
                anchor: {x: 1, y: 0.5},
                x: 400,
                y: 18,
                style: "legendG4"
            },
            legendQuantity1G4: {
                type: "text",
                string: "legendQuantity1G4",
                anchor: 0.5,
                x: 14,
                y: 53,
                style: "legendG4"
            },
            legendBeachBall0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 45,
                y: 53,
                texture: "keysymBeachBall"
            },
            legendBeachBall1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 78,
                y: 53,
                texture: "keysymBeachBall"
            },
            legendBeachBall2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 111,
                y: 53,
                texture: "keysymBeachBall"
            },
            legendBeachBall3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 140,
                y: 53,
                texture: "keysymBeachBall"
            },
            legendBeachBall4G4: {
                type: "sprite",
                anchor: 0.5,
                x: 169,
                y: 53,
                texture: "keysymBeachBall"
            },
            legendBeachBall5G4: {
                type: "sprite",
                anchor: 0.5,
                x: 200,
                y: 53,
                texture: "keysymBeachBall"
            },
            legendBeachBall6G4: {
                type: "sprite",
                anchor: 0.5,
                x: 231,
                y: 53,
                texture: "keysymBeachBall"
            },
            legendBeachBall7G4: {
                type: "sprite",
                anchor: 0.5,
                x: 262,
                y: 53,
                texture: "keysymBeachBall"
            },
            legendValue1G4: {
                type: "text",
                string: "legendValue1G4",
                anchor: {x: 1, y: 0.5},
                x: 400,
                y: 53,
                style: "legendG4"
            },
            legendQuantity2G4: {
                type: "text",
                string: "legendQuantity2G4",
                anchor: 0.5,
                x: 14,
                y: 88,
                style: "legendG4"
            },
            legendIceCream0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 45,
                y: 88,
                texture: "keysymIceCream"
            },
            legendIceCream1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 78,
                y: 88,
                texture: "keysymIceCream"
            },
            legendIceCream2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 111,
                y: 88,
                texture: "keysymIceCream"
            },
            legendIceCream3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 140,
                y: 88,
                texture: "keysymIceCream"
            },
            legendIceCream4G4: {
                type: "sprite",
                anchor: 0.5,
                x: 169,
                y: 88,
                texture: "keysymIceCream"
            },
            legendIceCream5G4: {
                type: "sprite",
                anchor: 0.5,
                x: 200,
                y: 88,
                texture: "keysymIceCream"
            },
            legendIceCream6G4: {
                type: "sprite",
                anchor: 0.5,
                x: 231,
                y: 88,
                texture: "keysymIceCream"
            },
            legendValue2G4: {
                type: "text",
                string: "legendValue2G4",
                anchor: {x: 1, y: 0.5},
                x: 400,
                y: 88,
                style: "legendG4"
            },
            legendQuantity3G4: {
                type: "text",
                string: "legendQuantity3G4",
                anchor: 0.5,
                x: 14,
                y: 123,
                style: "legendG4"
            },
            legendFlower0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 45,
                y: 123,
                texture: "keysymFlower"
            },
            legendFlower1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 78,
                y: 123,
                texture: "keysymFlower"
            },
            legendFlower2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 111,
                y: 123,
                texture: "keysymFlower"
            },
            legendFlower3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 140,
                y: 123,
                texture: "keysymFlower"
            },
            legendFlower4G4: {
                type: "sprite",
                anchor: 0.5,
                x: 169,
                y: 123,
                texture: "keysymFlower"
            },
            legendFlower5G4: {
                type: "sprite",
                anchor: 0.5,
                x: 200,
                y: 123,
                texture: "keysymFlower"
            },
            legendValue3G4: {
                type: "text",
                string: "legendValue3G4",
                anchor: {x: 1, y: 0.5},
                x: 400,
                y: 123,
                style: "legendG4"
            },
            legendQuantity4G4: {
                type: "text",
                string: "legendQuantity4G4",
                anchor: 0.5,
                x: 14,
                y: 158,
                style: "legendG4"
            },
            legendSnorkel0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 45,
                y: 158,
                texture: "keysymSnorkel"
            },
            legendSnorkel1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 78,
                y: 158,
                texture: "keysymSnorkel"
            },
            legendSnorkel2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 111,
                y: 158,
                texture: "keysymSnorkel"
            },
            legendSnorkel3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 140,
                y: 158,
                texture: "keysymSnorkel"
            },
            legendSnorkel4G4: {
                type: "sprite",
                anchor: 0.5,
                x: 169,
                y: 158,
                texture: "keysymSnorkel"
            },
            legendValue4G4: {
                type: "text",
                string: "legendValue4G4",
                anchor: {x: 1, y: 0.5},
                x: 400,
                y: 158,
                style: "legendG4"
            },
            legendQuantity5G4: {
                type: "text",
                string: "legendQuantity5G4",
                anchor: 0.5,
                x: 14,
                y: 193,
                style: "legendG4"
            },
            legendSun0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 45,
                y: 193,
                texture: "keysymSun"
            },
            legendSun1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 78,
                y: 193,
                texture: "keysymSun"
            },
            legendSun2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 111,
                y: 193,
                texture: "keysymSun"
            },
            legendSun3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 140,
                y: 193,
                texture: "keysymSun"
            },
            legendValue5G4: {
                type: "text",
                string: "legendValue5G4",
                anchor: {x: 1, y: 0.5},
                x: 400,
                y: 193,
                style: "legendG4"
            },
            legendQuantity6G4: {
                type: "text",
                string: "legendQuantity6G4",
                anchor: 0.5,
                x: 14,
                y: 228,
                style: "legendG4"
            },
            legendShades0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 45,
                y: 228,
                texture: "keysymSunglasses"
            },
            legendShades1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 78,
                y: 228,
                texture: "keysymSunglasses"
            },
            legendShades2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 111,
                y: 228,
                texture: "keysymSunglasses"
            },
            legendValue6G4: {
                type: "text",
                string: "legendValue6G4",
                anchor: {x: 1, y: 0.5},
                x: 400,
                y: 228,
                style: "legendG4"
            }
});