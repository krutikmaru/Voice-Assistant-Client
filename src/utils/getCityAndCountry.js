// Function to get city and country based on coordinates
export const getCityAndCountry = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();

    // Get city and country
    const city =
      data.address.city ||
      data.address.village ||
      data.address.town ||
      data.address.county;
    const country = data.address.country;

    return {
      city,
      country,
      coords: { latitude, longitude },
    };
  } catch (error) {
    console.error("Error getting city and country:", error.message);
  }
};
