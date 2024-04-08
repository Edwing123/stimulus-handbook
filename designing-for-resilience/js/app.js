import { Application, Controller } from "@hotwired/stimulus";

class Clipboard extends Controller {
	static targets = ["text"];

	// Similar to targets, howerver, this is purely
	// for storing state data within the attribute.
	// We access through `<name>Class`.
	static classes = ["supported"];

	connect() {
		const supportedClass = this.supportedClass;

		if ("clipboard" in navigator) {
			this.element.classList.add(supportedClass);
		}
	}

	copy() {
		navigator.clipboard.writeText(this.textTarget.value);
	}
}

const app = Application.start();
app.debug = true;

app.register("clipboard", Clipboard);
