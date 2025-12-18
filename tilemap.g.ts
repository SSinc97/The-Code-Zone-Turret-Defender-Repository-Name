// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level 1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010401010101010101010101010101010103010101010101010101010101030303030101010101010101010101010301010101010101010101010101010103010101010101010101010101010101030303030303030301010101010101010101010101010103010101010101010101010101010101030101010101010101010101010101010301010101010101010101010101010103010101010101010101010103030303030101010101010101010101030101010101010101010101010101010301010101010101010101010101010103010101010101010101010101010101030101010101010101010101010101010201010101010101`, img`
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 . . . . . 2 2 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile6,myTiles.tile1,myTiles.tile3,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "path":
            case "tile3":return tile3;
            case "end":
            case "tile5":return tile5;
            case "start":
            case "tile1":return tile1;
            case "path logged":
            case "tile7":return tile7;
            case "floor":
            case "tile6":return tile6;
            case "turret floor":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
