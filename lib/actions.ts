export const getCollections = async () => {
    const collections = await fetch("http://localhost:3000/api/collections");
}