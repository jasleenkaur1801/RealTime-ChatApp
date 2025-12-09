import Message from "../models/Message.js";
import User from "../models/User.js";

//get all users except the logged in user
export const getUsersForSidebar = async ()=>{
    try{
        const userId = requestAnimationFrame.user._id;
        const filteredUsers = await User.find({_id: {$ne: userId}}).select("-password");
        //count number of messages not seen
        const unseenMessages = {}
        const promises = filteredUsers.map(async ()=>{
            const messages = await Message.find({senderId: user._id, receiverId: userId, seen: false})
            if(messages.length>0){
                unseenMessages[User._id] = messages.length;
            }
        })
        await Promise.all(promises);
    }catch(error){

    }
}