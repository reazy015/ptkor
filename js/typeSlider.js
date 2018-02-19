'use stric';

window.typeSliderConstructor = ( function () {
    function TypeSlider(slidesListContainer, slidesAmount, slidesList) {
        this.slidesAmount = slidesAmount;
        this.slidesList = slidesList;
        this.slidesListContainer = slidesListContainer;
        this.init = initializeSliderInterface;
        this.dostList = [];
        this.counter = 0;
        var self = this;


        function createPrevNextBtns() {

            var fragment = document.createDocumentFragment();
            var buttonNext = document.createElement('button');
            var buttonPrev = document.createElement('button');
            var iconNext = '<i class="fa fa-chevron-right fa-about" aria-hidden="true"></i>';
            var iconPrev = '<i class="fa fa-chevron-left fa-about" aria-hidden="true"></i>';
            buttonNext.classList.add('item-slider-button');
            buttonNext.classList.add('item-slider-button--next');
            buttonPrev.classList.add('item-slider-button');
            buttonPrev.classList.add('item-slider-button--prev');
            buttonNext.innerHTML = iconNext;
            buttonPrev.innerHTML = iconPrev;

            buttonNext.addEventListener('click', slideNext);
            buttonPrev.addEventListener('click', slidePrev);

            fragment.appendChild(buttonPrev);
            fragment.appendChild(buttonNext);

            slidesListContainer.appendChild(fragment);
        }

        function createSliderDotsPanel(dotsAmount) {
            var fragment = document.createDocumentFragment();
            var dotsList = document.createElement('ul');

            for (var i = 0; i < dotsAmount - 1; i++) {

                if (i === 0) {
                    var listElement = document.createElement('li');
                    listElement.classList.add('active-dot');
                    listElement.classList.add('card-item-list-indicator')
                    dotsList.appendChild(listElement);
                }

                var listElement = document.createElement('li');
                listElement.classList.add('card-item-list-indicator');
                dotsList.appendChild(listElement);
                dotsList.classList.add('card-item-slider-dots');

            };

            fragment.appendChild(dotsList);

            slidesListContainer.appendChild(fragment);
            // console.log(slidesListContainer.querySelector('.card-item-slider-dots'));
            self.dotsList = slidesListContainer.querySelector('.card-item-slider-dots');
            // console.log(self.dotsList);
            self.dotsList.addEventListener('click', goToCurrentSlide);

        }

        function slideNext() {
            self.counter++;

            if (self.counter > self.slidesAmount - 1) {
                self.counter = 0;
                disableAllDots(self.dotsList.children, self.counter);

                self.slidesList.style.transform = 'translate(-' + self.counter + '00%)';
            } else {
                disableAllDots(self.dotsList.children, self.counter);

                self.slidesList.style.transform = 'translate(-' + self.counter + '00%)';
            }
        }

        function slidePrev() {
            self.counter--;

            if (self.counter < 0) {
                self.counter = self.slidesAmount - 1;
                disableAllDots(self.dotsList.children, self.counter);

                self.slidesList.style.transform = 'translate(-' + self.counter + '00%)';
            } else {
                disableAllDots(self.dotsList.children, self.counter);

                self.slidesList.style.transform = 'translate(-' + self.counter + '00%)';
            }
        }

        function disableAllDots(dotsList, currentlyActive) {

            for (var i = 0; i < dotsList.length; i++) {
                dotsList[i].classList.remove('active-dot');
            }

            dotsList[currentlyActive].classList.add('active-dot');
        }

        function findItemIndexInList(item, list) {
            var index = Array.prototype.indexOf.call(list, item);
            return index;
        }

        function goToCurrentSlide(evt) {
            var target = evt.target;
            if (target.classList.contains('card-item-list-indicator')) {
                self.counter = findItemIndexInList(target, this.children);
                disableAllDots(this.children, self.counter);
                self.slidesList.style.transform = 'translate(-' + self.counter + '00%)';
            }
        }

        function initializeSliderInterface() {
            createSliderDotsPanel(this.slidesAmount);
            createPrevNextBtns();

        }

    }

    return TypeSlider;
})();

var sliderContainers = document.querySelectorAll('[data-card-type] .card-item-slider');

for (var i = 0; i < sliderContainers.length; i++) {
    var currentSliderImgsCount = sliderContainers[i].querySelectorAll('.card-item-slider-unit');
    var currentSlidesList = sliderContainers[i].querySelector('.card-item-slider-list');

    new window.typeSliderConstructor(sliderContainers[i], currentSliderImgsCount.length, currentSlidesList).init();
}