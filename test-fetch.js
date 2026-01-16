async function testRegister() {
  try {
    const uniqueId = Date.now();
    console.log("Sending request...");
    const response = await fetch(
      "https://bump2baby.onrender.com/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test User " + uniqueId,
          email: "testuser_" + uniqueId + "@example.com",
          password: "password123",
          role: "pregnant",
        }),
      }
    );

    console.log("Status:", response.status);
    const data = await response.json();
    console.log("Body:", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}

testRegister();
