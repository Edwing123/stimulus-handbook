import { Application, Controller } from "@hotwired/stimulus";

/**
 * A controller class represents the working units
 * that include the logic for our aplication, they are kind
 * of similar to the concept of components you find
 * in other libraries, DHH probably borrows the name from Rails.
 */

class HelloController extends Controller {
	// Targets are a way to have references
	// to HTML elements that are of interest
	// to the controller. In this case, we want to
	// have a refence to the [input] and [p] elements.
	static targets = ["name", "greeting"];

	// This method is called by the application
	// when a controller is connected to an HTML
	// element.
	connect() {
		console.log(`${this.identifier} is connected.`);
	}

	// Custom actions that are meant to be dispatched
	// when an DOM event fires.
	greet(event) {
		// console.log("Hello World.");
		// console.log({ event });

		// We can reference the targets we defined above.
		console.log({
			name: this.nameTarget,
			greeting: this.greetingTarget,
		});

		this.greetingTarget.textContent = `Hello ${this.nameTarget.value}.`;
	}
}

// Start Stimulus [Application] and activate
// debug mode.
const app = Application.start();
app.debug = true;

// Register our controller.
// "hello" is its identifier.
app.register("hello", HelloController);
