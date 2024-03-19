namespace SpriteKind {
    export const laser = SpriteKind.create()
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    if (Player_1.vy == 0) {
        Player_1.vy = -150
    }
    
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`
        myTile
    `, function on_overlap_tile(sprite3: Sprite, location2: tiles.Location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile
    `, function on_overlap_tile2(sprite: Sprite, location: tiles.Location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function on_on_overlap(sprite2: Sprite, otherSprite: Sprite) {
    Player_1.setVelocity(-100, 0)
    info.changeLifeBy(-1)
    sprites.destroy(enemy_1)
})
sprites.onOverlap(SpriteKind.laser, SpriteKind.Enemy, function on_on_overlap2(sprite4: Sprite, otherSprite2: Sprite) {
    sprites.destroy(otherSprite2)
})
let enemy_1 : Sprite = null
let Player_1 : Sprite = null
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
tiles.setCurrentTilemap(tilemap`
    level1
`)
scene.cameraFollowSprite(Player_1)
info.setLife(10)
game.onUpdateInterval(1000, function on_update_interval() {
    
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
