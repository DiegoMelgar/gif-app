export const getGifs = async (category) => {
    const api = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=ry2jFSxHXUXlPIfaEQKwzgSMZY4oP0JO`;
    const response = await fetch(api);
    const { data } = await response.json();
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });

    return gifs
}