import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Add = () => {

  var[name,setname]=useState("")
  var[friendName,setfriendname]=useState("")
  var[friendNickName,setfriendNickName]=useState("")
  var[DescribeYourFriend,setDescribeYourFriend]=useState("")



  const newvalue=()=>{
    const data={"name":name,"friendName":friendName,"friendNickName":friendNickName,"DescribeYourFriend":DescribeYourFriend}
    console.log(data)

    axios.post("https://dummyapifriends.herokuapp.com/add",data).then(
      (response)=>{
        console.log(response.data)
      }
    )
  }




  return (
    <div>
        <Header/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="label-form">Name</label>
                    <input onChange={(x)=>{setname(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="label-form">Friend name</label>
                    <input onChange={(x)=>{setfriendname(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="label-form">Friend Nick name</label>
                    <input onChange={(x)=>{setfriendNickName(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="label-form">Description</label>
                    <input onChange={(x)=>{setDescribeYourFriend(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={newvalue} class="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Add