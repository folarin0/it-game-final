controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player_1.vy == 0) {
        Player_1.vy = -150
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_1.vx = 50
    Player_1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . . f f . . . . f f . . . . . . 
        . . f . . . f . . f . . . . . . 
        . . f . . f . f . f . . . . . . 
        . . f f f f f f f f . . . . . . 
        . . . f f . . f . . . . . . . . 
        f f f f . . . . f f . . . . . . 
        f . f f . . f f f f . . . . . . 
        f f f . . . f . . f . . . . . . 
        f f f . . . f . . f f . . . . . 
        . f f . . f f f . . f . . . . . 
        . f . . . f f f . . f f . . . . 
        f f . . . . . . . . . f f . . . 
        f f . . . . . . . . . f f . . . 
        `)
})
let Player_1: Sprite = null
scene.setBackgroundColor(14)
Player_1 = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . . . f f . . . . . . f f . . . 
    . . . f . . . . f . . . f . . . 
    . . . f . . . f . f . . f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . f . . . f . . . . . 
    . f f f f f f . . . f f f f f . 
    . f . . . . f . . . f . . . f . 
    . f . . . . f . . . f . . . f . 
    f f f . . . f . . . f . . f f f 
    f f f . . . f . . . f . . f f f 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . f f . . . f f . . . . 
    . . . . . f f . . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Player_1, 100, 0)
Player_1.ay = 500
tiles.setCurrentTilemap(tilemap`level1`)
game.onUpdate(function () {
    Player_1.setImage(img`
        . . . f f f f f f f f f f . . . 
        . . . f f . . . . . . f f . . . 
        . . . f . . . . f . . . f . . . 
        . . . f . . . f . f . . f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . f . . . f . . . . . 
        . f f f f f f . . . f f f f f . 
        . f . . . . f . . . f . . . f . 
        . f . . . . f . . . f . . . f . 
        f f f . . . f . . . f . . f f f 
        f f f . . . f . . . f . . f f f 
        . . . . . . f . . . f . . . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . . f f . . . f f . . . . 
        `)
    controller.moveSprite(Player_1, 100, 0)
    if (Player_1.ax < 0) {
    	
    }
})
