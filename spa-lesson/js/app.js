import { Application, Controller } from "@hotwired/stimulus";

class App extends Controller {
	static targets = ["outlet"];

	static values = {
		initialPage: {
			type: String,
			default: "/pages/home.html",
		},
	};

	connect() {
		this.fetchPage(this.initialPageValue);
	}

	load(event) {
		console.log(event);
		this.fetchPage(event.params.url);
	}

	fetchPage(url) {
		fetch(url)
			.then((response) => response.text())
			.then((html) => {
				this.outletTarget.innerHTML = html;
				history.replaceState(null, null, url.replace("pages/", ""));
			})
			.catch(() => {
				alert("The page could not be loaded");
			});
	}
}

const app = Application.start();
app.debug = true;

app.register("app", App);
