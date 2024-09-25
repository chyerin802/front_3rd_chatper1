export default class Component {
	constructor(element) {
		if (!element) throw new Error('Error: ');
		this.$target = element;
		this.render();
	}

	template() {
		return '';
	}

	mounted() {}

	render() {
		this.$target.outerHTML = this.template();
		this.mounted();
	}
}
