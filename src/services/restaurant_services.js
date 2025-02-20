export const getAllRestoByCompanyId = (id) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/entreprises/${id}/restaurants`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return [];
        }
        return response.json();
      })
      .then((result) => result)
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
        return [];
      });
  };
  
  export const createRestoByCompanyId = (businessName,
    idEntreprise,
    businessAddress,
    postalCode,
    typeOfFoodServed,
    bookingURL) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/restaurants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        businessName,
        idEntreprise,
        businessAddress,
        postalCode,
        typeOfFoodServed,
        bookingURL,
      })
    })
  };

  export const deleteRestoById = (id) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/restaurants/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
  };