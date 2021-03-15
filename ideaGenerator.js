// textBoxTest2.js

var messageField = document.getElementById("message");
var resultField = document.getElementById("result");
var inputFields = document.getElementById("input_fields");
var numOfFields = 0;

function generate() {
	messageField.innerHTML = "";
	var formatText = document.getElementById("text_format").value;
	var displayText = "";
	if(formatText.length != 0) {
		for(var i = 0; i < formatText.length; i++) {
			if(formatText[i] != '*') {
				displayText += formatText[i];
			} else {
				var substring = getSubstring(formatText, i);
				i += substring.length + 1;
				var elementText = getElementFromFile(substring);
				displayText += elementText;
			}
		}
		resultField.innerHTML = displayText;
	} else {
		messageField.innerHTML = "No Format Text Found";
	}
}

function getSubstring(textString, index) {
	var substring = "";
	for(var i = index + 1; i < textString.length; i++) {
		if(textString[i] == '*') {
			return substring;
		} else {
			substring += textString[i];
		}
	}
	return substring;
}

function getElementFromFile(substring) {
	var retrievedElement = retrieveElement(substring);
	if(retrievedElement == null) {
		messageField.innerHTML = "No data found for " + substring;
	} else {
		var elementText = retrievedElement.value;
		var randomString = getRandomString(elementText);
		return randomString;
	}
	return substring;
}

function getRandomString(elementText) {
	var split_str = elementText.split("\n");
	var index = Math.floor(Math.random() * split_str.length);
	return split_str[index];
}

function retrieveElement(substring) {
	var nodeList = document.querySelectorAll("input");
	for(var i = 0; i < nodeList.length; i++) {
		if(substring == nodeList[i].value) {
			var node = nodeList[i].closest("div").getElementsByTagName('textarea')[0];
			return node;
		}
	}
	return null;
}

function getElementByXpath(path) {
	return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function save() {
	messageField.innerHTML = "Save";
}

function signIn() {
	messageField.innerHTML = "Sign In";
}

function datasetChange() {
	messageField.innerHTML = "Dataset";
}

function addField() {
	numOfFields = numOfFields + 1;
	var hr = document.createElement("HR");
	var div = document.createElement("DIV");
	div.setAttribute("id", "window_" + numOfFields);
	var labelName = document.createElement("LABEL");
	labelName.setAttribute("id", "label_name_" + numOfFields);
	labelName.innerHTML = "Name: <br>";
	var textName = document.createElement("INPUT");
	textName.setAttribute("id", "name_" + numOfFields);
	textName.setAttribute("type", "text");
	var br1 = document.createElement("BR");
	var br2 = document.createElement("BR");
	var labelText = document.createElement("LABEL");
	labelText.setAttribute("id", "label_text_" + numOfFields);
	labelText.innerHTML = "Text: <br>";
	var textArea = document.createElement("TEXTAREA");
	textArea.setAttribute("id", "text_" + numOfFields);
	textArea.setAttribute("rows", "10");
	textArea.setAttribute("cols", "50");
	var childEls = [labelName, textName, br1, br2, labelText, textArea];
	addElements(div, childEls);
	addElements(inputFields, [hr, div]);
	// inputFields.appendChild(div);
}

function addElements(parentEl, childEls) {
	for(var i = 0; i < childEls.length; i++) {
		parentEl.appendChild(childEls[i]);
	}
}