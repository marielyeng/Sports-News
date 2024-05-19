**Sports News App**

This is a sports news application that provides users with the latest updates and news from the world of sports. The application uses mock JSON data to simulate real-world sports news articles. It's built using TypeScript, ReactJS, GraphQL, and a BFF (Backend For Frontend) architecture.

# Features
View the latest sports news articles
Filter articles by type (e.g., basketball, football)
View detailed information for each article
Easy-to-use interface
Technologies Used
TypeScript: TypeScript is used to add static typing to JavaScript, providing better tooling and scalability.
ReactJS: ReactJS is a JavaScript library for building user interfaces. It's used to create the frontend of the sports news app, providing a responsive and interactive experience.
GraphQL: GraphQL is a query language for APIs. It's used to efficiently retrieve data from the backend server and provides flexibility in defining data requirements.
BFF (Backend For Frontend): The BFF architecture pattern involves creating a dedicated backend server for the frontend application. This allows for better separation of concerns and flexibility in handling frontend-specific requirements.
Getting Started
To get started with the Sports News App, follow these steps:

Clone the repository: git clone <repository-url>
Install dependencies: npm install
Start the development server: npm start
Open your browser and navigate to http://localhost:3000
Folder Structure
java
Copy code
sports-news-app/
│
├── src/
│   ├── components/
│   │   ├── ArticleCard.tsx
│   │   ├── ArticleDetails.tsx
│   │   └── ...
│   ├── graphql/
│   │   ├── queries.graphql
│   │   └── ...
│   ├── services/
│   │   ├── articleApi.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
│
├── public/
├── README.md
└── package.json

# Contributing
Contributions are welcome! If you'd like to contribute to the Sports News App, feel free to open a pull request with your changes. Please adhere to the code of conduct and contributing guidelines when submitting contributions.

# License
This project is licensed under the MIT License.
