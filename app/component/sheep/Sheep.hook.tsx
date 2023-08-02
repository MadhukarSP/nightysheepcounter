import {useEffect, useState} from 'react';

const INTERVAL = 2290;
let interval: NodeJS.Timeout;

const useSheepJump = () => {
  const [sheepCounter, setSheepCount] = useState(0);
  const [displayRandomSheep, setDisplayRandomSheep] = useState(false);
  const [displaySleepButton, setDisplaySleepButton] = useState(false);
  const [gotoSleep, setGoToSleep] = useState(false);

  useEffect(() => {
    interval = setInterval(() => {
      setSheepCount(count => count + 1);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sheepCounter && sheepCounter % 10 === 0) {
      setDisplayRandomSheep(true);
      setTimeout(() => {
        setDisplayRandomSheep(false);
      }, 3000);
    }
  }, [sheepCounter]);

  const handleImageClick = () => {
    if (gotoSleep) {
      setSheepCount(0);
    }
    setDisplaySleepButton(!displaySleepButton);
  };

  const handleSleepButtonClick = () => {
    if (gotoSleep) {
      setGoToSleep(false);
      setDisplaySleepButton(false);
      interval = setInterval(() => {
        setSheepCount(count => count + 1);
      }, INTERVAL);
    } else {
      setGoToSleep(true);
      setSheepCount(0);
      clearInterval(interval);
      setDisplayRandomSheep(false);
    }
  };

  return {
    sheepCounter,
    setSheepCount,
    displayRandomSheep,
    setDisplayRandomSheep,
    displaySleepButton,
    setDisplaySleepButton,
    gotoSleep,
    setGoToSleep,
    handleImageClick,
    handleSleepButtonClick,
  };
};

export default useSheepJump;
