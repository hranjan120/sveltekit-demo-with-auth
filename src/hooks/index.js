import * as cookie from 'cookie';

export async function handle({ event, resolve }) {
	// if (event.url.pathname.startsWith('/custom')) {
	// 	return new Response('custom response');
	//   }
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	//const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
	const jwt = cookies.jwt;
	event.locals.userToken = jwt ? jwt : null;
	return await resolve(event);
}

export function getSession({ locals }) {
	return {
		userToken: locals.userToken
	};
}
