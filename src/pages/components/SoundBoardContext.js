import { createContext } from '@/utils/context';
import { useState, useEffect } from 'react';

const useAudioHook = ({soundBoardData}) => {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);

    useEffect(() => {
            setAllData(soundBoardData);
            setFilteredData(soundBoardData);
    }, []);

    const searchAudio = (query, navBar = false) => {
        console.log(allData);
        console.log(query, navBar);
        if (query !== '') {
            const matchingAudio = allData.filter((data) => {
                const { audioTitle, audioId } = data;
                if (navBar) {
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
        }
    };
    return {
        allData,
        setAllData,
        searchAudio,
        filteredData
    };
};

const [AudioContextProvider, useAudioContext] = createContext(useAudioHook);

export { AudioContextProvider, useAudioContext };
