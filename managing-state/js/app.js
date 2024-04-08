import { Application, Controller } from "@hotwired/stimulus";

class Slideshow extends Controller {
	static targets = ["slide"];

	// Stimulus has some kind of state management
	// that is backed by data-* attributes.
	static values = {
		// `data-slideshow-index-value`. It will
		// handle the convertion for us.
		// We can access it through `this.indexValue`.
		// index: Number,

		// We can even set default.
		index: { type: Number, default: 0 },
	};

	// Do controller initialization.
	// This is probably inspired on Ruby's class `initialize` constructor method.
	initialize() {}

	previous() {
		this.#go(-1);
	}

	next() {
		this.#go(1);
	}

	#go(direction) {
		const newPosition = this.indexValue + direction;
		const slidesCount = this.slideTargets.length;
		const lastSlideIndex = slidesCount - 1;

		// Wrap the index if its goes out of bounds.
		this.indexValue =
			(newPosition < 0 ? lastSlideIndex : newPosition) % slidesCount;
	}

	showSlice() {
		this.slideTargets.forEach(($slide, index) => {
			// Hide it if the slide index position is not equal to
			// the currenly selected index.
			$slide.hidden = index != this.indexValue;
		});
	}

	// We can set methods that will be called whenever
	// a controller value changes.
	indexValueChanged() {
		this.showSlice();
	}
}

const app = Application.start();
app.debug = true;

app.register("slideshow", Slideshow);
