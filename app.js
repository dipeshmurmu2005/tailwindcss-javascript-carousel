class Slider {
    /**
     * 
     * @param {string} sliderIdentifier - class of the slider elment 
     */
    constructor(sliderIdentifier) {
        this.class = sliderIdentifier;
        this.build();
    }
    build() {
        console.log(this.class);
    }
}
let slider = new Slider('slider');