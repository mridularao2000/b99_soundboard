import Header from "./components/Header";
import { AudioContextProvider } from "./components/SoundBoardContext";
import SoundTile from "./components/SoundTile"

//NOTE: opentelemetry/api should be installed before running!

export default function Home() {
  console.log(process.env.URL);
  return (
    <div className="body">
      <AudioContextProvider>
        <Header />
        <SoundTile />
      </AudioContextProvider>
    </div>
  );
}

//NEED TO ADD PROD CMS URL