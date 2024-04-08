import { Application, Controller } from "@hotwired/stimulus";

class Clipboard extends Controller {
	// More on targets. For each element of the array,
	// Stimulus creates the following three properties:
	//
	// 1. <name>Target: it resolves to the first element inside the controller scope
	//	  that has the attribute `data-<identifier>-target=<name>`.
	// 2. <name>Targets: it resolves to an array of all the elements with the attribute above.
	// 3. has<name>Target: returns true of there's at least an element with the target name,
	//	  otherwise it returns false.
	static targets = ["text"];

	connect() {}

	copy() {
		const text = this.textTarget.value;
		navigator.clipboard.writeText(text);
	}
}

const app = Application.start();
app.debug = true;

app.register("clipboard", Clipboard);
