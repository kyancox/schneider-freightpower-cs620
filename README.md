# FreightPower - Enhancing Freight Search through Data-Driven Design

![UW Madison Computer Sciences](https://img.shields.io/badge/UW--Madison-CS620-c5050c?style=for-the-badge)
![Schneider](https://img.shields.io/badge/Schneider-FreightPower-ff6b35?style=for-the-badge)

A UX optimization project for Schneider's FreightPower Owner Operator application, reimagining the freight search experience through data-driven design principles.

## 📋 Project Overview

**Course:** CS 620 - University of Wisconsin-Madison, School of Computer, Data & Information Sciences

**Project Title:** Enhancing Freight Search through Data-Driven Design

### Project Mentors

**Gowtham Chowdary Sunkara** - Data Scientist Sr, Schneider  
📧 [SunkaraG@schneider.com](mailto:SunkaraG@schneider.com)  
📍 University of South Florida-Tampa, Florida

**David Dutkowski** - Engineering Manager, Schneider FreightPower  
📧 [DutkowskiD@schneider.com](mailto:DutkowskiD@schneider.com)  
📍 University of Northern Iowa, Cedar Falls, IA

### About FreightPower

Schneider FreightPower Owner Operator is a web app developed for drivers who have an owner-operator relationship with Schneider. The app allows users to search for and book available freight (loads) based on various criteria required for their daily operations. The tool was recently launched using an existing platform already serving over 17,000 monthly users outside of Schneider.

## 🎯 Project Goals

This project focuses on reimagining the freight search experience by addressing key UX challenges:

### Research Questions

1. **Scroll Behavior** - Do users tend to scroll very far down to find the load they choose to book? If so, is there a way to more compactly display large sets of search results within a relatively small mobile screen?

2. **Multi-Criteria Sorting** - Do users tend to re-sort their search results according to some criteria? If so, is there an opportunity to improve the default ranking of search results that considers multiple criteria (pickup date, total rate, etc.) at once?

3. **Proactive Information Display** - Do users tend to click into load details before booking freight? If so, is there a way to efficiently display load information as part of the initial display, rather than via some sequence of click actions?

4. **Personalized Recommendations** - Can we proactively display load recommendations even before users initiate a search, based on their historical search and booking behavior?

## 🚀 What We Built

This prototype includes two distinct experiences to compare traditional search patterns with an optimized, data-driven approach:

### 1. **FreightPower Demo** (`/demo`)
A faithful recreation of the current FreightPower search interface featuring:
- Traditional search form with filters (pickup date, delivery options, destination, radius)
- List-based search results with sorting options
- Individual load cards with detailed information
- Standard booking flow

### 2. **Optimized UI** (`/optimized`)
A reimagined experience incorporating UX improvements:
- **Personalized Feed**: "Loads for you" section based on recent activity
- **Proximity Grouping**: "Loads near you" with horizontal scrolling cards
- **Route-Based Organization**: Loads grouped by common routes (e.g., "California to Texas")
- **Compact Cards**: More information displayed in less space
- **Reduced Scrolling**: Horizontal scroll patterns to view more loads at once
- **Quick Search**: Simplified search bar for filtering and refinement

## 🛠️ Technologies

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Lucide React Icons
- **Runtime:** React 19

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd schneider-freightpower
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
schneider-freightpower/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── OptimizedLoadCard.tsx
│   │   └── search-results/  # Components for demo search UI
│   │       ├── BottomNav.tsx
│   │       ├── FilterBar.tsx
│   │       ├── Header.tsx
│   │       └── LoadCard.tsx
│   ├── data/
│   │   └── mockLoads.ts     # Sample freight load data
│   ├── types/
│   │   └── load.ts          # TypeScript type definitions
│   ├── demo/                # Traditional FreightPower interface
│   │   └── page.tsx
│   ├── optimized/           # Optimized UX interface
│   │   └── page.tsx
│   ├── results/             # Search results page (demo)
│   │   └── page.tsx
│   ├── book/                # Booking flow
│   │   └── [id]/
│   └── page.tsx             # Landing page with route selection
├── public/                  # Static assets
└── README.md
```

## 🎨 Key Features

### Optimized UI Highlights

#### 1. Personalized Recommendations
```tsx
// "Loads for you" banner based on user activity
<div className="bg-orange-300/90">
  <h2>Loads for you</h2>
  <p>Based on your recent activities</p>
</div>
```

#### 2. Horizontal Scrolling Cards
Displays more loads in a compact space, reducing vertical scrolling:
```tsx
<div className="overflow-x-auto scrollbar-hide">
  <div className="flex gap-3">
    {loads.map(load => <OptimizedLoadCard key={load.id} load={load} />)}
  </div>
</div>
```

#### 3. Intelligent Grouping
Loads are automatically grouped by:
- Proximity to user location
- Common routes (pickup → delivery patterns)
- Historical booking patterns

## 📱 User Flow

### Landing Page
1. User opens the app
2. Chooses between "FreightPower Demo" or "Optimized UI"

### Demo Flow
1. Enter search criteria (dates, location, radius)
2. View list of results
3. Sort/filter as needed
4. Click into load details
5. Book the load

### Optimized Flow
1. Immediately see personalized recommendations
2. Browse loads by proximity or route
3. Horizontal scroll through relevant options
4. Quick search to refine
5. One-tap to view details or book

## 🎓 Learning Outcomes

This project provides hands-on experience in:
- **UI/UX Design**: Designing production-level user interfaces for efficiency and usability
- **Search Algorithms**: Understanding search ranking and recommendation systems
- **Data Engineering**: Working with freight and logistics data
- **React/Next.js**: Building modern web applications with the latest frameworks
- **User Research**: Translating user behavior insights into design decisions

## 🌟 Why This Project Matters

### Real World Impact
Your solution could directly enhance the experience of Schneider's Owner Operators and the 17,000+ monthly users of the legacy platform for third-party freight carriers.

### Industry-Relevant Skills
- Gain experience designing and implementing robust search algorithms for large datasets
- Practice designing production-level UI that is intuitive, efficient, and user-friendly
- Develop highly sought-after skills in the tech industry

## 🔮 Future Enhancements

Potential areas for expansion:
- [ ] Integration with real freight data APIs
- [ ] Machine learning-based load recommendations
- [ ] Advanced filtering with natural language
- [ ] Push notifications for relevant loads
- [ ] Route optimization calculations
- [ ] Historical analytics dashboard
- [ ] A/B testing framework for UX variants

## 📝 Development Notes

### Mock Data
Currently using `mockLoads.ts` for demonstration purposes. In production, this would connect to Schneider's freight database.

### Responsive Design
All interfaces are optimized for mobile devices (iOS shown in examples) but work on desktop browsers for development.

### Component Architecture
- Modular components for easy testing and iteration
- Shared components between demo and optimized versions
- Type-safe with TypeScript for robust development

## 🤝 Contributing

This is an academic project for CS 620. For questions or collaboration:
- Contact the project mentors (emails above)
- Follow the project guidelines provided in class

## 📄 License

This project is developed for academic purposes in partnership with Schneider.

---

**Built with ❤️ by students at UW-Madison School of Computer, Data & Information Sciences**
