import React, { useEffect } from "react";
import {IExperienceItem} from "../../../../../../store/experience.interface"
import { ExperienceDetailStore } from "../../../../../../store/experience_store";
import TextField from '@mui/material/TextField';


const ExperienceLayout = () => {

  const {experiences,setExperience ,onmoveup, onmovedown, updateExperience}  = ExperienceDetailStore((state)=>({
    experiences:state.experiences,
    setExperience:state.setExperience,
    onmoveup:state.onmoveup,
    onmovedown:state.onmovedown,
    updateExperience:state.updateExperience
  }))

  const moveUp = (id: number) => {
    onmoveup(id)
    console.log(experiences)
  }
  const moveDown = (id: number) => {
    onmovedown(id)
    console.log(experiences)
  }
  const addExperience = ()=>{
    let newExperience:IExperienceItem = {
      id : experiences.length,
      company_name:"",
      position:"",
      url:"",
      startDate:"",
      endDate:"",
      summary:"",
      isWorkingHere:false
    }
    experiences.push(newExperience)
    setExperience(experiences)
    console.log(experiences)
  }

  const removeExperience = (id:number)=>{
      let newExperiences:IExperienceItem[] = experiences
      newExperiences.splice(id,1)
      setExperience(newExperiences)
      console.log(experiences)
  }

  const onChangeHandler = (value:string|boolean, key:string, id:number)=>{
    let newObj: IExperienceItem = experiences[id]
    
    if(typeof value === "string"){
      if (key == "company_name" || key == "position" || key == "url" || key == "startDate" || key == "endDate" || key == "summary"){
        newObj[key] = value
      }
    }else{
      newObj["isWorkingHere"] = value
    }
    updateExperience(id, newObj)
    console.log(experiences);
  }

  useEffect(()=>{
    console.log(experiences);
  },[])

  return (
  <div>
      ExperienceLayout
  </div>);
};

export default ExperienceLayout;
