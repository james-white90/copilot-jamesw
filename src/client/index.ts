// functions that would act as middle man between front end and back end 
// function get everything
// get a topic
//etc. 

//add the into a react useeffect (useeffect is the hook you want to use whenever you have any async call to a backend api aka sideffects)

//getting a couple examples that i can pull into the UI so I can display it 
//work on the crud piece to it 
//jimmy j (jdarabi James Darabi) or Nate Wittstock 
//keith is great with front end 

//export things you want to use in other files
// any time one of those items in dependency array useeffect will be called 
// when you want to update once 

import { StudyData, Category } from '../services/types'
import studyData from '../services/data.json'

export function getAllData(): StudyData {
    return studyData
    //will return studyData which is your type. will always believe that this returns studyData.
}

export function getCategory(name: string): Category | undefined {
    //account for undefined
    //make everything lowercase
    //make sure it is a string
    return getAllData().categories.find(category => category.name === name)
    //this is returning studyData.categories which is an array and then using (find) to get the category name that strictly equals the name we put in
}
//if it's expecting an array it will say (doesn't have specific array methods). 
//edit this client call to filter over study data and return the category where the category name matches the category that you are sending into this function
//use find method to get the first one to match this criteria 