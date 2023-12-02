const apiURL = "http://localhost:8080";

export async function fetchAvailablePlaces() {
  const response = await fetch(`${apiURL}/places`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch(`${apiURL}/user-places`, {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to update the user data");
  }
  return data.message;
}

export async function fetchUserPlaces() {
  const response = await fetch(`${apiURL}/user-places`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch user places");
  }
  return resData.places;
}
