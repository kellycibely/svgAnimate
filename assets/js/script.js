import { Cards } from './cards.js'
import { Icones } from './icones.js'

window.onload = () => {

    const icones = new Icones();
    icones.animaIcones();

    const animateCards = new Cards();
    document.addEventListener('scroll', animateCards.scrollCards.bind(animateCards));


}