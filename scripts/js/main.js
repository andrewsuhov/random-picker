var elementNumber = 1;

function addItem() {
	var number = elementNumber++;

	document.getElementById("list_grid").removeAttribute("hidden");

	var ul = document.getElementById("list");
	var li = document.createElement("li");
	li.setAttribute("class", "mdl-list__item");
	li.setAttribute("id", "item" + number);

	var spanPrimary = document.createElement("span");
	spanPrimary.setAttribute("class", "mdl-list__item-primary-content");

	var divTextfield = document.createElement("div");
	divTextfield.setAttribute("class", "mdl-textfield mdl-js-textfield");

	var input = document.createElement("input");
	input.setAttribute("class", "mdl-textfield__input");
	input.setAttribute("type", "text");
	input.setAttribute("id", "value" + number);
	divTextfield.appendChild(input);

	var label = document.createElement("label");
	label.setAttribute("class", "mdl-textfield__label");
	label.setAttribute("for", input.id);
	label.appendChild(document.createTextNode("Item..."));
	divTextfield.appendChild(label);

	spanPrimary.appendChild(divTextfield);

	var spanSecondary = document.createElement("span");
	spanSecondary.setAttribute("class", "mdl-list__item-secondary-content");

	var button = document.createElement("button");
	button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon mdl-button--accent");
	button.setAttribute("onclick", "removeItem(" + li.id + ")");

	var i = document.createElement("i");
	i.setAttribute("class", "material-icons");
	i.setAttribute("id", "icon" + elementNumber);
	i.appendChild(document.createTextNode("cancel"));

	button.appendChild(i);

	var divTooltip = document.createElement("div");
	divTooltip.setAttribute("class", "mdl-tooltip");
	divTooltip.setAttribute("data-mdl-for", i.id);
	divTooltip.appendChild(document.createTextNode("Remove item"));

	spanSecondary.appendChild(button);
	spanSecondary.appendChild(divTooltip);
	li.appendChild(spanPrimary);
	li.appendChild(spanSecondary);
	ul.appendChild(li);

	componentHandler.upgradeDom();
	input.focus();
}

function removeItem(id) {
	id.remove();

	if (document.getElementById("list").getElementsByTagName("li").length == 0) {
		document.getElementById("list_grid").setAttribute("hidden", true);
	}

	componentHandler.upgradeDom();
}

function randomize() {
	var elements = document.getElementById("list").getElementsByTagName("input");
	var randomNumber = Math.floor(Math.random() * elements.length);
	var input = elements[randomNumber];
	var value = input == null ? "Add items to list!" : input.value;
	var data = {
		message: value
	};
	var snackbarContainer = document.getElementById("result");
	snackbarContainer.MaterialSnackbar.showSnackbar(data);
}