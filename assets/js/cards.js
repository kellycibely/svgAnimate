class Cards {
    constructor() {
        this.sectionDicas = document.getElementById("section-dicas");
        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');
    }

    scrollCards() {
        window.requestAnimationFrame(this.calculaScroll.bind(this));
    }

    calculaScroll() {
        const position = this.sectionDicas.getBoundingClientRect()['y'];

        if (position >= 25) {
            this.cardEsq.style.transform = `translate(${((-position) + 25) / 10}%)`;
            this.cardDir.style.transform = `translate(${((position) - 25) / 10}%)`;
        }
    }
}

export { Cards }
