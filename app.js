class Slider {
    /**
     * 
     * @param {string} sliderIdentifier - class of the slider elment 
     * @param {Object} options - slider styles and features options 
     */
    constructor(sliderIdentifier, options) {
        this.class = sliderIdentifier;
        this.options = options;
        this.build();
    }
    build() {
        console.log(this.options.pagination);
    }
}
let slider = new Slider('slider', {
    pagination: false,
});