# Movie App - Movie Billboard Application

Mobile application developed with **React Native**, **Expo**, and **TypeScript**, as part of a school project. The app displays a movie billboard showcasing popular movies using the public **TMDB (The Movie Database)** API.

---

## Technologies Used

- **React Native** – Framework for building cross-platform mobile applications.
- **Expo Router** – File-based routing system, easy to organize and maintain.
- **Tailwind CSS (with NativeWind)** – Used for modern and responsive styling.
- **TypeScript** – Enhances code quality with static typing.
- **TMDB API** – Data source for popular and recent movies.

---

## Main Features

- Displays popular movies on app load.
- Reusable search bar component (with navigation to the search screen).
- Tab navigation: Home, Search, Saved, and Profile.
- API consumption using a **custom hook (`useFetch`)** with error and loading state handling.
- Reusable components like `MovieCard` and `SearchBar` to keep the code clean and organized.

---

## Installation & Usage

1. Clona el repositorio:
2. Install dependencies (npm, expo, nativewind):
npm install
npm install expo
npx expo install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context
3. Start the development server:
npx expo start
4.Scan the QR code with the Expo Go App or use an emulator.
5. API Key Configuration:
5.1. Create a .env file at the root of the project with the following variable:
EXPO_PUBLIC_MOVIE_API_KEY=tu_api_key_de_tmdb

You can get your free API Key from: https://www.themoviedb.org/settings/api



