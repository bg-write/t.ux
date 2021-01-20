import React, { useState, useEffect } from 'react';

import * as U from '../../components/TuxComponents/UniversalComponents';
import ActivityHeader from '../../components/ActivityHeader/ActivityHeader';
import ActivityBody from '../../components/ActivityBody/ActivityBody';
import activityService from '../../services/activityService';
import SideBarNav from '../../components/SideBarNav/SideBarNav';
// import test from '../../SampleData/img/'
// import Timer from 'react-compound-timer';
import { HeuristicsSampleData } from '../../SampleData/HeuristicsSampleData';

const Activity = ({ activityId }) => {
  // State Hooks
  const [activityData, setActivityData] = useState(HeuristicsSampleData);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [started, setStarted] = useState(null);
  const [completed, setCompleted] = useState('-10');

  const getActivityData = () => {
    return activityService.getOne(activityId);
  };

  // useEffect(() => {
  //   getActivityData().then((data) => setActivityData(data));
  // }, []);

  const { sections, topic } = activityData;
  // Variables
  const currentSection = sections && sections[currentSectionIndex];
  const currentModule =
    currentSection && currentSection.modules[currentModuleIndex];

  // Helper Functions
  const handleJumpToSection = (index) => {
    setCurrentSectionIndex(index);
    setCurrentModuleIndex(0);
    convertIndexToPercent(index);
  };

  const incrementCurrentSection = () => {
    setCurrentSectionIndex(currentSectionIndex + 1);
  };

  const handleCurrentSection = () => {
    incrementCurrentSection();
    // Push new section data into section array
    // Reset Module Index to 0
    setCurrentModuleIndex(0);
    // Convert to percentage for Progress Bar
    convertIndexToPercent(currentSectionIndex);
  };

  const updateCurrentModule = () => {
    setCurrentModuleIndex(currentModuleIndex + 1);
  };

  const handleCurrentModule = () => {
    currentModuleIndex < currentSection.modules.length - 1
      ? updateCurrentModule()
      : handleCurrentSection();
  };

  const handleAnswers = (answers) => {
    console.log(answers);
  };

  const convertIndexToPercent = (newIndex) => {
    const index = newIndex - 1;
    const completed = index === 0 ? 0 : `${index}0`;
    setCompleted(completed);
  };

  const handleStarted = () => {
    setStarted(true);
  };
  return (
    activityData && (
      <U.Main>
        <ActivityHeader
          topic={topic}
          name={currentSection.name}
          completed={completed}
        />
        <ActivityBody
          sections={sections}
          currentModule={currentModule}
          links={activityData.links}
          started={started}
          currentModule={currentModule}
          handleAnswers={handleAnswers}
        />
        <SideBarNav
          sections={sections}
          currentSection={currentSection}
          currentSectionIndex={currentSectionIndex}
          setCurrentSectionIndex={setCurrentSectionIndex}
          currentModule={currentModule}
          currentModuleIndex={currentModuleIndex}
          handleJumpToSection={handleJumpToSection}
          handleCurrentSection={handleCurrentSection}
          handleCurrentModule={handleCurrentModule}
          started={started}
          handleStarted={handleStarted}
        />
      </U.Main>
    )
  );
};

export default Activity;
