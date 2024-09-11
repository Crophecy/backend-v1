# Crop Recommendation System

A machine learning-based crop recommendation system designed to predict suitable crops based on soil and environmental parameters. The system achieves 93% accuracy and supports multilingual functionality in three languages. It integrates a robust machine learning model into a web application to enhance accessibility and user engagement.

## Features

- **High Accuracy**: Achieves 93% accuracy in predicting suitable crops.
- **Comprehensive Parameters**: Utilizes 7 different soil and environmental parameters, including pH levels, NPK values, rainfall, etc.
- **Multilingual Support**: Provides functionality in three languages to cater to a diverse user base.
- **Seamless Integration**: Incorporates a powerful ML model into the web application for enhanced user experience.

## Tech Stack

- **Backend**: Express.js, Node.js, Python3
- **Frontend**: React.js
- **Machine Learning**: Python-based ML model

## Installation

Follow these steps to set up the application locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/therishabhsharma03/crop-recommendation-system.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd crop-recommendation-system
   ```

3. **Install backend dependencies:**
   ```bash
   npm install
   ```

4. **Navigate to the `client` directory and install frontend dependencies:**
   ```bash
   cd client
   npm install
   ```

5. **Set up environment variables:**
   Create a `.env` file in the root directory with the following configurations:
   - `MONGO_URI`: MongoDB connection string
   - `PORT`: Port number for the server
   - `ML_MODEL_PATH`: Path to the machine learning model file
   - `LANGUAGES`: List of supported languages

6. **Start the backend server:**
   ```bash
   npm run server
   ```

7. **Start the frontend server:**
   ```bash
   cd client
   npm start
   ```

8. **To run both the backend and frontend concurrently:**
   ```bash
   npm run dev
   ```

## Backend Implementation

The backend of the Crop Recommendation System is built using Express.js and Node.js. It handles API requests, processes data, and integrates with the Python-based machine learning model.

### Setting Up the Backend

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server:**
   ```bash
   npm run start
   ```

### API Endpoints

- **POST /predict**: Submits soil and environmental parameters to receive crop recommendations.
  - **Request Body**:
    ```json
    {
      "pH": "value",
      "N": "value",
      "P": "value",
      "K": "value",
      "rainfall": "value",
      "temperature": "value",
      "humidity": "value"
    }
    ```
  - **Response**:
    ```json
    {
      "recommended_crops": ["Crop1", "Crop2", "Crop3"]
    }
    ```

### ML Model Integration

The backend server communicates with a Python script that loads and utilizes the machine learning model. Ensure the `ML_MODEL_PATH` in the `.env` file points to the location of your ML model.

## Frontend

The frontend is built using React.js and provides an interactive user interface for inputting parameters and displaying crop recommendations.

