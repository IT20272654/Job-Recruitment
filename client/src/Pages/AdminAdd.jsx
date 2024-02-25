import React, { useState } from 'react'

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as refdata , set } from "firebase/database";
import { v4 } from 'uuid';


function AdminAdd() {
   const [name,setName] = useState('')
   const [img,setImg] = useState('')
   const [email,setemail] = useState('')
   const [Phone,setphone] = useState('')


  const handleImg = async (e)=>{
  
const file = e.target.files[0];

const storage = getStorage();


const metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, 'images/' + file.name);
const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error)=>{
    console.log('Uploaded Error')
  },
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setImg(downloadURL);
      console.log(downloadURL)
    });
  }
);


  }
 

  const handleSubmit = async ()=>{
    


  const db = getDatabase();
  console.log(img)
  set(refdata(db, 'users/' +v4()), {
    username: name,
    email: email,
    profile_picture : img,
    phone_number:Phone,
  });


  }

return (
    <div>
        Screen Shot of Bug : <input type="file" onChange={(e)=>handleImg(e)}/>
        Reporter Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        Reporter Email : <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
        Phone Number : <input type="text" value={Phone} onChange={(e)=>setphone(e.target.value)} />
        <input type="submit" value="Add the Contact" onClick={handleSubmit}/>
    </div>
  )
}

export default AdminAdd