import React from "react";
import BasicDetailStore from "../../../../../../store/basic_store";

const BasicLayout = () => {
  const { values, changeValue } = BasicDetailStore((state)=>({
    values:state.values,
    changeValue:state.changeValue
  }))
  const onChangeHandler = (value: any, key:string  )=>{
    const newValue = values
    let arrayValue = newValue['profiles']
    if(key=="name" || key=='email' || key=='phone' || key=='image' || key=='label' )
      newValue[key] =value
    if(key=='github'|| key=='linkedin' || key =="leetcode" || key=="codeforces" || key=="codechef"){
      arrayValue = [...arrayValue.map(item => {
        if (item.profile_name == key) {
          return {
            'profile_name': key,
            'profile_url': value,
          }
        } else
          return item
      })]
    }
    newValue['profiles'] = arrayValue
    changeValue(newValue)
    console.log(values)
  }
  
  return (
  <div>
    BasicDetail
  </div>
  )
};

export default BasicLayout;
