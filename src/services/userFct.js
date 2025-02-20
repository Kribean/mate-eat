export const getJiraniAccount = () => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("jiraniApp");
      return data ? JSON.parse(data) : null;
    }
    return null;
  };
  
  export const getConnectedToCompanyAccount = async (email) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/entreprises/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response?.ok) {
        saveInLocal({ user: null })
        return { user: null };
      }
  
      const result = await response.json();
      saveInLocal({ user: {...result,type:"company"} })
  
      return { user: {...result,type:"company"} };
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      saveInLocal({ user: null })
      return { user: null };
    }
  };
  

  export const saveInLocal = async (obj) => {
    // obj est l'objet du type {user:...}
    localStorage.setItem("jiraniApp", JSON.stringify(obj));
  };

  export const getInLocal = () => {
    const x = localStorage.getItem("jiraniApp");
    if(x)
    {
      return JSON.parse(x)?.user
    }
    return null
  };