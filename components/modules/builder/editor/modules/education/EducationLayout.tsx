import React from "react";
import { EducationDetailStore } from "../../../../../../store/education_store";
import {IEducationItem} from "../../../../../../store/education.interface"

const EducationLayout = () => {
  const { academics, setEducation, updateEducation, onmoveup, onmovedown} = EducationDetailStore((state)=>({
    academics:state.academics,
    setEducation: state.setEducation,
    updateEducation:state.updateEducation,
    onmoveup:state.onmoveup,
    onmovedown:state.onmovedown
  }))

  const addEducation = ()=>{
    let newEducation: IEducationItem = { 
      id:academics.length,
      institution:"",
      degree:"",
      course:"",
      startDate:"",
      endDate:"",
      score:""
    } 

    let newArray: IEducationItem[] = academics
    newArray.push(newEducation)
    setEducation(newArray) 
    console.log(academics)
  }
  
  const removeEducation = (id:number)=>{
    let newArray:IEducationItem []= academics
    newArray.splice(id, 1)
    setEducation(newArray)
    console.log(academics);
  }

  const onMoveUp = (id:number) =>{
    onmoveup(id)
    console.log(academics); 
  }
  
  const onMoveDown = (id:number) =>{
    onmovedown(id)
    console.log(academics);
  }

  const onChangeHandler = (id:number, value:string, key:string)=>{
    let objTochange: IEducationItem = academics[id]
    if(key=="institution" || key=="degree")
      objTochange[key] = value
    updateEducation(id, objTochange)
    console.log(academics)
  }

  return <div>
    Education
  </div>;
};

export default EducationLayout;
