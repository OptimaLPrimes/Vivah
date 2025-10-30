# Vivah Utsav - Digital Wedding Invitation for Vaishnavi & Suraj

"Vivah Utsav" is a beautifully crafted, modern, and interactive digital wedding invitation website. It's designed to celebrate the union of Vaishnavi and Suraj, providing guests with all the necessary information in an elegant and engaging format, complete with traditional Indian aesthetics and modern web technologies.

## Core Features

The website is a single-page application built with Next.js and React, incorporating several key sections to create a complete and immersive experience for guests.

-   **Intro Animation**: A delightful opening animation featuring a sealed envelope that opens to reveal the couple's names, setting a festive and personal tone from the very beginning.

-   **Hero Section**: A stunning full-screen hero section that immediately grabs attention. It features:
    -   An auspicious Sanskrit heading: "॥ श्री गणेशाय नमः ॥".
    -   The couple's names, "Vaishnavi & Suraj," animated with a gentle, glowing effect.
    -   The wedding date and time.
    -   A real-time countdown timer ticking down to the wedding ceremony.
    -   A stylish button to navigate to the events section.
    -   A beautiful, dark peacock-themed gradient background.

-   **Interactive Invitation Card**: A digital replica of a traditional Indian wedding card with ornate details.
    -   Features "gilded" text for the couple's names that shimmers on screen.
    -   A glowing, animated border that pulses with a soft gradient.
    -   Animated paisley patterns that "draw" themselves as the user scrolls.
    -   Detailed information about the couple's families.
    -   Clear presentation of the wedding date, time, and venue.

-   **Event Schedule**: A timeline of wedding festivities, including the Mehndi Ceremony, Sangeet Night, Wedding Ceremony, and Grand Reception. Each event is displayed in a stylish card with an icon, date, time, and description.

-   **Photo Sections & Gallery**: Multiple sections dedicated to showcasing the couple's journey.
    -   Full-width photo sections placed strategically to create visual breaks.
    -   A carousel-based gallery for guests to browse through a collection of favorite moments.

-   **Venue Details**: A dedicated section providing all the necessary information about the wedding venue.
    -   Full name and address of the venue.
    -   An embedded map image for easy location.
    -   A "Get Directions" button that links directly to Google Maps.
    -   Travel information, including the nearest airport and railway station.

-   **AI-Enhanced Guestbook**: An interactive guestbook where visitors can leave their blessings.
    -   A simple form for guests to enter their name and message.
    -   An optional "Enhance with AI" feature that uses a Genkit flow to enrich the message with more heartfelt and culturally relevant content.
    -   An optimistic UI that displays the message immediately while it's being submitted to the Firestore database.
    -   A real-time display of all guestbook entries.

## Bride & Groom Information

-   **The Bride**: **Vaishnavi**
    -   Daughter of Gangasagar tai and Dr. Harishchandra Sheshrao Patange.
    -   Her father is the Vice Principal at Yashwant Mahavidyalaya, Nanded.
    -   Granddaughter of Shri. Sheshrao Motiram Patange.
    -   Niece of Saraswati Sheshrao Patange.

-   **The Groom**: **Suraj**
    -   Son of Smt. Nirmaltai and Shri. Janardan Bhimrao Rohile Patil.
    -   Grandson of Smt. Banubai Kishor Rohile Patil.

-   **Wedding Date**: December 12, 2025 at 1:12 PM.

-   **Venue**: Vitthalrao Deshmukh Mangal Karyalay and Lawns, Nanded.

## Tech Stack & Design

-   **Framework**: Next.js 15 with App Router
-   **Language**: TypeScript
-   **Styling**:
    -   Tailwind CSS for utility-first styling.
    -   ShadCN/UI for pre-built, accessible, and customizable components.
    -   Custom animations and keyframes for effects like glowing borders, shimmering text, and scroll-triggered fade-ins.
-   **Fonts**:
    -   **Headlines**: 'Playfair Display' (serif) for an elegant feel.
    -   **Body**: 'PT Sans' (sans-serif) for readability.
    -   **Script**: 'Great Vibes' (cursive) for decorative text like the seal on the intro envelope.
-   **Color Palette**:
    -   **Primary**: Deep Saffron (`#FF9933`) - Evokes warmth and auspiciousness.
    -   **Background**: Very Pale Yellow (`#FAF9F0`) - A soft, elegant backdrop.
    -   **Accent**: Royal Blue (`#4169E1`) - A contrasting color for trustworthiness.
-   **Backend**:
    -   **Database**: Firebase Firestore for storing guestbook messages.
    -   **Generative AI**: Google's Gemini model via Genkit for the AI-enhanced guestbook messages.
-   **Hosting**: Firebase App Hosting.

This project is a perfect blend of traditional Indian culture and modern web development, creating a memorable digital experience for a very special occasion.
