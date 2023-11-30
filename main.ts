namespace SpriteKind {
    export const LoadingScreen = SpriteKind.create()
    export const TopTxt = SpriteKind.create()
}
let TopText = sprites.create(assets.image`myImage0`, SpriteKind.TopTxt)
TopText.setScale(3, ScaleAnchor.Middle)
let LoadingBar = sprites.create(img`
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
    `, SpriteKind.LoadingScreen)
LoadingBar.setScale(9, ScaleAnchor.Middle)
animation.runImageAnimation(
LoadingBar,
assets.animation`LoadScreenAnim`,
200,
true
)
