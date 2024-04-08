import { Controller } from "@hotwired/stimulus"

/**
 * Controllers
 *
 * A controller is the basic organizational unit
 * of a Stimulus application.
 *
 * In practice, you define a controller as a class that extends
 * the [Controller] class from the [stimulus] module.
 */

class GreetingController extends Controller {

}

/**
 * The properties of a controller.
 *
 * Each controller belongs to a Stimulus [Application] instance, and it's
 * also associated with an HTML element.
 *
 * From within a controller, we can access:
 *
 * 1. The [Application] instance it belongs to - `this.application`.
 * 2. Associated HTML element - `this.element`.
 * 3. Identifier name - `this.identifier`.
 *
 * An identifier is the name you use to reference a controller class in the HTML document.
 *
 * When the Stimulus application sees a [data-controller] attribute, it will look at the attribute
 * value and find the corresponding controller, once found, it'll create an instance of the
 * controller and associate it with that HTML element where the [data-controller] attribute
 * was found.
 *
 * Aside from controllers, Stimulus key concepts are:
 *
 * - Actions: A way to dispath a controller methods based on DOM events (e.g, a click).
 * - Targets: A way to reference HTML elements of relevance for the controller (e.g, an input).
 * - Values: I don't understand this one.
 */
