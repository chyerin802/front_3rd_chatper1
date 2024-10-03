// eventManager.js

// 이벤트 위임을 위한 전역 이벤트 맵
// 이 맵은 이벤트 타입별로 요소와 해당 요소의 이벤트 핸들러를 저장합니다.
const eventMap = new Map();

// 이벤트 위임이 설정될 루트 요소
let rootElement = null;

// TODO: setupEventListeners 함수 구현
// 이 함수는 루트 요소에 이벤트 위임을 설정합니다.
export function setupEventListeners(root) {
	// 1. rootElement 설정
	// 2. 기존에 설정된 이벤트 리스너 제거 (있다면)
	// 3. eventMap에 등록된 모든 이벤트 타입에 대해 루트 요소에 이벤트 리스너 추가
	// 주의: 이벤트 캡처링을 사용하여 이벤트를 상위에서 하위로 전파
}

// TODO: handleEvent 함수 구현
// 이 함수는 실제 이벤트가 발생했을 때 호출되는 핸들러입니다.
function handleEvent(event) {
	// 1. 이벤트 타겟에서 시작하여 루트 요소까지 버블링
	// 2. 각 요소에 대해 해당 이벤트 타입의 핸들러가 있는지 확인
	// 3. 핸들러가 있다면 실행
	// 이를 통해 하위 요소에서 발생한 이벤트를 상위에서 효율적으로 처리할 수 있습니다.
}

/**
 * eventMap에 이벤트의 타입, target이 되는 요소, 이벤트 핸들러 정보를 저장한다.
 */
export function addEvent(targetElement, eventType, handler) {
	// 새로 저장되는 eventType 이라면 그 타입에 해당하는 새로운 Map 을 생성
	if (!eventMap.has(eventType)) eventMap.set(eventType, new Map());

	// eventMap 에서 eventType에 해당하는 handlerMap을 찾아 타겟 요소와 핸들러 정보를 저장한다.
	const handlerMap = eventMap.get(eventType);
	handlerMap.set(targetElement, handler);
}

// TODO: removeEvent 함수 구현
export function removeEvent(element, eventType, handler) {
	// 1. eventMap에서 해당 요소와 이벤트 타입에 대한 핸들러 제거
	// 2. 해당 이벤트 타입의 모든 핸들러가 제거되면 루트 요소의 리스너도 제거
	// 이를 통해 더 이상 필요 없는 이벤트 핸들러를 정리하고 메모리 누수 방지
}
