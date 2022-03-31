basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (Math.max(Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB), Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG)) < Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG)) {
        basic.showString("Rouge")
    } else if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG)) {
        basic.showString("Vert")
    } else {
        basic.showString("Bleu")
    }
})
