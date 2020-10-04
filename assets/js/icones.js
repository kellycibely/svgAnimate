class Icones {
    constructor() {
        this.listIcons = document.querySelectorAll('.icone');
    }

    animaIcones() {
        TweenMax.to(this.listIcons, 0.5, {
            scale: 0.9,
            repeat: -1, yoyo: true
        })
        // console.log(this.listIcons)
    }
}
export { Icones }