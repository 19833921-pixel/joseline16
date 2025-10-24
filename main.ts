input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
function Nuevo_enemigo () {
    sprite = game.createSprite(2, randint(4, 10))
    for (let index = 0; index < 4; index++) {
        basic.pause(300)
        sprite.change(LedSpriteProperty.Y, 1)
    }
}
let Llamada_nuevo_enemigo = 0
let Comenzar_melodia = 0
let sprite: game.LedSprite = null
let Player: game.LedSprite = null
let Llamada_a_un_enemigo = 0
basic.showString("Hecho por Joseline")
Player = game.createSprite(2, 2)
game.setScore(0)
basic.forever(function () {
    if (sprite.isTouching(sprite)) {
        let Jump_down = 0
        Comenzar_melodia += Jump_down
        game.addScore(1)
        sprite.delete()
        Llamada_nuevo_enemigo = 0
    }
})
