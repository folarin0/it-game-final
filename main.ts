namespace SpriteKind {
    export const enemssss = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player_1.vy == 0) {
        Player_1.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemssss, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    Player_1.setPosition(16, 56)
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    enemy_1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Player_1, 50, 0)
})
let enemy_1: Sprite = null
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
scene.cameraFollowSprite(Player_1)
info.setLife(10)
game.onUpdateInterval(1000, function () {
    enemy_1 = sprites.create(img`
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . 7 2 . . . . . . 2 7 . . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . . 7 . . . 7 . . . . 7 . . . 
        . . . 7 7 . 7 . 7 . . 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 2 2 . . . . 2 2 . . . . 
        . . . . 2 . . . . . . 2 . . . . 
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        2 . . . 2 . . . . . . 2 . . . 2 
        2 . . . 2 . . . . . . 2 . . . 2 
        7 2 . . 2 . . . . . . 2 . . 2 7 
        2 7 . . 2 . . . . . . 2 . . 7 2 
        . . . . 2 . . . . . . 2 . . . . 
        . . . 7 2 . . . . . . 2 7 . . . 
        . . . 2 7 . . . . . . 7 2 . . . 
        `, SpriteKind.Enemy)
    enemy_1.setPosition(134, 70)
    Player_1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, enemy_1, 50, 50)
    enemy_1.follow(Player_1, 110)
})
