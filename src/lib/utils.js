export function postMethod(endpoint, data) {
	return fetch(endpoint, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(data || {}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((r) => r.json());
}

export function getUserProfile(endpoint, tok) {
	return fetch(endpoint, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: tok
		}
	}).then((r) => r.json());
}

export function localPost(endpoint, data) {
	return fetch(endpoint, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(data || {}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((r) => r.json());
}

export function setJwtLocal(endpoint, data) {
	console.log('qwertyu', data);
	return fetch(endpoint, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(data || {}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((r) => r.json());
}
