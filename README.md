# Storefront E-commerce Website

A modern and responsive e-commerce website built with Next.js, TypeScript, and Tailwind CSS. This project showcases a clean and user-friendly interface for browsing and purchasing products.

## 🌟 Features

- 🛍️ Product browsing
- ⭐ Product rating system with visual star ratings
- 📱 Fully responsive design for all devices
- 🚀 Fast and optimized performance
- 🎨 Modern UI built with shadcn/ui components
- 🔍 Dynamic Open Graph (OG) metadata for each product

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/babkenhovhannisyan/appcharge-storefront.git
   ```

2. Navigate to the project directory:

   ```bash
   cd storefront
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file:

   ```bash
   cp .env.example .env
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **API**: Fake Store API

## 📁 Project Structure

```
storefront/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Home page
│   │   ├── products/          # Product routes
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── ProductCard/      # Product card component
│   │   ├── StarRating/       # Star rating component
│   │   └── UI/               # shadcn/ui components
│   ├── api/                  # API integration
│   │   └── fakerAPI/        # Fake Store API client
│   └── utils/                  # Utility functions
├── public/                   # Static assets
└── package.json             # Project dependencies
```

## 🎨 UI Components

The project uses shadcn/ui components for a consistent and modern look:

- Button - For actions and navigation
- Card - For product display
- And more...

## 🔄 Data Fetching

The application uses the **Fake Store API** to fetch product data. Key features include:

- **Category Filtering**:

  - Dynamic category loading
  - URL-based category selection

- **Rating System**:
  - Visual star rating display
  - Responsive design

## 🚀 Deployment

The application is deployed on Vercel:
[View Demo](https://appcharge-storefront.vercel.app/)

### Fake Store API Constraints

1. **Pagination**:
   - The API doesn't support native pagination
   - Current implementation fetches 20 products
   - This approach works but isn't optimal for large product catalogs

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Next.js](https://nextjs.org/) for the amazing framework

## 🔮 Future Improvements

- 🔄 Implement **infinite scroll pagination** with **virtual list** rendering for enhanced performance with large datasets when **API** supports it
- 🔐 Add a secure user authentication system
- 💬 Add a comprehensive product reviews and comments system
- 🔍 Implement advanced search filters with multiple parameters
- ❤️ Add a product wishlist feature for a personalized shopping experience
