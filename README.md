# WanderLust

WanderLust is a full-stack web application for hotel listing and booking services. It allows users to explore, add, and review hotels, providing a seamless travel experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure sign-up and login functionality using Passport.js.
- **Hotel Listings**: Users can create, update, and delete hotel listings.
- **Image Uploads**: Integration with Cloudinary for storing and managing images.
- **Reviews System**: Users can add and manage reviews for listed hotels.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript, EJS templates
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Storage**: Cloudinary
- **Authentication**: Passport.js
- **Styling Framework**: Bootstrap 5.3.3

## Installation

To run this project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/VAMSHIYADAV46/WanderLust.git
   cd WanderLust
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_KEY=your_cloudinary_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

- **Browse Listings**: View all available hotel listings on the homepage.
- **Create a Listing**: Sign up or log in to add a new hotel.
- **Edit/Delete Listings**: Manage your listings through the user dashboard.
- **Add Reviews**: Share your experiences by adding reviews to hotel listings.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:
   
   ```bash
   git checkout -b feature-name
   ```

3. **Make your changes and commit them**:

   ```bash
   git commit -m "Description of changes"
   ```

4. **Push to your forked repository**:

   ```bash
   git push origin feature-name
   ```

5. **Open a pull request** detailing your changes.

## License

This project is open-source and available under the MIT License.
