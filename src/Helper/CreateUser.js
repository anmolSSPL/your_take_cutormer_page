export const createUser = async (userData ) => { 

    const baseUrl = "http://localhost:3037";
    try {
      const response = await fetch(`${baseUrl}/api/user/public/create`, {
        method: "POST",
        body: JSON.stringify(userData),
        redirect: "follow",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json(); // Assuming API returns JSON
      return result;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };
  