const API_BASE = "https://dummyjson.com";

export const getMessages =  async () => {
	const res = await fetch( `${API_BASE}/comments` );
	return await res.json();
};
