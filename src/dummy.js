   const currentUser=db.users.doc(user.phoneNumber).get().then(doc=>{
      console.log(doc.id)
       //if users data is present in db
    if(user.phoneNumber===db.formatedDoc(doc).mobNo){
      dispatch({type:OTP,payload:db.formatedDoc(doc)})
      console.log('user is already in db')
      history.push('/profile')
    }


    //if user is trying to sigin with email id present in db
    if(user.phoneNumber===db.formatedDoc(doc).mobNo&&(email||name)){
      alert('user with email id already exits')
      //emtying all the input fileds
      setEmail('')
      setName('')
      setNumber('')
      setIsNumber(false)
      return;
    }




    if(!user.phoneNumber===db.formatedDoc(doc).mobNo&&(email||name)){
      //if user data is not present in db
      const newUser=db.users.doc(result.user.phoneNumber).set({
        name:name,
        email:email,
        mobNo:number,
        userId:result.user.uid
    })
    .then(()=>{
      console.log('user saved sucessfully')
      dispatch({type:OTP,payload:{name,email,userId:result.user.uid,mobNo:number}})
      history.push('/profile')
    })
    .catch((err)=>{
      console.log(err)
      console.log('unable to save user')
    })
    }
    else{
    const newUser=db.users.doc(result.user.phoneNumber).set({
      name:name,
      email:email,
      mobNo:number,
      userId:result.user.uid
  })
  .then(()=>{
    console.log('user saved sucessfully')
    dispatch({type:OTP,payload:{name,email,userId:result.user.uid,mobNo:number}})
    history.push('/profile')
  })
  .catch((err)=>{
    console.log(err)
    console.log('unable to save user')
  })

  }
   })
