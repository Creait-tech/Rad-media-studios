// Sample data submission to Self-Trust Assessment webhook

const webhookUrl = "https://services.leadconnectorhq.com/hooks/gjPoIOj7eeVxrvAnenGh/webhook-trigger/c83884e9-fb4b-4355-a7fb-b14e8715c4a9";

const sampleData = {
  email: "sample.actor@example.com",
  firstName: "Jane",
  lastName: "Doe",
  answers: {
    q1: "B",
    q2: "C", 
    q3: "A",
    q4: "B",
    q5: "C",
    q6: "A",
    q7: "B",
    q8: "C"
  },
  score: 18,
  archetype: "The Emerging Performer",
  completedAt: new Date().toISOString(),
  source: "Self-Trust Assessment",
  website: "rhavynndrummer.com"
};

async function sendSampleData() {
  console.log("Sending sample assessment data to webhook...");
  console.log("Data:", JSON.stringify(sampleData, null, 2));
  
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sampleData),
    });

    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);
    
    const text = await response.text();
    console.log("Response body:", text || "(empty)");
    
    if (response.ok) {
      console.log("\nSample data sent successfully!");
    } else {
      console.log("\nWebhook returned non-OK status");
    }
  } catch (error) {
    console.error("Error sending data:", error.message);
  }
}

sendSampleData();
