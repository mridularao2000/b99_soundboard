import { createContext } from '@/utils/context';
import qs from 'qs'
import { useState, useEffect } from 'react';

const useAudioHook = () => {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [audioFound, setNoAudioFound] = useState([]);
    const CMS_URL = process.env.NEXT_PUBLIC_URL;

    const fetchSounds = async (parameters) => {
        const url = `${CMS_URL}/api/sounds` + '?' + qs.stringify(parameters, { encodeValuesOnly: true });
        // const response = await fetch('/api/');
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`CMS returned ${response.status} for ${url}`);
        }
        const body = await response.json();
        return body.data;
    }

    const getAllData = async () => {
        return fetchSounds({
            fields: ['audioId', 'audioTitle'],
            populate: { audio: { fields: ['url'] }, image: { fields: ['url'] } },
            pagination: { pageSize: 100 },
        })
    }

    useEffect(() => {
        (async () => {
            const data = await getAllData();
            setAllData(data);
            setFilteredData(data);
        })();
    }, []);

    const searchAudio = (query, navBar = false) => {
        console.log(query, navBar);
        if (query !== '') {
            const matchingAudio = allData.filter((data) => {
                const { audioTitle, audioId } = data;
                if(navBar) {
                    return audioId.toLowerCase().includes(query.toLowerCase());
                }
                return audioTitle.toLowerCase().includes(query.toLowerCase());
            });
            console.log(matchingAudio);
            if (matchingAudio.length === 0) {
                setNoAudioFound(true);
            } else setFilteredData(matchingAudio);
        } else {
            setFilteredData(allData);
            setNoAudioFound(false);
        }
    };
    return {
        allData,
        setAllData,
        searchAudio,
        filteredData,
        audioFound
    };
};

const [AudioContextProvider, useAudioContext] = createContext(useAudioHook);

export { AudioContextProvider, useAudioContext };
