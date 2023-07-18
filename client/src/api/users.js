export const fetchUser = async (token) => {
  try {
    const response = await fetch(`http://localhost:3000/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
