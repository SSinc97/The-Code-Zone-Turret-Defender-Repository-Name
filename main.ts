namespace SpriteKind {
    export const Turret = SpriteKind.create()
    export const click_collider = SpriteKind.create()
}
function on_start () {
    info.setLife(5)
    info.setScore(200)
    tiles.setCurrentTilemap(tilemap`level 1`)
    scene.centerCameraAt(128, 240)
    browserEvents.createColliderOnClick(browserEvents.MouseLeft, true, SpriteKind.click_collider)
    scene.scrollTilemapWithMouse(3, 10)
    enemy_count_text.setFlag(SpriteFlag.RelativeToCamera, true)
    enemy_count_text.top = 0
    enemy_count_text.setOutline(1, 15)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprites.changeDataNumberBy(sprite, "health", -1)
    check_enemy_health(sprite)
})
function check_enemy_health (enemy: Sprite) {
    if (sprites.readDataNumber(enemy, "health") < 1) {
        enemy.destroy()
        info.changeScoreBy(50)
    }
}
scene.onOverlapTile(SpriteKind.click_collider, myTiles.tile6, function (sprite, location) {
    place_defence(sprite, location.column, location.row)
})
function increase_difficulty () {
    enemy_health += 1
    enemy_speed = enemy_speed * 1.1
}
function spawn_enemy () {
    enemy_sprite = tilesAdvanced.createPathfinderSprite(assets.image`enemy`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(enemy_sprite, myTiles.tile1)
    end = tiles.getTilesByType(myTiles.tile5)[0]
    path = scene.aStar(enemy_sprite.tilemapLocation(), end)
    scene.followPath(enemy_sprite, path, enemy_speed)
    sprites.setDataNumber(enemy_sprite, "health", enemy_health)
}
function place_defence (click_collider: Sprite, col: number, row: number) {
    if (info.score() < 100) {
        return
    }
    info.changeScoreBy(-100)
    location = tiles.getTileLocation(col, row)
    click_collider.destroy()
    turret = sprites.create(assets.image`turret`, SpriteKind.Turret)
    tiles.placeOnTile(turret, location)
    tiles.setTileAt(location, myTiles.tile8)
}
function fire_at_enemy (turret: Sprite, kind: number) {
    for (let value of spriteutils.getSpritesWithin(SpriteKind.Enemy, 35, turret)) {
        angle = spriteutils.angleFrom(turret, value)
        pip = sprites.create(assets.image`pip`, kind)
        pip.setPosition(turret.x, turret.y)
        pip.setFlag(SpriteFlag.GhostThroughWalls, true)
        pip.setFlag(SpriteFlag.AutoDestroy, false)
        pip.lifespan = 1000
        spriteutils.setVelocityAtAngle(pip, angle, enemy_speed * 5)
    }
}
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile5, function (sprite, location) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
let wave_text: TextSprite = null
let pip: Sprite = null
let angle = 0
let turret: Sprite = null
let location: tiles.Location = null
let path: tiles.Location[] = []
let end: tiles.Location = null
let enemy_sprite: tilesAdvanced.PathfinderSprite = null
let enemy_health = 0
let enemy_speed = 0
let enemy_count_text: TextSprite = null
enemy_count_text = textsprite.create("")
let left_to_spawn = 0
enemy_speed = 10
let wave = 1
enemy_health = 0
on_start()
game.onUpdateInterval(2000, function () {
    let Enemy = 0
    if ((0 as any) < (1 as any) && sprites.allOfKind(Enemy).length < 1) {
        wave_text = textsprite.create("wave" + convertToText(wave))
        wave_text.scale = 2
        wave_text.setFlag(SpriteFlag.RelativeToCamera, false)
        wave_text.setOutline(1, 15)
        wave_text.x = 80
        wave_text.lifespan = 2000
        left_to_spawn = 10
    }
})
game.onUpdateInterval(1000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Turret)) {
        fire_at_enemy(value, SpriteKind.Projectile)
    }
})
