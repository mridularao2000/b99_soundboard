import qs from 'qs'

const CMS_URL = process.env.NEXT_PUBLIC_URL;

const fetchSounds = async (parameters) => {
    const url = `${CMS_URL}/api/sounds` + '?' + qs.stringify(parameters, { encodeValuesOnly: true });
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    const body = await response.json();
    return body.data;
}

export const getAllData = async () => {
    fetchSounds({
        fields: ['audioId', 'audioTitle'],
        populate: { audio: { fields: ['url'] }, image: { fields: ['url'] } },
    })
}

// export const searchBarInput = async (searchValue) => {
//     //return searchBarInput data after debouncing
//     fetchSounds({
//         filters: { audioId: { $containsi: searchValue } },
//         fields: ['audioId', 'audioTitle'],
//         populate: { audio: { fields: ['url'] }, image: { fields: ['url'] } },
//     })
// }

// export const navBarChar = async (navValue) => {
//     //return all quotes of particular char
//     fetchSounds({
//         filters: { audioId: { $containsi: navValue } },
//         fields: ['audioId', 'audioTitle'],
//         populate: { audio: { fields: ['url'] }, image: { fields: ['url'] } },
//     })
// }