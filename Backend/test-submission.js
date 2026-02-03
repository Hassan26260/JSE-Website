
import fs from 'fs';
import { Blob } from 'buffer';

async function testSubmission() {
    console.log("Starting submission test...");

    try {
        const fileBuffer = fs.readFileSync('dummy.pdf');
        const fileBlob = new Blob([fileBuffer], { type: 'application/pdf' });

        const formData = new FormData();
        formData.append('name', 'Test User');
        formData.append('email', 'test@example.com');
        formData.append('mobile', '1234567890');
        formData.append('message', 'This is a test application from the verification script.');
        formData.append('internshipTitle', 'Civil Engineering');
        // Node's FormData needs the filename as the 3rd argument for file uploads
        formData.append('resume', fileBlob, 'dummy.pdf');

        const response = await fetch('http://localhost:5000/api/applications', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (response.ok) {
            console.log("\nSUCCESS: Application submitted successfully!");
            console.log("Response:", result);
        } else {
            console.error("\nFAILED: Server returned error.");
            console.error("Status:", response.status);
            console.error("Response:", result);
        }

    } catch (error) {
        console.error("\nERROR: execution failed");
        if (error.cause && error.cause.code === 'ECONNREFUSED') {
            console.error("Connection refused. Make sure the backend server is running on port 5000.");
        } else {
            console.error(error);
        }
    }
}

testSubmission();
