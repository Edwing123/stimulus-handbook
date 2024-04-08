import { Application, Controller } from "@hotwired/stimulus";

class ContentLoader extends Controller {
	static values = {
		url: String,
		refreshInterval: { type: Number, default: 5000 },
	};

	connect() {
		console.log(this.refreshIntervalValue);
		this.startRefreshing();
	}

	loadMessages() {
		fetch(this.urlValue)
			.then((response) => response.text())
			.then((html) => (this.element.innerHTML = html))
			.catch(() => {
				alert("Message could not be loaded");
			});
	}

	startRefreshing() {
		this.id = setInterval(() => {
			this.loadMessages();
		}, this.refreshIntervalValue);
	}

	disconnect() {
		clearInterval(this.id);
	}
}

const app = Application.start();
app.debug = true;

app.register("content-loader", ContentLoader);
