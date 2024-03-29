# Magnetic Navbar Animation with Framer Motion and Next.js

This project implements a magnetic navbar animation using Framer Motion and Next.js. The navigation bar items respond to mouse movements, creating a dynamic and engaging user experience.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building web applications.
- [Framer Motion](https://www.framer.com/motion/): A popular React library for creating smooth animations.

## Features

- **Magnetic Effect:** The navigation items exhibit a magnetic effect, following the user's mouse movements.
- **Link Highlight:** When a page is active, the corresponding navigation item is highlighted with an animated underline.
- **Smooth Transitions:** Animations are implemented with Framer Motion, providing smooth and visually appealing transitions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/magnetic-navbar-framer_motion.git

   ```

2. Navigate to the project directory:

   ```bash
   cd magnetic-navbar-framer_motion

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open http://localhost:3000 in your browser.

## Usage

1. The navigation bar contains links to different pages (Home, About, Contact, Blog).
2. Hover over the navigation items to experience the magnetic effect.
3. The active page is visually highlighted with an animated underline.

## Implementation Details

### `Nav.jsx`

- **Motion Values:** Utilizes Framer Motion's `useMotionValue` and `useTransform` to manage animation values.
- **Pointer Events:** Handles pointer movement and leave events to create the magnetic effect.
- **Active Page Indicator:** Uses Framer Motion's `layoutId` for a smooth transition when highlighting the active page.

### `mapRange` Function

- A utility function to map a value from one range to another.

## Contributors

- [Tamal Biswas 👋](https://tamalbiswas.com)

## License

This project is licensed under the [MIT License](LICENSE.md).
