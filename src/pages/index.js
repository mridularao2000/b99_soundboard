// import fs, {readFile} from 'fs'
import path from 'path';
import Header from "./components/Header";
import { AudioContextProvider } from "../utils/SoundBoardContext";
import { readFile } from 'fs/promises';
import SoundBoard from './components/SoundBoard/SoundBoard';
import { useRef } from 'react';

//NOTE: opentelemetry/api should be installed before running!

export default function Home({ soundBoardData }) {
  const audioRef = useRef(null);
  // const playAudio = () => {
  //   if (audioRef.current) {
  //     audioRef.current.play().catch(error => {
  //       console.error("Audio playback failed:", error);
  //     });
  //   }
  // }
  return (
    <div className="body">
      <AudioContextProvider soundBoardData={soundBoardData}>
        <Header />
        <SoundBoard />
      </AudioContextProvider>
    </div>
  );
}

export async function getStaticProps() {
  const folder = path.join(process.cwd(), 'src', 'utils', 'response.js');
  const response = await readFile(folder);
  const result = JSON.parse(response);
  return {
    props: {
      soundBoardData: result
    }
  }
}



// return (
//   <div className="body">
//     <button onClick={() => playAudio()}><audio ref={audioRef} src="/audio/youve helped me find my smile.mp3" />3</button>
//   </div>
// );

/* <AudioContextProvider soundBoardData={soundBoardData}>
        <Header />
        <SoundBoard />
      </AudioContextProvider> */


// const result = [];
  // files.forEach(file => {
  //   const filePath = path.join(folder, file);
  //   const relativePath = path.relative(__dirname, filePath); // Get relative path

  //   // Create an object for each file
  //   const fileInfo = {
  //     audio: relativePath.replace(/image/g, 'audio').replace(/jpg/g, 'ogg'), //change the image folder to audio
  //     image: relativePath, // Assuming image has the same path; change logic if needed
  //     audioTitle: file.replace(/.jpg/g, ''),
  //     audioId: file
  //       .replace(/jpg/g, '')
  //       .replace(/[\s]/g, '-') // Replace spaces with hyphens
  //       .replace(/[^\w-]/g, '') // Remove punctuation
  //   };

  //   result.push(fileInfo);
  // });
  // const file = '/Users/msrao/Library/CloudStorage/OneDrive-Falabella/Escritorio/practice projects/b99_soundboard/src/utils/response.js';
  // const response = JSON.stringify(result, null, 2);
  // fs.writeFileSync(file, response, 'utf8');