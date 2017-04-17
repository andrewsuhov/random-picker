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

	var div = document.createElement("div");
	div.setAttribute("class", "mdl-textfield mdl-js-textfield");

	var input = document.createElement("input");
	input.setAttribute("class", "mdl-textfield__input");
	input.setAttribute("type", "text");
	input.setAttribute("id", "value" + number);
	div.appendChild(input);

	var label = document.createElement("label");
	label.setAttribute("class", "mdl-textfield__label");
	label.setAttribute("for", input.id);
	label.appendChild(document.createTextNode("Item..."));
	div.appendChild(label);

	spanPrimary.appendChild(div);

	var spanSecondary = document.createElement("span");
	spanSecondary.setAttribute("class", "mdl-list__item-secondary-action");

	var a = document.createElement("a");
	a.setAttribute("class", "mdl-list__item-secondary-action");
	a.setAttribute("href", "#");
	a.setAttribute("onclick", "removeItem(" + li.id + ")");

	var i = document.createElement("i");
	i.setAttribute("class", "material-icons");
	i.appendChild(document.createTextNode("cancel"));

	a.appendChild(i);
	spanSecondary.appendChild(a);
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