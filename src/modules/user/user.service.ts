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
  
  
  
  // delete.service.ts
  