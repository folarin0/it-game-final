namespace SpriteKind {
    export const laser = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player_1.vy == 0) {
        Player_1.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile`, function (sprite3, location2) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_1.setKind(SpriteKind.laser)
    enemy_1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Player_1, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite2, otherSprite) {
    Player_1.setVelocity(-100, 0)
    info.changeLifeBy(-1)
    sprites.destroy(enemy_1)
})
sprites.onOverlap(SpriteKind.laser, SpriteKind.Enemy, function (sprite4, otherSprite2) {
    sprites.destroy(otherSprite2)
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
    enemy_1 = sprites.createProjectileFromSprite(img`
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
        `, enemy_1, 100, 0)
    enemy_1.follow(Player_1, 110)
})
