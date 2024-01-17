// Function to generate the API response
function generateAPIResponse() {
    const apiResponse = [];
  
    for (let i = 1; i <= 25; i++) {
      const entry = {
        id: i,
        title: `Song ${i}`,
        audioFile: "",
      };
  
      apiResponse.push(entry);
    }
  
    return apiResponse;
  }
  
  // Get the API response
  const apiResponse = generateAPIResponse();
  
  // Convert the response to JSON and log it
  const jsonString = JSON.stringify(apiResponse, null, 2);
  console.log(jsonString);
  