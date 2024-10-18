import User from "./user.model";



// getby_id.service.ts
export const getUserByIdService = async (id: string) => {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  };
  
  
  // update.service.ts
export const updateUserService = async (userId: string, updateData: any) => {
  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true, // Return the updated document
    runValidators: true, // Ensure validators are run on updates
  }).select("-password");

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};


  
  
  // delete.service.ts
  