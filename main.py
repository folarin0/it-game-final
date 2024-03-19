@namespace
class SpriteKind:
    enemssss = SpriteKind.create()

def on_up_pressed():
    if Player_1.vy == 0:
        Player_1.vy = -150
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    global enemy_1
    enemy_1 = sprites.create_projectile_from_sprite(img("""
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
        """),
        Player_1,
        50,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    sprites.destroy(sprite)
    sprites.destroy(enemy_1)
sprites.on_overlap(SpriteKind.enemssss, SpriteKind.player, on_on_overlap)

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
    global enemy_1, Player_1
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
    enemy_1.set_kind(SpriteKind.enemssss)
    Player_1 = sprites.create_projectile_from_sprite(img("""
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
        -500,
        0)
game.on_update_interval(1000, on_update_interval)
