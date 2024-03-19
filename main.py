@namespace
class SpriteKind:
    laser = SpriteKind.create()

def on_up_pressed():
    if Player_1.vy == 0:
        Player_1.vy = -150
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile(sprite3, location2):
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.enemy,
    assets.tile("""
        myTile
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite, location):
    game.game_over(False)
    game.set_game_over_effect(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile2)

def on_a_pressed():
    global enemy_1
    Player_1.set_kind(SpriteKind.laser)
    enemy_1 = sprites.create_projectile_from_sprite(img("""
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
        """),
        Player_1,
        100,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite2, otherSprite):
    Player_1.set_velocity(-100, 0)
    info.change_life_by(-1)
    sprites.destroy(enemy_1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.player, on_on_overlap)

def on_on_overlap2(sprite4, otherSprite2):
    sprites.destroy(otherSprite2)
sprites.on_overlap(SpriteKind.laser, SpriteKind.enemy, on_on_overlap2)

enemy_1: Sprite = None
Player_1: Sprite = None
scene.set_background_color(14)
Player_1 = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(Player_1, 100, 0)
Player_1.ay = 500
tiles.set_current_tilemap(tilemap("""
    level1
"""))
scene.camera_follow_sprite(Player_1)
info.set_life(10)

def on_update_interval():
    global enemy_1
    enemy_1 = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    enemy_1.set_position(134, 70)
    enemy_1 = sprites.create_projectile_from_sprite(img("""
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
        """),
        enemy_1,
        100,
        0)
    enemy_1.follow(Player_1, 110)
game.on_update_interval(1000, on_update_interval)
