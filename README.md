# Unicorn Weather Forecast

Welcome to the Unicorn Weather Forecast! This is a whimsical web application where users can log in to view the weather forecast for magical places like Rainbowville, Sparkle Town, and Glitter Peak.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)

## Features

- **Firebase Authentication**: Users can sign in to access the weather forecast.
- **Axios with Retry Logic**: API requests to the backend are resilient, with retry logic implemented to handle temporary failures.
- **Loading State**: Displays a spinner while data is being fetched.
- **BootstrapVue for Styling**: Responsive and clean UI with minimal custom CSS.
- **Protected Routes**: Access to weather data is restricted to authenticated users only.

## Technologies Used

- **Vue 3**: The progressive JavaScript framework.
- **BootstrapVue 3**: Provides Bootstrap components and styling for Vue.
- **Firebase**: For authentication and securing API requests.
- **FastAPI**: The backend framework serving the whimsical weather data.
- **Axios**: For making HTTP requests, with retry logic provided by `axios-retry`.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- Python installed for the FastAPI backend.
- Firebase account set up with a project and service account.

### Frontend Setup

1. Clone the repository:

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a `firebase.js` file in the `src` directory with your Firebase config.
   - Ensure Firebase authentication is enabled in your project.

4. Start the Vue development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Create and activate a virtual environment:
   ```bash
   python -m venv env
   source env/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install fastapi uvicorn firebase-admin
   ```

3. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

## Usage

- Open the frontend in your browser via the development server URL (e.g., `http://localhost:3000`).
- Log in using your Firebase credentials.
- View the weather forecast for various magical locations.


## Acknowledgments

- This project uses Firebase for authentication and secure communication between the frontend and backend.
- BootstrapVue helps create a polished and responsive UI with minimal effort.
- Axios with `axios-retry` ensures that the application is resilient against transient network issues.