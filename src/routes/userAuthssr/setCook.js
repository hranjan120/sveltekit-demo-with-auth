export async function POST(dt) {
    const jwtTok = await dt.request.json();
	return {
		headers: {
			'set-cookie': `jwt=${jwtTok}; Path=/; HttpOnly`
		},
		body: {
			ok: true
		}
	};
}
