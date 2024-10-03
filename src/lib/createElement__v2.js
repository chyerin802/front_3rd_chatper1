// 이 함수는 createElement의 개선된 버전입니다.
// 1. falsy vNode 처리
// 2. 문자열 또는 숫자 vNode 처리
// 3. 배열 vNode 처리 (DocumentFragment 사용)
// 4. 일반 요소 vNode 처리:
//    - 요소 생성
//    - 속성 설정 (이벤트 함수를 이벤트 위임 방식으로 등록할 수 있도록 개선)
//    - 자식 요소 추가
export function createElement__v2(vNode) {
	// 1. 렌더링되지 않는 값에 대해서는 빈 텍스트 노드를 반환
	if (vNode === null || vNode === undefined || typeof vNode === 'boolean') {
		return document.createTextNode('');
	}

	// 2. vNode가 문자열이나 숫자면 텍스트 노드를 생성하여 반환
	if (typeof vNode === 'string' || typeof vNode === 'number') {
		return document.createTextNode(String(vNode));
	}

	// 3. vNode가 배열, 즉 노드가 여러 개 이면 DocumentFragment를 생성하고 각 노드에 대해 createElement를 재귀 호출하여 추가
	if (Array.isArray(vNode)) {
		const fragment = document.createDocumentFragment();
		vNode.forEach((child) => {
			const childElement = createElement__v2(child);
			fragment.appendChild(childElement);
		});
		return fragment;
	}

	// 4. vNode.type이 함수, 즉 함수 컴포넌트이면 해당 함수를 호출하고 그 결과로 createElement를 재귀 호출
	if (typeof vNode.type === 'function') {
		const component = vNode.type(vNode.props || {});
		return createElement__v2(component);
	}

	// 5. 위 경우가 아니면 실제 DOM 요소를 생성
	// (1) vNode.type에 해당하는 요소를 생성
	const domElement = document.createElement(vNode.type);

	// (2) props 처리 (예: className, 이벤트 핸들러, 일반 속성)
	if (vNode.props) {
		Object.entries(vNode.props).forEach(([propName, propValue]) => {
			// 이벤트 핸들러 (onClick 등)
			if (propName.startsWith('on') && typeof propValue === 'function') {
				const eventType = propName.slice(2).toLowerCase();
				domElement.addEventListener(eventType, propValue);
			}
			// className 처리
			else if (propName === 'className') {
				domElement.className = propValue;
			}
			// 기타 속성 처리 (예: href, id, data-* 등)
			else {
				domElement.setAttribute(propName, propValue);
			}
		});
	}

	// (3) 자식 요소 처리
	if (vNode.children) {
		vNode.children.forEach((child) => {
			const childElement = createElement__v2(child);
			domElement.appendChild(childElement);
		});
	}

	return domElement;
}
