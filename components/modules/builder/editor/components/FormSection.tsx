import React from 'react'
import ActivitiesLayout from '../modules/activities/ActivitiesLayout'
import BasicLayout from '../modules/basic/BasicLayout'
import EducationLayout from '../modules/education/EducationLayout'
import ExperienceLayout from '../modules/experience/ExperienceLayout'
import VolunteeringLayout from '../modules/volunteering/VolunteeringLayout'
import SkillsLayout from '../modules/skills/SkillsLayout'
import AwardsLayout from '../modules/awards/AwardsLayout'

interface Id {
    id: number;
  }
  
  const switchLayouts = (id: number): JSX.Element => {
    switch (id) {
      case 1:
        return (
          <BasicLayout/>
        );
      case 2:
        return (
          <EducationLayout/>
        );
      case 3:
        return (
          <SkillsLayout/>
        );
      case 4:
        return (
          <ExperienceLayout/>
        );
      case 5:
        return (
          <VolunteeringLayout/>
        );
      case 6:
        return (
          <AwardsLayout/>
        );
      case 7:
          return(
            <ActivitiesLayout/>
          )
      default:
        return <></>;
    }
  };

const FormSection = (props: Id) => {
  return (
    <div className='bg-white mt-[40px] max-h-[700px] p-10 pb-[50px] overflow-x-scroll rounded-xl shadow-xl'>
        {switchLayouts(props.id)}
    </div>
  )
}

export default FormSection