function escapeHTML(str) {
	return str.replace(/[&<>"']/g, (match) => {
		switch (match) {
			case "&":
				return "&amp;";
			case "<":
				return "&lt;";
			case ">":
				return "&gt;";
			case '"':
				return "&quot;";
			case "'":
				return "&#039;";
		}
	});
}

function serializeNode(node) {
	if (typeof node === "string") {
		return escapeHTML(node);
	}

	if (Array.isArray(node)) {
		return node.map(serializeNode).join("");
	}

	if (!node) {
		return "";
	}

	const { type, children, url, text, bold, code, italic } = node;
	const innerHTML = serializeNode(children);

	if (text !== undefined) {
		let escapedText = escapeHTML(text);

		if (bold) {
			escapedText = `<strong>${escapedText}</strong>`;
		}

		if (code) {
			escapedText = `<code>${escapedText}</code>`;
		}

		if (italic) {
			escapedText = `<em>${escapedText}</em>`;
		}

		return escapedText;
	}

	switch (type) {
		case "h1":
			return `<h1>${innerHTML}</h1>`;
		case "h2":
			return `<h2>${innerHTML}</h2>`;
		case "h3":
			return `<h3>${innerHTML}</h3>`;
		case "h4":
			return `<h4>${innerHTML}</h4>`;
		case "h5":
			return `<h5>${innerHTML}</h5>`;
		case "h6":
			return `<h6>${innerHTML}</h6>`;
		case "blockquote":
			return `<blockquote>${innerHTML}</blockquote>`;
		case "ul":
			return `<ul>${innerHTML}</ul>`;
		case "ol":
			return `<ol>${innerHTML}</ol>`;
		case "li":
			return `<li>${innerHTML}</li>`;
		case "link":
			return `<a href="${escapeHTML(url)}" target="_blank">${innerHTML}</a>`;
		default:
			return `${innerHTML}`;
	}
}

function serialize(children) {
	return children.map(serializeNode).join("");
}

export default serialize;
