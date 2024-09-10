# Simple Dashboard

This project is a web-based dashboard that displays various types of charts using data from a Django backend and a Next.js frontend.

## Features

- Interactive dashboard with multiple chart types:
  - Candlestick Chart
  - Line Chart
  - Bar Chart
  - Pie Chart
- Dropdown menu to select different chart types
- RESTful API backend providing data for charts
- Client-Side Rendering (CSR) for dynamic data fetching and rendering

## Technology Stack

### Backend:
- Django
- Django Rest Framework
- django-cors-headers

### Frontend:
- Next.js 13 (App Router)
- React
- Recharts for charting
- Client-Side Rendering (CSR) approach

## Implementation Details

- The frontend uses Client-Side Rendering (CSR) instead of Server-Side Rendering (SSR).
- Data is fetched dynamically on the client side using React hooks (useState and useEffect).
- This approach allows for real-time updates and interactive chart selection without page reloads.

## Installation and Setup

### Backend (Django):

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`

4. Install required packages:
   ```
   pip install django djangorestframework django-cors-headers
   ```

5. Run migrations:
   ```
   python manage.py migrate
   ```

6. Start the Django server:
   ```
   python manage.py runserver 8080
   ```

### Frontend (Next.js):

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Usage

1. Ensure both backend and frontend servers are running.
2. Open a web browser and go to `http://localhost:3000` (or the port specified by Next.js).
3. Use the dropdown menu to switch between different chart types.
4. The charts will load dynamically on the client side as you select different options.

## API Endpoints

- Candlestick Data: `http://localhost:8080/api/candlestick-data/`
- Line Chart Data: `http://localhost:8080/api/line-chart-data/`
- Bar Chart Data: `http://localhost:8080/api/bar-chart-data/`
- Pie Chart Data: `http://localhost:8080/api/pie-chart-data/`

## Contributing

[Include guidelines for contributing to your project]

## License

[Specify the license under which your project is released]