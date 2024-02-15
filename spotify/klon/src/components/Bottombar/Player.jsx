import React, { useEffect, useMemo } from "react";
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaArrowRotateRight } from "react-icons/fa6";
import { useAudio } from "react-use";
import { secondsToTime } from "../../utils";
import CustomRange from "../CustomRange";
import { MdLyrics } from "react-icons/md";
import { HiMiniQueueList } from "react-icons/hi2";
import { MdDevices } from "react-icons/md";
import { BiSolidVolumeFull } from "react-icons/bi";
import { MdFullscreen } from "react-icons/md";
import { BiSolidVolumeMute, BiSolidVolumeLow } from "react-icons/bi";
import { useSelector } from "react-redux";
import { setControls } from "../stores/player";
import { useDispatch } from 'react-redux';


export const Player = () => {

    const dispatch=useDispatch()
    const {current} =useSelector    (state=>state.player)


  const [audio, state, controls, ref] = useAudio({
    src:current?.src,
});

useEffect(() => {
    controls.play()
});

useEffect(() => {
    dispatch(setControls(controls)) 
}, [] )

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return <BiSolidVolumeMute />;
    }
    if (state.volume < 0.5) {
      return <BiSolidVolumeLow />;
    }
    return <BiSolidVolumeFull />;
  });

  const toggleMute = () => {
    controls[state.muted ? "unmute" : "mute"]();
  };

  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%]"> </div>
      <div className="max-w-[45.125rem] w-[40%] flex flex-col ">
        <div className="flex items-center justify-center	 gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <FaArrowRightArrowLeft className="text-24" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <FaStepBackward className="text-24" />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 flex bg-white rounded-full items-center justify-center text-black hover:scale-[1.06]"
          >
            {state?.playing ? (
              <FaPause className="text-24" />
            ) : (
              <FaPlay className="text-24" />
            )}{" "}
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <FaStepForward className="text-24" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <FaArrowRotateRight className="text-24" />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2  ">
          {audio}
          <div className=" text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.01}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className=" text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end items-center">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <MdLyrics className="text-24" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <HiMiniQueueList className="text-24" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <MdDevices className="text-24" />
        </button>
        <button
          onClick={toggleMute}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          {volumeIcon}
        </button>
        <div className="w-[5.813rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state?.volume}
            onChange={(value) => controls.volume(value)}
          />
        </div>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <MdFullscreen className="text-24" />
        </button>
      </div>
    </div>
  );
};

export default Player;
