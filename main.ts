namespace SpriteKind {
    export const LoadingScreen = SpriteKind.create()
    export const TopTxt = SpriteKind.create()
}
let TopText: Sprite = null
let LoadingBar: Sprite = null
function LoadScr () {
    TopText = sprites.create(assets.image`myImage0`, SpriteKind.TopTxt)
    TopText.setScale(3, ScaleAnchor.Middle)
    LoadingBar = sprites.create(img`
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
}
