export default async function getFakeStoreData(path: '/${string}') {
    const res = await fetch('http://localhost:3000/api${path}');
    return await res.json();
}