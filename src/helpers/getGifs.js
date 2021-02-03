
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rNE7Z4IGV4IfIa3s5q45n7l4Kggcom2A&q=${ encodeURI(category) }&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium?.url
        }
    })

    return gifs;
}