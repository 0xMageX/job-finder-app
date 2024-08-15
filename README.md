Job Finder App

A React Native application built with Expo for finding and bookmarking job listings. This app features infinite scrolling to load job listings, the ability to view job details, and offline bookmarking of jobs.

Features
Infinite Scroll: Continuously fetch and display job listings as the user scrolls.
Job Details: View detailed information about each job by clicking on job cards.
Bookmark Jobs: Save jobs to bookmarks for offline access.
Offline Storage: Store bookmarked jobs locally for offline viewing.
Loading and Error Handling: Properly handle loading states and display error messages.
Getting Started
Prerequisites
Node.js: Ensure Node.js is installed. Download from nodejs.org.

Expo CLI: Install Expo CLI globally.

bash
Copy code
npm install -g expo-cli
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/job-finder-app.git
cd job-finder-app
Install Dependencies

bash
Copy code
npm install
Start the Development Server

bash
Copy code
npx expo start
This will open the Expo Go app and display a QR code for scanning with your mobile device.

Project Structure
go
Copy code
JobApp/
├── App.js
├── assets/
├── components/
│   ├── JobCard.js
│   ├── Loader.js
│   ├── Error.js
│   └── BookmarkButton.js
├── screens/
│   ├── JobsScreen.js
│   ├── JobDetailScreen.js
│   └── BookmarksScreen.js
├── utils/
│   ├── api.js
│   └── storage.js
├── navigation/
│   └── AppNavigator.js
├── App.json
└── package.json
Configuration

API Endpoint: The app fetches job data from https://testapi.getlokalapp.com/common/jobs?page=1. Ensure this endpoint is reachable and provides data in the expected format.
Usage
Jobs Screen: Displays job listings with infinite scrolling. Users can load more jobs by scrolling down.
Job Details Screen: Click on a job card to view detailed information.
Bookmarks Screen: View and manage bookmarked jobs. Bookmarks are stored locally for offline access.

Development
Running Locally: Use npx expo start to launch the development server. This will provide a QR code to view the app on a mobile device.

Building for Production: Use npx expo build:android or npx expo build:ios for production builds.

Troubleshooting
Error: 'adb' is not recognized as an internal or external command: This error indicates that the Android SDK is not configured correctly. If you are using Expo, ensure you are running the app on a mobile device or emulator that has Expo Go installed.

Contribution
Contributions are welcome! If you find any issues or have suggestions for improvements, please fork the repository and submit a pull request. For any issues, open an issue on GitHub.

License
This project is licensed under the MIT License. See the LICENSE file for details.