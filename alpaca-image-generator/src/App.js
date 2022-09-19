import {useState} from "react";
import {
    accessoryNames,
    backgroundNames,
    earNames,
    eyeNames,
    hairNames,
    legNames,
    mouthNames,
    neckNames,
} from "./utils";
import Nose from "../src/assets/nose.png";
import {toPng} from "html-to-image";
import download from "downloadjs";

function App() {
    const [background, setBackground] = useState(backgroundNames.DarkBlue);
    const [ears, setEars] = useState(earNames.Default);
    const [eyes, setEyes] = useState(eyeNames.Default);
    const [hair, setHair] = useState(hairNames.Default);
    const [leg, setLeg] = useState(legNames.Default);
    const [mouth, setMouth] = useState(mouthNames.Default);
    const [neck, setNeck] = useState(neckNames.Default);
    const [accessories, setAccessories] = useState(accessoryNames.Headphone);
    const [selectedAttribute, setSelectedAttribute] = useState(hairNames);
    const [currentAccessory, setCurrentAccessory] = useState("hair");

    const changeAccessory = (key, value) => {
        switch (currentAccessory) {
            case "background":
                setBackground(value);
                break;
            case "ears":
                setEars(value);
                break;
            case "eyes":
                setEyes(value);
                break;
            case "hair":
                setHair(value);
                break;
            case "leg":
                setLeg(value);
                break;
            case "mouth":
                setMouth(value);
                break;
            case "neck":
                setNeck(value);
                break;
            case "accessories":
                setAccessories(value);
                break;
            default:
                setBackground(backgroundNames.DarkBlue);
        }
    };

    const downloadAlpaca = () => {
        const alpacaArt = document.getElementById("alpaca-image");
        toPng(alpacaArt).then(function (dataUrl) {
            download(dataUrl, "My-Alpaca.png");
        });
    };

    return (
        <div className="card grid grid-cols-2 items-center bg-gray-100 shadow-2xl m-52">
            <div className="card-body mb-96">
                <div className="card-title text-5xl uppercase my-4">
                    alpaca generator
                </div>
                <div className="relative" id="alpaca-image">
                    <img
                        src={background}
                        alt=""
                    />
                    <img
                        src={ears}
                        alt=""
                        className="absolute image-component"
                    />
                    <img
                        src={neck}
                        alt=""
                        className="absolute image-component"
                    />
                    <img
                        src={hair}
                        alt=""

                        className="absolute image-component"
                    />
                    <img
                        src={accessories}
                        alt=""

                        className="absolute image-component"
                    />
                    <img
                        src={eyes}
                        alt=""
                        className="absolute image-component"
                    />

                    <img
                        src={Nose}
                        alt=""
                        className="absolute image-component"
                    />
                    <img
                        src={mouth}
                        alt=""

                        className="absolute image-component"
                    />
                    <img
                        src={leg}
                        alt=""
                        className="absolute image-component"
                    />
                </div>
                <div className="m-4 space-x-4 action">
                    <button className="btn btn-primary">Random</button>
                    <button className="btn btn-primary"
                            onClick={() => downloadAlpaca()}
                    >Download
                    </button>
                </div>
            </div>
            <div className="card-body">
                <div className="grid grid-cols-1">
                    <div className="my-10">
                        <h6 className="text-2xl font-bold uppercase my-4">
                            Accessorize The Alapacas
                        </h6>
                        <div className="flex flex-wrap">
                            <button
                                className="btn btn-outline btn-primary m-1 flex-1"
                                onClick={() => {
                                    setSelectedAttribute(hairNames);
                                    setCurrentAccessory("hair");
                                }}
                                value={hairNames}
                            >
                                Hair
                            </button>
                            <button
                                className="btn btn-outline btn-primary m-1 active:btn-active flex-1"
                                onClick={() => {
                                    setSelectedAttribute(earNames);
                                    setCurrentAccessory("ears");
                                }}
                                value={earNames}
                            >
                                Ears
                            </button>
                            <button
                                className="btn btn-outline btn-primary m-1 flex-1"
                                onClick={() => {
                                    setSelectedAttribute(eyeNames);
                                    setCurrentAccessory("eyes");
                                }}
                                value={eyeNames}
                            >
                                Eyes
                            </button>
                            <button
                                className="btn btn-outline btn-primary m-1 flex-1"
                                onClick={() => {
                                    setSelectedAttribute(mouthNames);
                                    setCurrentAccessory("mouth");
                                }}
                                value={mouthNames}
                            >
                                Mouth
                            </button>
                            <button
                                className="btn btn-outline btn-primary m-1 flex-1"
                                onClick={() => {
                                    setSelectedAttribute(neckNames);
                                    setCurrentAccessory("neck");
                                }}
                                value={neckNames}
                            >
                                Neck
                            </button>
                            <button
                                className="btn btn-outline btn-primary m-1"
                                onClick={() => {
                                    setSelectedAttribute(legNames);
                                    setCurrentAccessory("leg");
                                }}
                                value={legNames}
                            >
                                Leg
                            </button>
                            <button
                                className="btn btn-outline btn-primary m-1"
                                onClick={() => {
                                    setSelectedAttribute(accessoryNames);
                                    setCurrentAccessory("hair");
                                }}
                                value={accessoryNames}
                            >
                                Accessories
                            </button>
                            <button
                                className="btn btn-outline btn-primary m-1"
                                onClick={() => {
                                    setSelectedAttribute(backgroundNames);
                                    setCurrentAccessory("background");
                                }}
                                value={backgroundNames}
                            >
                                Background
                            </button>
                        </div>
                    </div>
                    <h6 className="text-2xl font-bold uppercase">Style</h6>
                    <div className="grid grid-cols-3">
                        {Object.entries(selectedAttribute).map(([key, value]) => (
                            <button
                                className="btn btn-outline btn-primary m-1"
                                key={key}
                                onClick={() => changeAccessory(key, value)}
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
