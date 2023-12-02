# PlacePicker

PlacePicker is a React JS and Express JS practice project showcasing travel destinations. This web app includes features to add upcoming trips and explore a curated list of all travel places.

## Project Structure

The project directory is organized into two main components: `backend` and `frontend`. Each component has its own Dockerfile for containerization.

- `backend/`: Contains the backend code for the project, including server logic and API endpoints.

  - Dockerfile: Used to build the Docker image for the backend container.

- `frontend/`: Holds the frontend code for the project, including React components and styles.
  - Dockerfile: Used to build the Docker image for the frontend container.

## Docker Setup

### Backend Container

1. Navigate to the `backend/` directory.
2. Run `docker build -t placepicker-backend .` to build the backend Docker image.
3. Run the backend container: `docker run -d -p 8080:8080 placepicker-backend`.

### Frontend Container

1. Navigate to the `frontend/` directory.
2. Run `docker build -t placepicker-frontend .` to build the frontend Docker image.
3. Run the frontend container: `docker run -d -p 3000:3000 placepicker-frontend`.

## Docker Compose (Optional)

For simplified orchestration, you can use Docker Compose to manage both containers together.

1. At the root of the project, run `docker-compose up`.
2. Access the application at `http://localhost:3000` or using the IP of your cloud service instance `http://<ip>:3000` .

Feel free to explore and enjoy your virtual travel experience!

**Note for Production:**
While deploying in a production environment, update the backend API URL in the frontend code (`frontend/src/http.js`):

```javascript
const apiURL = "http://<your-production-backend-ip>:<port>";
```
