def on_button_pressed_a():
    Player.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Player.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def Nuevo_enemigo():
    global sprite
    sprite = game.create_sprite(2, randint(4, 10))
    for index in range(4):
        basic.pause(300)
        sprite.change(LedSpriteProperty.Y, 1)
sprite: game.LedSprite = None
Player: game.LedSprite = None
basic.show_string("Hecho por Joseline")
Player = game.create_sprite(2, 2)
game.set_score(0)
Llamada_a_un_enemigo = 0

def on_forever():
    if sprite.is_touching(sprite):
        pass
basic.forever(on_forever)
