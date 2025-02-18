# IP Address Tracker

A responsive IP Address Tracker built with React and TypeScript. This app lets users search for any IP address or domain, fetches geolocation data from [ipinfo.io](https://ipinfo.io), and displays the results on an interactive map using React-Leaflet. The project is designed for a seamless experience across mobile, tablet, and desktop devices.

## Overview

The IP Address Tracker allows users to:

- Search for IP addresses or domain names.
- Retrieve geolocation information, including location, timezone, and ISP.
- View the location on an interactive map that adjusts its zoom based on screen size.
- Experience smooth error handling that retains the last valid location if a search fails.

## Live Demo

Check out the live demo here.

## Features

- **IP & Domain Search:** Input an IP address or domain to fetch geolocation data.
- **Interactive Map:** Dynamic map display with responsive zoom adjustments using React-Leaflet.
- **Responsive Design:** Optimized UI for desktop, tablet, and mobile views.
- **Robust Error Handling:** Displays an error message on failed searches while retaining the last valid location.
- **Real-Time Data Fetching:** Integration with the ipinfo.io API for accurate geolocation details.

## Technologies Used

- **React** – UI Library
- **TypeScript** – Programming Language
- **Tailwind CSS** – Styling and Responsive Design
- **React-Leaflet** – Interactive Map Display
- **Axios** – HTTP Client for API Requests
- **ipinfo.io** – Geolocation API Service

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/username/ip-address-tracker.git
   ```

2. **Navigate to the project directory**:

   ```
   cd ip-address-tracker
   ```

3. **Install dependencies** :

   ```
   npm install
   ```

4. **Start the development server**:

   ```
   npm run dev
   ```

The app will run at port given by terminal.

## Usage

1. Enter an IP address or domain in the search bar.
2. Press Enter or click the search icon.
3. View the geolocation data and the interactive map.
4. If a search fails, an error message is displayed while the last valid location remains visible.

## License

This project is licensed under the MIT License.

## Acknowledgements

ipinfo.io for providing the geolocation API.
The React and React-Leaflet communities for their outstanding libraries.
Frontend Mentors for inspiring the project challenge.
