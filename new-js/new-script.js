document.addEventListener("DOMContentLoaded", function () {
	let tabContainers = Array.prototype.slice.call(document.querySelectorAll(".js-tab-container"));

	if (tabContainers.length > 0) {
		tabContainers.forEach((element) => {
			let tabItem = Array.prototype.slice.call(element.querySelectorAll(".js-tab-control"));
			let tabContent = Array.prototype.slice.call(element.querySelectorAll(".js-tab-content"));

			tabItem.forEach((el, index, array) => {
				el.addEventListener("click", (e) => {
					if (!el.classList.contains("active")) {
						e.preventDefault();

						let dataId = el.dataset.tabItem;

						let tabContentItem = tabContent.find((item) => {
							if (item.dataset.tabContent == dataId) {
								return item;
							} else {
								return null;
							}
						});

						if (tabContentItem != null) {
							tabItem.forEach((el) => el.classList.remove("active"));
							tabContent.forEach((el) => el.classList.remove("active"));

							el.classList.add("active");

							tabContentItem.classList.add("active");
						}
					}
				});
			});
		});
	}
});
