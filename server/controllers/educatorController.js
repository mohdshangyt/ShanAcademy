 import { clerkClient } from '@clerk/express'
 import User from '../models/User.js'

// update roll to educator
export const updateRoleToEducator = async (req, res)=>{
    try{
        const userId = req.auth.userId
        console.log("AUTH:", req.auth)


        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'educator', 
            }
        })
        res.json({ success : true, message: " You can publish a course now"})

    }catch (error){
        res.json({ success: false, message : error.message})
    }
}