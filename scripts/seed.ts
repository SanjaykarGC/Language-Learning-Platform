import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "Italian",
        imageSrc: "/it.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 4,
        title: "Croatian",
        imageSrc: "/hr.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Spanish
        title: "Unit 1",
        description: "Basics of Spanish",
        order: 1,
      },
      {
        id: 2,
        courseId: 1, // Spanish
        title: "Unit 2",
        description: "Basic sentence structures and simple conversations",
        order: 2,
      },
      {
        id: 3,
        courseId: 1, // Spanish
        title: "Unit 3",
        description: "Everyday conversations in Spanish",
        order: 3,
      },
      {
        id: 4,
        courseId: 1, // Spanish
        title: "Unit 4",
        description: "Common prepositions and conjunctions",
        order: 4,
      },
      {
        id: 5,
        courseId: 1, // Spanish
        title: "Unit 5",
        description: "Family and relationships vocabulary",
        order: 5,
      },
      {
        id: 6,
        courseId: 1, // Spanish
        title: "Unit 6",
        description: "Simple negative sentences and questions",
        order: 6,
      },
      {
        id: 7,
        courseId: 1, // Spanish
        title: "Unit 7",
        description: "Present, past, and future tenses",
        order: 7,
      },
      {
        id: 8,
        courseId: 1, // Spanish
        title: "Unit 8",
        description: "Conditional sentences and comparisons",
        order: 8,
      },
      {
        id: 9,
        courseId: 1, // Spanish
        title: "Unit 9",
        description: "Greetings and polite expressions",
        order: 9,
      },
      {
        id: 10,
        courseId: 1, // Spanish
        title: "Unit 10",
        description: "Numbers, days, months, and colors",
        order: 10,
      },
      {
        id: 11,
        courseId: 1, // Spanish
        title: "Unit 11",
        description: "Essential travel phrases",
        order: 11,
      },
      {
        id: 12,
        courseId: 1, // Spanish
        title: "Unit 12",
        description: "Emergencies and shopping phrases",
        order: 12,
      },
      {
        id: 13,
        courseId: 1, // Spanish
        title: "Unit 13",
        description: "Hotel check-in and service requests",
        order: 13,
      },
      {
        id: 14,
        courseId: 1, // Spanish
        title: "Unit 14",
        description: "Renting cars and using public transport",
        order: 14,
      },
      {
        id: 15,
        courseId: 1, // Spanish
        title: "Unit 15",
        description: "Asking for time and scheduling",
        order: 15,
      },
    ]);
    

    await db.insert(schema.lessons).values([
      // Unit 1: Learn the basics of Spanish
      { id: 1, unitId: 1, order: 1, title: "Nouns" },
      { id: 2, unitId: 1, order: 2, title: "Verbs" },
      { id: 3, unitId: 1, order: 3, title: "Adjectives" },
      { id: 4, unitId: 1, order: 4, title: "Articles" },
      { id: 5, unitId: 1, order: 5, title: "Pronouns" },

      // Unit 2: Learn basic sentence structures
      { id: 6, unitId: 2, order: 1, title: "Simple Sentences" },
      { id: 7, unitId: 2, order: 2, title: "Questions" },
      { id: 8, unitId: 2, order: 3, title: "Negations" },
      { id: 9, unitId: 2, order: 4, title: "Commands" },
      { id: 10, unitId: 2, order: 5, title: "Possessives" },

      // Unit 3: Explore everyday conversations
      { id: 11, unitId: 3, order: 1, title: "Greetings" },
      { id: 12, unitId: 3, order: 2, title: "Introducing Yourself" },
      { id: 13, unitId: 3, order: 3, title: "Polite Expressions" },
      { id: 14, unitId: 3, order: 4, title: "Yes/No Responses" },
      { id: 15, unitId: 3, order: 5, title: "Asking How Someone Is" },

      // Unit 4: Prepositions and conjunctions
      { id: 16, unitId: 4, order: 1, title: "Prepositions" },
      { id: 17, unitId: 4, order: 2, title: "Conjunctions" },
      { id: 18, unitId: 4, order: 3, title: "Making Comparisons" },
      { id: 19, unitId: 4, order: 4, title: "Expressing Conditions" },
      { id: 20, unitId: 4, order: 5, title: "Common Phrases" },

      // Unit 5: Family and relationships
      { id: 21, unitId: 5, order: 1, title: "Family Vocabulary" },
      { id: 22, unitId: 5, order: 2, title: "Talking About People" },
      { id: 23, unitId: 5, order: 3, title: "Possessive Pronouns" },
      { id: 24, unitId: 5, order: 4, title: "Adjectives for People" },
      { id: 25, unitId: 5, order: 5, title: "Describing Relationships" },

      // Unit 6: Negative sentences and questions
      { id: 26, unitId: 6, order: 1, title: "Simple Sentences" },
      { id: 27, unitId: 6, order: 2, title: "Negative Sentences" },
      { id: 28, unitId: 6, order: 3, title: "Forming Questions" },
      { id: 29, unitId: 6, order: 4, title: "Yes/No Questions" },
      { id: 30, unitId: 6, order: 5, title: "Information Questions" },

      // Unit 7: Present, past, and future tenses
      { id: 31, unitId: 7, order: 1, title: "Present Tense" },
      { id: 32, unitId: 7, order: 2, title: "Past Tense" },
      { id: 33, unitId: 7, order: 3, title: "Future Tense" },
      { id: 34, unitId: 7, order: 4, title: "Using Imperatives" },
      { id: 35, unitId: 7, order: 5, title: "Giving Instructions" },

      // Unit 8: Conditional sentences and comparisons
      { id: 36, unitId: 8, order: 1, title: "Conditional Sentences" },
      { id: 37, unitId: 8, order: 2, title: "Comparatives" },
      { id: 38, unitId: 8, order: 3, title: "Superlatives" },
      { id: 39, unitId: 8, order: 4, title: "Subject-Verb Agreement" },
      { id: 40, unitId: 8, order: 5, title: "Common Comparisons" },

      // Unit 9: Greetings and polite expressions
      { id: 41, unitId: 9, order: 1, title: "Greetings" },
      { id: 42, unitId: 9, order: 2, title: "Introducing Yourself" },
      { id: 43, unitId: 9, order: 3, title: "Polite Expressions" },
      { id: 44, unitId: 9, order: 4, title: "Yes/No Responses" },
      { id: 45, unitId: 9, order: 5, title: "Asking About Well-being" },

      // Unit 10: Numbers, days, months, colors, food
      { id: 46, unitId: 10, order: 1, title: "Numbers" },
      { id: 47, unitId: 10, order: 2, title: "Days of the Week" },
      { id: 48, unitId: 10, order: 3, title: "Months of the Year" },
      { id: 49, unitId: 10, order: 4, title: "Colors" },
      { id: 50, unitId: 10, order: 5, title: "Food Vocabulary" },

      // Unit 11: Asking directions, booking hotels, and restaurants
      { id: 51, unitId: 11, order: 1, title: "Asking for Directions" },
      { id: 52, unitId: 11, order: 2, title: "Booking a Hotel Room" },
      { id: 53, unitId: 11, order: 3, title: "Ordering Food at a Restaurant" },
      { id: 54, unitId: 11, order: 4, title: "Navigating the Airport" },
      { id: 55, unitId: 11, order: 5, title: "Public Transportation" },

      // Unit 12: Shopping, emergencies, and customs
      { id: 56, unitId: 12, order: 1, title: "Shopping Phrases" },
      { id: 57, unitId: 12, order: 2, title: "Medical Emergencies" },
      { id: 58, unitId: 12, order: 3, title: "Asking for Help" },
      { id: 59, unitId: 12, order: 4, title: "Exchanging Money" },
      { id: 60, unitId: 12, order: 5, title: "Customs and Immigration" },

      // Unit 13: Checking into a hotel, services, complaints
      { id: 61, unitId: 13, order: 1, title: "Checking In/Out of a Hotel" },
      { id: 62, unitId: 13, order: 2, title: "Requesting Services" },
      { id: 63, unitId: 13, order: 3, title: "Confirming Details" },
      { id: 64, unitId: 13, order: 4, title: "Making Complaints" },
      { id: 65, unitId: 13, order: 5, title: "Asking for Recommendations" },

      // Unit 14: Renting cars, taxis, and public transport
      { id: 66, unitId: 14, order: 1, title: "Renting a Car" },
      { id: 67, unitId: 14, order: 2, title: "Taxi Phrases" },
      { id: 68, unitId: 14, order: 3, title: "Using Public Transport" },
      { id: 69, unitId: 14, order: 4, title: "Buying Tickets" },
      { id: 70, unitId: 14, order: 5, title: "Bus and Train Services" },

      // Unit 15: Cultural aspects and etiquette
      { id: 71, unitId: 15, order: 1, title: "Cultural Norms" },
      { id: 72, unitId: 15, order: 2, title: "Dining Etiquette" },
      { id: 73, unitId: 15, order: 3, title: "Gifts and Holidays" },
      { id: 74, unitId: 15, order: 4, title: "Important Customs" },
      { id: 75, unitId: 15, order: 5, title: "Celebrating Festivals" },
    ]);

    // Unit 1 Lesson 1
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 2,
        lessonId: 1, // Nouns
        type: "ASSIST",
        order: 2,
        question: '"the Boy"',
      },
      {
        id: 3,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the robot"?',
      },
      {
        id: 4,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 4,
        question: 'Which one of these is the "the Women"?',
      },
      {
        id: 5,
        lessonId: 1, // Nouns
        type: "ASSIST",
        order: 5,
        question: 'Which one of these is the "the Zombie"?',
      },
    ]);
    // Lesson 2 (Unit 1)
    await db.insert(schema.challenges).values([
      // SELECT questions
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the car"?',
      },
      {
        id: 7,
        lessonId: 2,
        type: "SELECT",
        order: 2,
        question: 'Which one of these is the "the tree"?',
      },
      {
        id: 8,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the house"?',
      },
      // ASSIST questions
      {
        id: 9,
        lessonId: 2,
        type: "ASSIST",
        order: 4,
        question: 'How to say "Goodbye"?',
      },
      {
        id: 10,
        lessonId: 2,
        type: "ASSIST",
        order: 5,
        question: 'How to say "Thank you"?',
      },
    ]);
    // Lesson 3 (Unit 1)
    await db.insert(schema.challenges).values([
      // SELECT questions
      {
        id: 11,
        lessonId: 3,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the dog"?',
      },
      {
        id: 12,
        lessonId: 3,
        type: "SELECT",
        order: 2,
        question: 'Which one of these is "the cat"?',
      },
      {
        id: 13,
        lessonId: 3,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is "the fish"?',
      },
      // ASSIST questions
      {
        id: 14,
        lessonId: 3,
        type: "ASSIST",
        order: 4,
        question: 'How to say "Please"?',
      },
      {
        id: 15,
        lessonId: 3,
        type: "ASSIST",
        order: 5,
        question: 'How to say "Excuse me"?',
      },
    ]);

    // Lesson 4 (Unit 1)
    await db.insert(schema.challenges).values([
      // SELECT questions
      {
        id: 16,
        lessonId: 4,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the book"?',
      },
      {
        id: 17,
        lessonId: 4,
        type: "SELECT",
        order: 2,
        question: 'Which one of these is "the table"?',
      },
      {
        id: 18,
        lessonId: 4,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is "the chair"?',
      },
      // ASSIST questions
      {
        id: 19,
        lessonId: 4,
        type: "ASSIST",
        order: 4,
        question: 'How to say "Excuse me"?',
      },
      {
        id: 20,
        lessonId: 4,
        type: "ASSIST",
        order: 5,
        question: 'How to say "Sorry"?',
      },
    ]);

    // Lesson 5 (Unit 1)
    await db.insert(schema.challenges).values([
      // SELECT questions
      {
        id: 21,
        lessonId: 5,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the computer"?',
      },
      {
        id: 22,
        lessonId: 5,
        type: "SELECT",
        order: 2,
        question: 'Which one of these is "the phone"?',
      },
      {
        id: 23,
        lessonId: 5,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is "the lamp"?',
      },
      // ASSIST questions
      {
        id: 24,
        lessonId: 5,
        type: "ASSIST",
        order: 4,
        question: 'How to say "Yes"?',
      },
      {
        id: 25,
        lessonId: 5,
        type: "ASSIST",
        order: 5,
        question: 'How to say "No"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // Which one of these is "the man"?
        imageSrc: "/man.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, // "the man"?
        correct: true,
        text: "el Chico",
        audioSrc: "/es_boy.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "la Nina",
        audioSrc: "/es_girl.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "el Zombie",
        audioSrc: "/es_zombie.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, // Which one of these is the "the robot"?
        imageSrc: "/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/robot.svg",
        correct: true,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 4, // Which one of these is the "the Women"?
        imageSrc: "/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 4,
        imageSrc: "/woman.svg",
        correct: true,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 4,
        imageSrc: "/robot.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 5, // "Zombie"?
        correct: false,
        text: "el Chico",
        audioSrc: "/es_boy.mp3",
      },
      {
        challengeId: 5,
        correct: false,
        text: "la Nina",
        audioSrc: "/es_girl.mp3",
      },
      {
        challengeId: 5,
        correct: true,
        text: "el Zombie",
        audioSrc: "/es_zombie.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Car)
      {
        challengeId: 6,
        imageSrc: "/car.svg",
        correct: true,
        text: "el coche",
        audioSrc: "/es_car.mp3",
      },
      {
        challengeId: 6,
        imageSrc: "/bike.svg",
        correct: false,
        text: "la bicicleta",
        audioSrc: "/es_bike.mp3",
      },
      {
        challengeId: 6,
        imageSrc: "/train.svg",
        correct: false,
        text: "el tren",
        audioSrc: "/es_train.mp3",
      },

      // SELECT (Tree)
      {
        challengeId: 7,
        imageSrc: "/tree.svg",
        correct: true,
        text: "el árbol",
        audioSrc: "/es_tree.mp3",
      },
      {
        challengeId: 7,
        imageSrc: "/flower.svg",
        correct: false,
        text: "la flor",
        audioSrc: "/es_flower.mp3",
      },
      {
        challengeId: 7,
        imageSrc: "/bush.svg",
        correct: false,
        text: "el arbusto",
        audioSrc: "/es_bush.mp3",
      },

      // SELECT (House)
      {
        challengeId: 8,
        imageSrc: "/house.svg",
        correct: true,
        text: "la casa",
        audioSrc: "/es_house.mp3",
      },
      {
        challengeId: 8,
        imageSrc: "/apartment.svg",
        correct: false,
        text: "el apartamento",
        audioSrc: "/es_apartment.mp3",
      },
      {
        challengeId: 8,
        imageSrc: "/building.svg",
        correct: false,
        text: "el edificio",
        audioSrc: "/es_building.mp3",
      },

      // ASSIST (Goodbye)
      {
        challengeId: 9,
        correct: true,
        text: "Adiós",
        audioSrc: "/es_goodbye.mp3",
      },
      {
        challengeId: 9,
        correct: false,
        text: "Hola",
        audioSrc: "/es_hello.mp3",
      },
      {
        challengeId: 9,
        correct: false,
        text: "Gracias",
        audioSrc: "/es_thankyou.mp3",
      },

      // ASSIST (Thank you)
      {
        challengeId: 10,
        correct: true,
        text: "Gracias",
        audioSrc: "/es_thankyou.mp3",
      },
      {
        challengeId: 10,
        correct: false,
        text: "Por favor",
        audioSrc: "/es_please.mp3",
      },
      {
        challengeId: 10,
        correct: false,
        text: "Perdón",
        audioSrc: "/es_sorry.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Dog)
      {
        challengeId: 11,
        imageSrc: "/dog.svg",
        correct: true,
        text: "el perro",
        audioSrc: "/es_dog.mp3",
      },
      {
        challengeId: 11,
        imageSrc: "/cat.svg",
        correct: false,
        text: "el gato",
        audioSrc: "/es_cat.mp3",
      },
      {
        challengeId: 11,
        imageSrc: "/bird.svg",
        correct: false,
        text: "el pájaro",
        audioSrc: "/es_bird.mp3",
      },

      // SELECT (Cat)
      {
        challengeId: 12,
        imageSrc: "/cat.svg",
        correct: true,
        text: "el gato",
        audioSrc: "/es_cat.mp3",
      },
      {
        challengeId: 12,
        imageSrc: "/dog.svg",
        correct: false,
        text: "el perro",
        audioSrc: "/es_dog.mp3",
      },
      {
        challengeId: 12,
        imageSrc: "/fish.svg",
        correct: false,
        text: "el pez",
        audioSrc: "/es_fish.mp3",
      },

      // SELECT (Fish)
      {
        challengeId: 13,
        imageSrc: "/fish.svg",
        correct: true,
        text: "el pez",
        audioSrc: "/es_fish.mp3",
      },
      {
        challengeId: 13,
        imageSrc: "/dog.svg",
        correct: false,
        text: "el perro",
        audioSrc: "/es_dog.mp3",
      },
      {
        challengeId: 13,
        imageSrc: "/bird.svg",
        correct: false,
        text: "el pájaro",
        audioSrc: "/es_bird.mp3",
      },

      // ASSIST (Please)
      {
        challengeId: 14,
        correct: true,
        text: "Por favor",
        audioSrc: "/es_please.mp3",
      },
      {
        challengeId: 14,
        correct: false,
        text: "Gracias",
        audioSrc: "/es_thankyou.mp3",
      },
      {
        challengeId: 14,
        correct: false,
        text: "Perdón",
        audioSrc: "/es_sorry.mp3",
      },

      // ASSIST (Excuse me)
      {
        challengeId: 15,
        correct: true,
        text: "Perdón",
        audioSrc: "/es_sorry.mp3",
      },
      {
        challengeId: 15,
        correct: false,
        text: "Por favor",
        audioSrc: "/es_please.mp3",
      },
      {
        challengeId: 15,
        correct: false,
        text: "Gracias",
        audioSrc: "/es_thankyou.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Book)
      {
        challengeId: 16,
        imageSrc: "/book.svg",
        correct: true,
        text: "el libro",
        audioSrc: "/es_book.mp3",
      },
      {
        challengeId: 16,
        imageSrc: "/pen.svg",
        correct: false,
        text: "la pluma",
        audioSrc: "/es_pen.mp3",
      },
      {
        challengeId: 16,
        imageSrc: "/notebook.svg",
        correct: false,
        text: "el cuaderno",
        audioSrc: "/es_notebook.mp3",
      },

      // SELECT (Table)
      {
        challengeId: 17,
        imageSrc: "/table.svg",
        correct: true,
        text: "la mesa",
        audioSrc: "/es_table.mp3",
      },
      {
        challengeId: 17,
        imageSrc: "/chair.svg",
        correct: false,
        text: "la silla",
        audioSrc: "/es_chair.mp3",
      },
      {
        challengeId: 17,
        imageSrc: "/bed.svg",
        correct: false,
        text: "la cama",
        audioSrc: "/es_bed.mp3",
      },

      // SELECT (Chair)
      {
        challengeId: 18,
        imageSrc: "/chair.svg",
        correct: true,
        text: "la silla",
        audioSrc: "/es_chair.mp3",
      },
      {
        challengeId: 18,
        imageSrc: "/table.svg",
        correct: false,
        text: "la mesa",
        audioSrc: "/es_table.mp3",
      },
      {
        challengeId: 18,
        imageSrc: "/lamp.svg",
        correct: false,
        text: "la lámpara",
        audioSrc: "/es_lamp.mp3",
      },

      // ASSIST (Excuse me)
      {
        challengeId: 19,
        correct: true,
        text: "Perdón",
        audioSrc: "/es_sorry.mp3",
      },
      {
        challengeId: 19,
        correct: false,
        text: "Gracias",
        audioSrc: "/es_thankyou.mp3",
      },
      {
        challengeId: 19,
        correct: false,
        text: "Por favor",
        audioSrc: "/es_please.mp3",
      },

      // ASSIST (Sorry)
      {
        challengeId: 20,
        correct: true,
        text: "Lo siento",
        audioSrc: "/es_sorry.mp3",
      },
      {
        challengeId: 20,
        correct: false,
        text: "Gracias",
        audioSrc: "/es_thankyou.mp3",
      },
      {
        challengeId: 20,
        correct: false,
        text: "Por favor",
        audioSrc: "/es_please.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Computer)
      {
        challengeId: 21,
        imageSrc: "/computer.svg",
        correct: true,
        text: "el ordenador",
        audioSrc: "/es_computer.mp3",
      },
      {
        challengeId: 21,
        imageSrc: "/phone.svg",
        correct: false,
        text: "el teléfono",
        audioSrc: "/es_phone.mp3",
      },
      {
        challengeId: 21,
        imageSrc: "/tablet.svg",
        correct: false,
        text: "la tableta",
        audioSrc: "/es_tablet.mp3",
      },

      // SELECT (Phone)
      {
        challengeId: 22,
        imageSrc: "/phone.svg",
        correct: true,
        text: "el teléfono",
        audioSrc: "/es_phone.mp3",
      },
      {
        challengeId: 22,
        imageSrc: "/computer.svg",
        correct: false,
        text: "el ordenador",
        audioSrc: "/es_computer.mp3",
      },
      {
        challengeId: 22,
        imageSrc: "/tv.svg",
        correct: false,
        text: "la televisión",
        audioSrc: "/es_tv.mp3",
      },

      // SELECT (Lamp)
      {
        challengeId: 23,
        imageSrc: "/lamp.svg",
        correct: true,
        text: "la lámpara",
        audioSrc: "/es_lamp.mp3",
      },
      {
        challengeId: 23,
        imageSrc: "/phone.svg",
        correct: false,
        text: "el teléfono",
        audioSrc: "/es_phone.mp3",
      },
      {
        challengeId: 23,
        imageSrc: "/computer.svg",
        correct: false,
        text: "el ordenador",
        audioSrc: "/es_computer.mp3",
      },

      // ASSIST (Yes)
      {
        challengeId: 24,
        correct: true,
        text: "Sí",
        audioSrc: "/es_yes.mp3",
      },
      {
        challengeId: 24,
        correct: false,
        text: "No",
        audioSrc: "/es_no.mp3",
      },

      // ASSIST (No)
      {
        challengeId: 25,
        correct: true,
        text: "No",
        audioSrc: "/es_no.mp3",
      },
      {
        challengeId: 25,
        correct: false,
        text: "Sí",
        audioSrc: "/es_yes.mp3",
      },
    ]);

    // Lesson 1 (Unit 2)
    await db.insert(schema.challenges).values([
      // SELECT questions (Basic Action Verbs)
      {
        id: 26,
        lessonId: 6,
        type: "SELECT",
        order: 1,
        question: 'Which one of these means "to go"?',
      },
      {
        id: 27,
        lessonId: 6,
        type: "SELECT",
        order: 2,
        question: 'Which one of these means "to eat"?',
      },
      {
        id: 28,
        lessonId: 6,
        type: "SELECT",
        order: 3,
        question: 'Which one of these means "to speak"?',
      },
      // ASSIST questions (Basic Action Verbs)
      {
        id: 29,
        lessonId: 6,
        type: "ASSIST",
        order: 4,
        question: 'How to say "I see"?',
      },
      {
        id: 30,
        lessonId: 6,
        type: "ASSIST",
        order: 5,
        question: 'How to say "I want"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (To go)
      {
        challengeId: 26,
        correct: true,
        text: "ir",
        audioSrc: "/es_go.mp3",
      },
      {
        challengeId: 26,
        correct: false,
        text: "comer",
        audioSrc: "/es_eat.mp3",
      },
      {
        challengeId: 26,
        correct: false,
        text: "hablar",
        audioSrc: "/es_speak.mp3",
      },

      // SELECT (To eat)
      {
        challengeId: 27,
        correct: true,
        text: "comer",
        audioSrc: "/es_eat.mp3",
      },
      {
        challengeId: 27,
        correct: false,
        text: "ver",
        audioSrc: "/es_see.mp3",
      },
      {
        challengeId: 27,
        correct: false,
        text: "ir",
        audioSrc: "/es_go.mp3",
      },

      // SELECT (To speak)
      {
        challengeId: 28,
        correct: true,
        text: "hablar",
        audioSrc: "/es_speak.mp3",
      },
      {
        challengeId: 28,
        correct: false,
        text: "ver",
        audioSrc: "/es_see.mp3",
      },
      {
        challengeId: 28,
        correct: false,
        text: "querer",
        audioSrc: "/es_want.mp3",
      },

      // ASSIST (I see)
      {
        challengeId: 29,
        correct: true,
        text: "Veo",
        audioSrc: "/es_i_see.mp3",
      },
      {
        challengeId: 29,
        correct: false,
        text: "Hablo",
        audioSrc: "/es_i_speak.mp3",
      },
      {
        challengeId: 29,
        correct: false,
        text: "Como",
        audioSrc: "/es_i_eat.mp3",
      },

      // ASSIST (I want)
      {
        challengeId: 30,
        correct: true,
        text: "Quiero",
        audioSrc: "/es_i_want.mp3",
      },
      {
        challengeId: 30,
        correct: false,
        text: "Voy",
        audioSrc: "/es_i_go.mp3",
      },
      {
        challengeId: 30,
        correct: false,
        text: "Veo",
        audioSrc: "/es_i_see.mp3",
      },
    ]);

    // Lesson 2 (Unit 2)
    await db.insert(schema.challenges).values([
      // SELECT questions (Singular Pronouns)
      {
        id: 31,
        lessonId: 7,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the pronoun for "I"?',
      },
      {
        id: 32,
        lessonId: 7,
        type: "SELECT",
        order: 2,
        question: 'Which one of these is the pronoun for "he"?',
      },
      {
        id: 33,
        lessonId: 7,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the pronoun for "she"?',
      },
      // ASSIST questions (Singular Pronouns)
      {
        id: 34,
        lessonId: 7,
        type: "ASSIST",
        order: 4,
        question: 'How to say "You" (informal)?',
      },
      {
        id: 35,
        lessonId: 7,
        type: "ASSIST",
        order: 5,
        question: 'How to say "I"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (I)
      {
        challengeId: 31,
        correct: true,
        text: "Yo",
        audioSrc: "/es_i.mp3",
      },
      {
        challengeId: 31,
        correct: false,
        text: "Tú",
        audioSrc: "/es_you.mp3",
      },
      {
        challengeId: 31,
        correct: false,
        text: "Él",
        audioSrc: "/es_he.mp3",
      },

      // SELECT (He)
      {
        challengeId: 32,
        correct: true,
        text: "Él",
        audioSrc: "/es_he.mp3",
      },
      {
        challengeId: 32,
        correct: false,
        text: "Ella",
        audioSrc: "/es_she.mp3",
      },
      {
        challengeId: 32,
        correct: false,
        text: "Yo",
        audioSrc: "/es_i.mp3",
      },

      // SELECT (She)
      {
        challengeId: 33,
        correct: true,
        text: "Ella",
        audioSrc: "/es_she.mp3",
      },
      {
        challengeId: 33,
        correct: false,
        text: "Él",
        audioSrc: "/es_he.mp3",
      },
      {
        challengeId: 33,
        correct: false,
        text: "Tú",
        audioSrc: "/es_you.mp3",
      },

      // ASSIST (You - informal)
      {
        challengeId: 34,
        correct: true,
        text: "Tú",
        audioSrc: "/es_you.mp3",
      },
      {
        challengeId: 34,
        correct: false,
        text: "Él",
        audioSrc: "/es_he.mp3",
      },
      {
        challengeId: 34,
        correct: false,
        text: "Ella",
        audioSrc: "/es_she.mp3",
      },

      // ASSIST (I)
      {
        challengeId: 35,
        correct: true,
        text: "Yo",
        audioSrc: "/es_i.mp3",
      },
      {
        challengeId: 35,
        correct: false,
        text: "Tú",
        audioSrc: "/es_you.mp3",
      },
      {
        challengeId: 35,
        correct: false,
        text: "Ella",
        audioSrc: "/es_she.mp3",
      },
    ]);

    // Lesson 3 (Unit 2)
    await db.insert(schema.challenges).values([
      // SELECT questions (Plural Pronouns)
      {
        id: 36,
        lessonId: 8,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the pronoun for "we"?',
      },
      {
        id: 37,
        lessonId: 8,
        type: "SELECT",
        order: 2,
        question: 'Which one of these is the pronoun for "they" (masculine)?',
      },
      {
        id: 38,
        lessonId: 8,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the pronoun for "they" (feminine)?',
      },
      // ASSIST questions (Plural Pronouns)
      {
        id: 39,
        lessonId: 8,
        type: "ASSIST",
        order: 4,
        question: 'How to say "We"?',
      },
      {
        id: 40,
        lessonId: 8,
        type: "ASSIST",
        order: 5,
        question: 'How to say "They" (feminine)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (We)
      {
        challengeId: 36,
        correct: true,
        text: "Nosotros",
        audioSrc: "/es_we.mp3",
      },
      {
        challengeId: 36,
        correct: false,
        text: "Ellos",
        audioSrc: "/es_they_m.mp3",
      },
      {
        challengeId: 36,
        correct: false,
        text: "Ellas",
        audioSrc: "/es_they_f.mp3",
      },

      // SELECT (They - masculine)
      {
        challengeId: 37,
        correct: true,
        text: "Ellos",
        audioSrc: "/es_they_m.mp3",
      },
      {
        challengeId: 37,
        correct: false,
        text: "Nosotros",
        audioSrc: "/es_we.mp3",
      },
      {
        challengeId: 37,
        correct: false,
        text: "Ellas",
        audioSrc: "/es_they_f.mp3",
      },

      // SELECT (They - feminine)
      {
        challengeId: 38,
        correct: true,
        text: "Ellas",
        audioSrc: "/es_they_f.mp3",
      },
      {
        challengeId: 38,
        correct: false,
        text: "Nosotros",
        audioSrc: "/es_we.mp3",
      },
      {
        challengeId: 38,
        correct: false,
        text: "Ellos",
        audioSrc: "/es_they_m.mp3",
      },

      // ASSIST (We)
      {
        challengeId: 39,
        correct: true,
        text: "Nosotros",
        audioSrc: "/es_we.mp3",
      },
      {
        challengeId: 39,
        correct: false,
        text: "Ellos",
        audioSrc: "/es_they_m.mp3",
      },
      {
        challengeId: 39,
        correct: false,
        text: "Ellas",
        audioSrc: "/es_they_f.mp3",
      },

      // ASSIST (They - feminine)
      {
        challengeId: 40,
        correct: true,
        text: "Ellas",
        audioSrc: "/es_they_f.mp3",
      },
      {
        challengeId: 40,
        correct: false,
        text: "Ellos",
        audioSrc: "/es_they_m.mp3",
      },
      {
        challengeId: 40,
        correct: false,
        text: "Nosotros",
        audioSrc: "/es_we.mp3",
      },
    ]);

    // Lesson 4 (Unit 2)
    await db.insert(schema.challenges).values([
      // SELECT questions (Verbs with Pronouns)
      {
        id: 41,
        lessonId: 9,
        type: "SELECT",
        order: 1,
        question: 'Which one of these means "I eat"?',
      },
      {
        id: 42,
        lessonId: 9,
        type: "SELECT",
        order: 2,
        question: 'Which one of these means "He goes"?',
      },
      {
        id: 43,
        lessonId: 9,
        type: "SELECT",
        order: 3,
        question: 'Which one of these means "They see"?',
      },
      // ASSIST questions (Verbs with Pronouns)
      {
        id: 44,
        lessonId: 9,
        type: "ASSIST",
        order: 4,
        question: 'How to say "We speak"?',
      },
      {
        id: 45,
        lessonId: 9,
        type: "ASSIST",
        order: 5,
        question: 'How to say "You want" (informal)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (I eat)
      {
        challengeId: 41,
        correct: true,
        text: "Yo como",
        audioSrc: "/es_i_eat.mp3",
      },
      {
        challengeId: 41,
        correct: false,
        text: "Él come",
        audioSrc: "/es_he_eats.mp3",
      },
      {
        challengeId: 41,
        correct: false,
        text: "Nosotros comemos",
        audioSrc: "/es_we_eat.mp3",
      },

      // SELECT (He goes)
      {
        challengeId: 42,
        correct: true,
        text: "Él va",
        audioSrc: "/es_he_goes.mp3",
      },
      {
        challengeId: 42,
        correct: false,
        text: "Ellos ven",
        audioSrc: "/es_they_see.mp3",
      },
      {
        challengeId: 42,
        correct: false,
        text: "Nosotros vamos",
        audioSrc: "/es_we_go.mp3",
      },

      // SELECT (They see)
      {
        challengeId: 43,
        correct: true,
        text: "Ellos ven",
        audioSrc: "/es_they_see.mp3",
      },
      {
        challengeId: 43,
        correct: false,
        text: "Yo veo",
        audioSrc: "/es_i_see.mp3",
      },
      {
        challengeId: 43,
        correct: false,
        text: "Nosotros vemos",
        audioSrc: "/es_we_see.mp3",
      },

      // ASSIST (We speak)
      {
        challengeId: 44,
        correct: true,
        text: "Nosotros hablamos",
        audioSrc: "/es_we_speak.mp3",
      },
      {
        challengeId: 44,
        correct: false,
        text: "Yo hablo",
        audioSrc: "/es_i_speak.mp3",
      },
      {
        challengeId: 44,
        correct: false,
        text: "Ellos hablan",
        audioSrc: "/es_they_speak.mp3",
      },

      // ASSIST (You want)
      {
        challengeId: 45,
        correct: true,
        text: "Tú quieres",
        audioSrc: "/es_you_want.mp3",
      },
      {
        challengeId: 45,
        correct: false,
        text: "Yo quiero",
        audioSrc: "/es_i_want.mp3",
      },
      {
        challengeId: 45,
        correct: false,
        text: "Él quiere",
        audioSrc: "/es_he_wants.mp3",
      },
    ]);

    // Lesson 5 (Unit 2)
    await db.insert(schema.challenges).values([
      // SELECT questions (Questions with Verbs & Pronouns)
      {
        id: 46,
        lessonId: 10,
        type: "SELECT",
        order: 1,
        question: 'How do you ask "Do you want?" in Spanish?',
      },
      {
        id: 47,
        lessonId: 10,
        type: "SELECT",
        order: 2,
        question: 'How do you ask "Do they eat?" in Spanish?',
      },
      {
        id: 48,
        lessonId: 10,
        type: "SELECT",
        order: 3,
        question: 'How do you ask "Does he go?" in Spanish?',
      },
      // ASSIST questions (Answers with Verbs & Pronouns)
      {
        id: 49,
        lessonId: 10,
        type: "ASSIST",
        order: 4,
        question: 'How to say "Yes, I want" in Spanish?',
      },
      {
        id: 50,
        lessonId: 10,
        type: "ASSIST",
        order: 5,
        question: 'How to say "No, we do not go" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Do you want?)
      {
        challengeId: 46,
        correct: true,
        text: "¿Quieres?",
        audioSrc: "/es_do_you_want.mp3",
      },
      {
        challengeId: 46,
        correct: false,
        text: "¿Comes?",
        audioSrc: "/es_do_you_eat.mp3",
      },
      {
        challengeId: 46,
        correct: false,
        text: "¿Vas?",
        audioSrc: "/es_do_you_go.mp3",
      },

      // SELECT (Do they eat?)
      {
        challengeId: 47,
        correct: true,
        text: "¿Comen ellos?",
        audioSrc: "/es_do_they_eat.mp3",
      },
      {
        challengeId: 47,
        correct: false,
        text: "¿Van ellos?",
        audioSrc: "/es_do_they_go.mp3",
      },
      {
        challengeId: 47,
        correct: false,
        text: "¿Quieren ellos?",
        audioSrc: "/es_do_they_want.mp3",
      },

      // SELECT (Does he go?)
      {
        challengeId: 48,
        correct: true,
        text: "¿Va él?",
        audioSrc: "/es_does_he_go.mp3",
      },
      {
        challengeId: 48,
        correct: false,
        text: "¿Come él?",
        audioSrc: "/es_does_he_eat.mp3",
      },
      {
        challengeId: 48,
        correct: false,
        text: "¿Habla él?",
        audioSrc: "/es_does_he_speak.mp3",
      },

      // ASSIST (Yes, I want)
      {
        challengeId: 49,
        correct: true,
        text: "Sí, quiero",
        audioSrc: "/es_yes_i_want.mp3",
      },
      {
        challengeId: 49,
        correct: false,
        text: "Sí, como",
        audioSrc: "/es_yes_i_eat.mp3",
      },
      {
        challengeId: 49,
        correct: false,
        text: "Sí, voy",
        audioSrc: "/es_yes_i_go.mp3",
      },

      // ASSIST (No, we do not go)
      {
        challengeId: 50,
        correct: true,
        text: "No, no vamos",
        audioSrc: "/es_no_we_do_not_go.mp3",
      },
      {
        challengeId: 50,
        correct: false,
        text: "No, no comemos",
        audioSrc: "/es_no_we_do_not_eat.mp3",
      },
      {
        challengeId: 50,
        correct: false,
        text: "No, no hablamos",
        audioSrc: "/es_no_we_do_not_speak.mp3",
      },
    ]);

    //Unit 3
    // Lesson 1: Definite and Indefinite Articles
    await db.insert(schema.challenges).values([
      // SELECT questions (Definite and Indefinite Articles)
      {
        id: 51,
        lessonId: 11, // Adjust lesson ID accordingly
        type: "SELECT",
        order: 1,
        question:
          "What is the indefinite article for a singular noun that starts with a consonant?",
      },
      {
        id: 52,
        lessonId: 11,
        type: "SELECT",
        order: 2,
        question: "What is the definite article in English?",
      },
      {
        id: 53,
        lessonId: 11,
        type: "SELECT",
        order: 3,
        question:
          "Which article should be used before a noun that is known to the listener?",
      },
      // ASSIST questions (Definite and Indefinite Articles)
      {
        id: 54,
        lessonId: 11,
        type: "ASSIST",
        order: 4,
        question: 'How to say "the book" in Spanish?',
      },
      {
        id: 55,
        lessonId: 11,
        type: "ASSIST",
        order: 5,
        question: 'How to say "a cat" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Indefinite article for consonant)
      {
        challengeId: 51,
        correct: true,
        text: "a",
        audioSrc: "/en_a.mp3",
      },
      {
        challengeId: 51,
        correct: false,
        text: "an",
        audioSrc: "/en_an.mp3",
      },
      {
        challengeId: 51,
        correct: false,
        text: "the",
        audioSrc: "/en_the.mp3",
      },

      // SELECT (Definite article)
      {
        challengeId: 52,
        correct: true,
        text: "the",
        audioSrc: "/en_the.mp3",
      },
      {
        challengeId: 52,
        correct: false,
        text: "a",
        audioSrc: "/en_a.mp3",
      },
      {
        challengeId: 52,
        correct: false,
        text: "an",
        audioSrc: "/en_an.mp3",
      },

      // SELECT (Article for known noun)
      {
        challengeId: 53,
        correct: true,
        text: "the",
        audioSrc: "/en_the.mp3",
      },
      {
        challengeId: 53,
        correct: false,
        text: "a",
        audioSrc: "/en_a.mp3",
      },
      {
        challengeId: 53,
        correct: false,
        text: "an",
        audioSrc: "/en_an.mp3",
      },

      // ASSIST (The book)
      {
        challengeId: 54,
        correct: true,
        text: "el libro",
        audioSrc: "/es_the_book.mp3",
      },
      {
        challengeId: 54,
        correct: false,
        text: "un libro",
        audioSrc: "/es_a_book.mp3",
      },
      {
        challengeId: 54,
        correct: false,
        text: "la libro",
        audioSrc: "/es_the_feminine_book.mp3",
      },

      // ASSIST (A cat)
      {
        challengeId: 55,
        correct: true,
        text: "un gato",
        audioSrc: "/es_a_cat.mp3",
      },
      {
        challengeId: 55,
        correct: false,
        text: "la gato",
        audioSrc: "/es_the_feminine_cat.mp3",
      },
      {
        challengeId: 55,
        correct: false,
        text: "el gato",
        audioSrc: "/es_the_cat.mp3",
      },
    ]);

    // Lesson 2: Adverbs of Time
    await db.insert(schema.challenges).values([
      // SELECT questions (Adverbs of Time)
      {
        id: 56,
        lessonId: 12, // Adjust lesson ID accordingly
        type: "SELECT",
        order: 1,
        question: 'What adverb means "at this moment"?',
      },
      {
        id: 57,
        lessonId: 12,
        type: "SELECT",
        order: 2,
        question: "Which adverb indicates a future time?",
      },
      {
        id: 58,
        lessonId: 12,
        type: "SELECT",
        order: 3,
        question: 'What adverb can mean "now or soon"?',
      },
      // ASSIST questions (Adverbs of Time)
      {
        id: 59,
        lessonId: 12,
        type: "ASSIST",
        order: 4,
        question: 'How to say "tomorrow" in Spanish?',
      },
      {
        id: 60,
        lessonId: 12,
        type: "ASSIST",
        order: 5,
        question: 'How to say "later" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (At this moment)
      {
        challengeId: 56,
        correct: true,
        text: "now",
        audioSrc: "/en_now.mp3",
      },
      {
        challengeId: 56,
        correct: false,
        text: "soon",
        audioSrc: "/en_soon.mp3",
      },
      {
        challengeId: 56,
        correct: false,
        text: "then",
        audioSrc: "/en_then.mp3",
      },

      // SELECT (Future time)
      {
        challengeId: 57,
        correct: true,
        text: "tomorrow",
        audioSrc: "/en_tomorrow.mp3",
      },
      {
        challengeId: 57,
        correct: false,
        text: "yesterday",
        audioSrc: "/en_yesterday.mp3",
      },
      {
        challengeId: 57,
        correct: false,
        text: "now",
        audioSrc: "/en_now.mp3",
      },

      // SELECT (Now or soon)
      {
        challengeId: 58,
        correct: true,
        text: "soon",
        audioSrc: "/en_soon.mp3",
      },
      {
        challengeId: 58,
        correct: false,
        text: "later",
        audioSrc: "/en_later.mp3",
      },
      {
        challengeId: 58,
        correct: false,
        text: "always",
        audioSrc: "/en_always.mp3",
      },

      // ASSIST (Tomorrow)
      {
        challengeId: 59,
        correct: true,
        text: "mañana",
        audioSrc: "/es_tomorrow.mp3",
      },
      {
        challengeId: 59,
        correct: false,
        text: "hoy",
        audioSrc: "/es_today.mp3",
      },
      {
        challengeId: 59,
        correct: false,
        text: "ayer",
        audioSrc: "/es_yesterday.mp3",
      },

      // ASSIST (Later)
      {
        challengeId: 60,
        correct: true,
        text: "más tarde",
        audioSrc: "/es_later.mp3",
      },
      {
        challengeId: 60,
        correct: false,
        text: "pronto",
        audioSrc: "/es_soon.mp3",
      },
      {
        challengeId: 60,
        correct: false,
        text: "ahora",
        audioSrc: "/es_now.mp3",
      },
    ]);

    // Lesson 3: Adverbs of Place
    await db.insert(schema.challenges).values([
      // SELECT questions (Adverbs of Place)
      {
        id: 61,
        lessonId: 13, // Adjust lesson ID accordingly
        type: "SELECT",
        order: 1,
        question: 'What adverb means "in this location"?',
      },
      {
        id: 62,
        lessonId: 13,
        type: "SELECT",
        order: 2,
        question: 'Which adverb indicates "over there"?',
      },
      {
        id: 63,
        lessonId: 13,
        type: "SELECT",
        order: 3,
        question: 'What adverb means "nearby"?',
      },
      // ASSIST questions (Adverbs of Place)
      {
        id: 64,
        lessonId: 13,
        type: "ASSIST",
        order: 4,
        question: 'How to say "here" in Spanish?',
      },
      {
        id: 65,
        lessonId: 13,
        type: "ASSIST",
        order: 5,
        question: 'How to say "there" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (In this location)
      {
        challengeId: 61,
        correct: true,
        text: "here",
        audioSrc: "/en_here.mp3",
      },
      {
        challengeId: 61,
        correct: false,
        text: "there",
        audioSrc: "/en_there.mp3",
      },
      {
        challengeId: 61,
        correct: false,
        text: "everywhere",
        audioSrc: "/en_everywhere.mp3",
      },

      // SELECT (Over there)
      {
        challengeId: 62,
        correct: true,
        text: "over there",
        audioSrc: "/en_over_there.mp3",
      },
      {
        challengeId: 62,
        correct: false,
        text: "here",
        audioSrc: "/en_here.mp3",
      },
      {
        challengeId: 62,
        correct: false,
        text: "nearby",
        audioSrc: "/en_nearby.mp3",
      },

      // SELECT (Nearby)
      {
        challengeId: 63,
        correct: true,
        text: "nearby",
        audioSrc: "/en_nearby.mp3",
      },
      {
        challengeId: 63,
        correct: false,
        text: "far away",
        audioSrc: "/en_far_away.mp3",
      },
      {
        challengeId: 63,
        correct: false,
        text: "everywhere",
        audioSrc: "/en_everywhere.mp3",
      },

      // ASSIST (Here)
      {
        challengeId: 64,
        correct: true,
        text: "aquí",
        audioSrc: "/es_here.mp3",
      },
      {
        challengeId: 64,
        correct: false,
        text: "ahí",
        audioSrc: "/es_there.mp3",
      },
      {
        challengeId: 64,
        correct: false,
        text: "allí",
        audioSrc: "/es_over_there.mp3",
      },

      // ASSIST (There)
      {
        challengeId: 65,
        correct: true,
        text: "ahí",
        audioSrc: "/es_there.mp3",
      },
      {
        challengeId: 65,
        correct: false,
        text: "aquí",
        audioSrc: "/es_here.mp3",
      },
      {
        challengeId: 65,
        correct: false,
        text: "cerca",
        audioSrc: "/es_nearby.mp3",
      },
    ]);

    // Lesson 4: Adverbs of Manner
    await db.insert(schema.challenges).values([
      // SELECT questions (Adverbs of Manner)
      {
        id: 66,
        lessonId: 14, // Adjust lesson ID accordingly
        type: "SELECT",
        order: 1,
        question: 'What adverb means "in a quick way"?',
      },
      {
        id: 67,
        lessonId: 14,
        type: "SELECT",
        order: 2,
        question: "Which adverb describes doing something carefully?",
      },
      {
        id: 68,
        lessonId: 14,
        type: "SELECT",
        order: 3,
        question: "What adverb indicates performing an action gently?",
      },
      // ASSIST questions (Adverbs of Manner)
      {
        id: 69,
        lessonId: 14,
        type: "ASSIST",
        order: 4,
        question: 'How to say "quickly" in Spanish?',
      },
      {
        id: 70,
        lessonId: 14,
        type: "ASSIST",
        order: 5,
        question: 'How to say "carefully" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (In a quick way)
      {
        challengeId: 66,
        correct: true,
        text: "quickly",
        audioSrc: "/en_quickly.mp3",
      },
      {
        challengeId: 66,
        correct: false,
        text: "slowly",
        audioSrc: "/en_slowly.mp3",
      },
      {
        challengeId: 66,
        correct: false,
        text: "carefully",
        audioSrc: "/en_carefully.mp3",
      },

      // SELECT (Carefully)
      {
        challengeId: 67,
        correct: true,
        text: "carefully",
        audioSrc: "/en_carefully.mp3",
      },
      {
        challengeId: 67,
        correct: false,
        text: "quickly",
        audioSrc: "/en_quickly.mp3",
      },
      {
        challengeId: 67,
        correct: false,
        text: "easily",
        audioSrc: "/en_easily.mp3",
      },

      // SELECT (Gently)
      {
        challengeId: 68,
        correct: true,
        text: "gently",
        audioSrc: "/en_gently.mp3",
      },
      {
        challengeId: 68,
        correct: false,
        text: "harshly",
        audioSrc: "/en_harshly.mp3",
      },
      {
        challengeId: 68,
        correct: false,
        text: "quickly",
        audioSrc: "/en_quickly.mp3",
      },

      // ASSIST (Quickly)
      {
        challengeId: 69,
        correct: true,
        text: "rápidamente",
        audioSrc: "/es_quickly.mp3",
      },
      {
        challengeId: 69,
        correct: false,
        text: "lentamente",
        audioSrc: "/es_slowly.mp3",
      },
      {
        challengeId: 69,
        correct: false,
        text: "cuidadosamente",
        audioSrc: "/es_carefully.mp3",
      },

      // ASSIST (Carefully)
      {
        challengeId: 70,
        correct: true,
        text: "cuidadosamente",
        audioSrc: "/es_carefully.mp3",
      },
      {
        challengeId: 70,
        correct: false,
        text: "rápidamente",
        audioSrc: "/es_quickly.mp3",
      },
      {
        challengeId: 70,
        correct: false,
        text: "fácilmente",
        audioSrc: "/es_easily.mp3",
      },
    ]);

    // Lesson 5: Mixed Articles and Adverbs
    await db.insert(schema.challenges).values([
      // SELECT questions (Mixed Articles and Adverbs)
      {
        id: 71,
        lessonId: 15, // Adjust lesson ID accordingly
        type: "SELECT",
        order: 1,
        question:
          "Which article is used for singular nouns starting with a vowel?",
      },
      {
        id: 72,
        lessonId: 15,
        type: "SELECT",
        order: 2,
        question: "What adverb describes an action happening soon?",
      },
      {
        id: 73,
        lessonId: 15,
        type: "SELECT",
        order: 3,
        question: "Which adverb indicates a specific time?",
      },
      // ASSIST questions (Mixed Articles and Adverbs)
      {
        id: 74,
        lessonId: 15,
        type: "ASSIST",
        order: 4,
        question: 'How to say "an apple" in Spanish?',
      },
      {
        id: 75,
        lessonId: 15,
        type: "ASSIST",
        order: 5,
        question: 'How to say "tomorrow" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Article for vowel)
      {
        challengeId: 71,
        correct: true,
        text: "an",
        audioSrc: "/en_an.mp3",
      },
      {
        challengeId: 71,
        correct: false,
        text: "a",
        audioSrc: "/en_a.mp3",
      },
      {
        challengeId: 71,
        correct: false,
        text: "the",
        audioSrc: "/en_the.mp3",
      },

      // SELECT (Action happening soon)
      {
        challengeId: 72,
        correct: true,
        text: "soon",
        audioSrc: "/en_soon.mp3",
      },
      {
        challengeId: 72,
        correct: false,
        text: "now",
        audioSrc: "/en_now.mp3",
      },
      {
        challengeId: 72,
        correct: false,
        text: "later",
        audioSrc: "/en_later.mp3",
      },

      // SELECT (Specific time)
      {
        challengeId: 73,
        correct: true,
        text: "tomorrow",
        audioSrc: "/en_tomorrow.mp3",
      },
      {
        challengeId: 73,
        correct: false,
        text: "today",
        audioSrc: "/en_today.mp3",
      },
      {
        challengeId: 73,
        correct: false,
        text: "yesterday",
        audioSrc: "/en_yesterday.mp3",
      },

      // ASSIST (An apple)
      {
        challengeId: 74,
        correct: true,
        text: "una manzana",
        audioSrc: "/es_an_apple.mp3",
      },
      {
        challengeId: 74,
        correct: false,
        text: "la manzana",
        audioSrc: "/es_the_apple.mp3",
      },
      {
        challengeId: 74,
        correct: false,
        text: "el manzana",
        audioSrc: "/es_the_masculine_apple.mp3",
      },

      // ASSIST (Tomorrow)
      {
        challengeId: 75,
        correct: true,
        text: "mañana",
        audioSrc: "/es_tomorrow.mp3",
      },
      {
        challengeId: 75,
        correct: false,
        text: "ayer",
        audioSrc: "/es_yesterday.mp3",
      },
      {
        challengeId: 75,
        correct: false,
        text: "hoy",
        audioSrc: "/es_today.mp3",
      },
    ]);

    // UNit 4

    await db.insert(schema.challenges).values([
      // SELECT questions (Prepositions of Place)
      {
        id: 101,
        lessonId: 16, // Adjust lesson ID accordingly
        type: "SELECT",
        order: 1,
        question:
          "Which preposition would you use for something located inside a container?",
      },
      {
        id: 102,
        lessonId: 16,
        type: "SELECT",
        order: 2,
        question:
          "What preposition do you use for something placed on a surface?",
      },
      {
        id: 103,
        lessonId: 16,
        type: "SELECT",
        order: 3,
        question: "Which preposition is used for a position under an object?",
      },
      // ASSIST questions (Prepositions of Place)
      {
        id: 104,
        lessonId: 16,
        type: "ASSIST",
        order: 4,
        question: 'How to say "The cat is on the table" in Spanish?',
      },
      {
        id: 105,
        lessonId: 16,
        type: "ASSIST",
        order: 5,
        question: 'How to say "The book is under the bed" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Inside a container)
      {
        challengeId: 101,
        correct: true,
        text: "in",
        audioSrc: "/en_in.mp3",
      },
      {
        challengeId: 101,
        correct: false,
        text: "on",
        audioSrc: "/en_on.mp3",
      },
      {
        challengeId: 101,
        correct: false,
        text: "under",
        audioSrc: "/en_under.mp3",
      },

      // SELECT (On a surface)
      {
        challengeId: 102,
        correct: true,
        text: "on",
        audioSrc: "/en_on.mp3",
      },
      {
        challengeId: 102,
        correct: false,
        text: "in",
        audioSrc: "/en_in.mp3",
      },
      {
        challengeId: 102,
        correct: false,
        text: "under",
        audioSrc: "/en_under.mp3",
      },

      // SELECT (Under an object)
      {
        challengeId: 103,
        correct: true,
        text: "under",
        audioSrc: "/en_under.mp3",
      },
      {
        challengeId: 103,
        correct: false,
        text: "on",
        audioSrc: "/en_on.mp3",
      },
      {
        challengeId: 103,
        correct: false,
        text: "in",
        audioSrc: "/en_in.mp3",
      },

      // ASSIST (The cat is on the table)
      {
        challengeId: 104,
        correct: true,
        text: "El gato está en la mesa",
        audioSrc: "/es_the_cat_on_the_table.mp3",
      },
      {
        challengeId: 104,
        correct: false,
        text: "El gato está bajo la mesa",
        audioSrc: "/es_the_cat_under_the_table.mp3",
      },
      {
        challengeId: 104,
        correct: false,
        text: "El gato está dentro de la mesa",
        audioSrc: "/es_the_cat_inside_the_table.mp3",
      },

      // ASSIST (The book is under the bed)
      {
        challengeId: 105,
        correct: true,
        text: "El libro está debajo de la cama",
        audioSrc: "/es_the_book_under_the_bed.mp3",
      },
      {
        challengeId: 105,
        correct: false,
        text: "El libro está en la cama",
        audioSrc: "/es_the_book_on_the_bed.mp3",
      },
      {
        challengeId: 105,
        correct: false,
        text: "El libro está sobre la cama",
        audioSrc: "/es_the_book_above_the_bed.mp3",
      },
    ]);

    // Lesson 2 UNit 4
    await db.insert(schema.challenges).values([
      // SELECT questions (Prepositions of Time)
      {
        id: 106,
        lessonId: 17, // Adjust lesson ID accordingly
        type: "SELECT",
        order: 1,
        question:
          'Which preposition is used to refer to specific times (like "noon" or "midnight")?',
      },
      {
        id: 107,
        lessonId: 17,
        type: "SELECT",
        order: 2,
        question: "What preposition do you use for days of the week?",
      },
      {
        id: 108,
        lessonId: 17,
        type: "SELECT",
        order: 3,
        question:
          "Which preposition is used to indicate something happening before a specific time?",
      },
      // ASSIST questions (Prepositions of Time)
      {
        id: 109,
        lessonId: 17,
        type: "ASSIST",
        order: 4,
        question: 'How to say "I will meet you at noon" in Spanish?',
      },
      {
        id: 110,
        lessonId: 17,
        type: "ASSIST",
        order: 5,
        question: 'How to say "The meeting is on Monday" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Specific times)
      {
        challengeId: 106,
        correct: true,
        text: "at",
        audioSrc: "/en_at.mp3",
      },
      {
        challengeId: 106,
        correct: false,
        text: "on",
        audioSrc: "/en_on.mp3",
      },
      {
        challengeId: 106,
        correct: false,
        text: "before",
        audioSrc: "/en_before.mp3",
      },

      // SELECT (Days of the week)
      {
        challengeId: 107,
        correct: true,
        text: "on",
        audioSrc: "/en_on.mp3",
      },
      {
        challengeId: 107,
        correct: false,
        text: "at",
        audioSrc: "/en_at.mp3",
      },
      {
        challengeId: 107,
        correct: false,
        text: "before",
        audioSrc: "/en_before.mp3",
      },

      // SELECT (Before a time)
      {
        challengeId: 108,
        correct: true,
        text: "before",
        audioSrc: "/en_before.mp3",
      },
      {
        challengeId: 108,
        correct: false,
        text: "at",
        audioSrc: "/en_at.mp3",
      },
      {
        challengeId: 108,
        correct: false,
        text: "on",
        audioSrc: "/en_on.mp3",
      },

      // ASSIST (Meet you at noon)
      {
        challengeId: 109,
        correct: true,
        text: "Te veré al mediodía",
        audioSrc: "/es_meet_at_noon.mp3",
      },
      {
        challengeId: 109,
        correct: false,
        text: "Te veré en el mediodía",
        audioSrc: "/es_meet_during_noon.mp3",
      },
      {
        challengeId: 109,
        correct: false,
        text: "Te veré sobre el mediodía",
        audioSrc: "/es_meet_about_noon.mp3",
      },

      // ASSIST (Meeting on Monday)
      {
        challengeId: 110,
        correct: true,
        text: "La reunión es el lunes",
        audioSrc: "/es_meeting_on_monday.mp3",
      },
      {
        challengeId: 110,
        correct: false,
        text: "La reunión es al lunes",
        audioSrc: "/es_meeting_at_monday.mp3",
      },
      {
        challengeId: 110,
        correct: false,
        text: "La reunión es antes del lunes",
        audioSrc: "/es_meeting_before_monday.mp3",
      },
    ]);

    // lesson 3 unit 4

    await db.insert(schema.challenges).values([
      // SELECT questions (Conjunctions)
      {
        id: 111,
        lessonId: 18, // Adjust lesson ID accordingly
        type: "SELECT",
        order: 1,
        question: "Which conjunction joins two ideas that are similar?",
      },
      {
        id: 112,
        lessonId: 18,
        type: "SELECT",
        order: 2,
        question: "What conjunction is used to present an alternative?",
      },
      {
        id: 113,
        lessonId: 18,
        type: "SELECT",
        order: 3,
        question: "Which conjunction introduces a contrast?",
      },
      // ASSIST questions (Conjunctions)
      {
        id: 114,
        lessonId: 18,
        type: "ASSIST",
        order: 4,
        question: 'How to say "I like apples and oranges" in Spanish?',
      },
      {
        id: 115,
        lessonId: 18,
        type: "ASSIST",
        order: 5,
        question: 'How to say "I want coffee or tea" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Join similar ideas)
      {
        challengeId: 111,
        correct: true,
        text: "and",
        audioSrc: "/en_and.mp3",
      },
      {
        challengeId: 111,
        correct: false,
        text: "or",
        audioSrc: "/en_or.mp3",
      },
      {
        challengeId: 111,
        correct: false,
        text: "but",
        audioSrc: "/en_but.mp3",
      },

      // SELECT (Present an alternative)
      {
        challengeId: 112,
        correct: true,
        text: "or",
        audioSrc: "/en_or.mp3",
      },
      {
        challengeId: 112,
        correct: false,
        text: "and",
        audioSrc: "/en_and.mp3",
      },
      {
        challengeId: 112,
        correct: false,
        text: "but",
        audioSrc: "/en_but.mp3",
      },

      // SELECT (Introduce contrast)
      {
        challengeId: 113,
        correct: true,
        text: "but",
        audioSrc: "/en_but.mp3",
      },
      {
        challengeId: 113,
        correct: false,
        text: "and",
        audioSrc: "/en_and.mp3",
      },
      {
        challengeId: 113,
        correct: false,
        text: "or",
        audioSrc: "/en_or.mp3",
      },

      // ASSIST (Apples and oranges)
      {
        challengeId: 114,
        correct: true,
        text: "Me gustan las manzanas y las naranjas",
        audioSrc: "/es_apples_and_oranges.mp3",
      },
      {
        challengeId: 114,
        correct: false,
        text: "Me gustan las manzanas o las naranjas",
        audioSrc: "/es_apples_or_oranges.mp3",
      },
      {
        challengeId: 114,
        correct: false,
        text: "Me gustan las manzanas pero no las naranjas",
        audioSrc: "/es_apples_but_not_oranges.mp3",
      },

      // ASSIST (Coffee or tea)
      {
        challengeId: 115,
        correct: true,
        text: "Quiero café o té",
        audioSrc: "/es_coffee_or_tea.mp3",
      },
      {
        challengeId: 115,
        correct: false,
        text: "Quiero café y té",
        audioSrc: "/es_coffee_and_tea.mp3",
      },
      {
        challengeId: 115,
        correct: false,
        text: "Quiero café pero no té",
        audioSrc: "/es_coffee_but_not_tea.mp3",
      },
    ]);

    // Lesson 4 unit 4

    await db.insert(schema.challenges).values([
      // SELECT questions (Prepositions of Movement)
      {
        id: 116,
        lessonId: 19, // Adjust lesson ID accordingly
        type: "SELECT",
        order: 1,
        question:
          "Which preposition is used to describe movement from one place to another?",
      },
      {
        id: 117,
        lessonId: 19,
        type: "SELECT",
        order: 2,
        question:
          "What preposition describes movement in the direction of something?",
      },
      {
        id: 118,
        lessonId: 19,
        type: "SELECT",
        order: 3,
        question:
          "Which preposition describes movement through a space like a tunnel or street?",
      },
      // ASSIST questions (Prepositions of Movement)
      {
        id: 119,
        lessonId: 19,
        type: "ASSIST",
        order: 4,
        question: 'How to say "I am walking towards the park" in Spanish?',
      },
      {
        id: 120,
        lessonId: 19,
        type: "ASSIST",
        order: 5,
        question: 'How to say "He went through the tunnel" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Movement from one place to another)
      {
        challengeId: 116,
        correct: true,
        text: "to",
        audioSrc: "/en_to.mp3",
      },
      {
        challengeId: 116,
        correct: false,
        text: "through",
        audioSrc: "/en_through.mp3",
      },
      {
        challengeId: 116,
        correct: false,
        text: "towards",
        audioSrc: "/en_towards.mp3",
      },

      // SELECT (Movement in a direction)
      {
        challengeId: 117,
        correct: true,
        text: "towards",
        audioSrc: "/en_towards.mp3",
      },
      {
        challengeId: 117,
        correct: false,
        text: "to",
        audioSrc: "/en_to.mp3",
      },
      {
        challengeId: 117,
        correct: false,
        text: "across",
        audioSrc: "/en_across.mp3",
      },

      // SELECT (Movement through a space)
      {
        challengeId: 118,
        correct: true,
        text: "through",
        audioSrc: "/en_through.mp3",
      },
      {
        challengeId: 118,
        correct: false,
        text: "to",
        audioSrc: "/en_to.mp3",
      },
      {
        challengeId: 118,
        correct: false,
        text: "towards",
        audioSrc: "/en_towards.mp3",
      },

      // ASSIST (Walking towards the park)
      {
        challengeId: 119,
        correct: true,
        text: "Estoy caminando hacia el parque",
        audioSrc: "/es_walking_towards_park.mp3",
      },
      {
        challengeId: 119,
        correct: false,
        text: "Estoy caminando a través del parque",
        audioSrc: "/es_walking_through_park.mp3",
      },
      {
        challengeId: 119,
        correct: false,
        text: "Estoy caminando sobre el parque",
        audioSrc: "/es_walking_over_park.mp3",
      },

      // ASSIST (Through the tunnel)
      {
        challengeId: 120,
        correct: true,
        text: "Él pasó por el túnel",
        audioSrc: "/es_through_tunnel.mp3",
      },
      {
        challengeId: 120,
        correct: false,
        text: "Él fue al túnel",
        audioSrc: "/es_went_to_tunnel.mp3",
      },
      {
        challengeId: 120,
        correct: false,
        text: "Él caminó hacia el túnel",
        audioSrc: "/es_walked_towards_tunnel.mp3",
      },
    ]);

    //Lesson 5 unit 4

    await db.insert(schema.challenges).values([
      // SELECT questions (Correlative Conjunctions)
      {
        id: 121,
        lessonId: 20, // Adjust lesson ID accordingly
        type: "SELECT",
        order: 1,
        question: "Which conjunction pair presents two alternatives?",
      },
      {
        id: 122,
        lessonId: 20,
        type: "SELECT",
        order: 2,
        question:
          "What conjunction pair is used to present two negative possibilities?",
      },
      {
        id: 123,
        lessonId: 20,
        type: "SELECT",
        order: 3,
        question:
          'Which conjunction pair can be used to say "both this and that"?',
      },
      // ASSIST questions (Correlative Conjunctions)
      {
        id: 124,
        lessonId: 20,
        type: "ASSIST",
        order: 4,
        question: 'How to say "I will either eat pizza or pasta" in Spanish?',
      },
      {
        id: 125,
        lessonId: 20,
        type: "ASSIST",
        order: 5,
        question: 'How to say "Neither he nor I like fish" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Presents two alternatives)
      {
        challengeId: 121,
        correct: true,
        text: "either... or",
        audioSrc: "/en_either_or.mp3",
      },
      {
        challengeId: 121,
        correct: false,
        text: "neither... nor",
        audioSrc: "/en_neither_nor.mp3",
      },
      {
        challengeId: 121,
        correct: false,
        text: "both... and",
        audioSrc: "/en_both_and.mp3",
      },

      // SELECT (Two negative possibilities)
      {
        challengeId: 122,
        correct: true,
        text: "neither... nor",
        audioSrc: "/en_neither_nor.mp3",
      },
      {
        challengeId: 122,
        correct: false,
        text: "either... or",
        audioSrc: "/en_either_or.mp3",
      },
      {
        challengeId: 122,
        correct: false,
        text: "both... and",
        audioSrc: "/en_both_and.mp3",
      },

      // SELECT (Both possibilities)
      {
        challengeId: 123,
        correct: true,
        text: "both... and",
        audioSrc: "/en_both_and.mp3",
      },
      {
        challengeId: 123,
        correct: false,
        text: "either... or",
        audioSrc: "/en_either_or.mp3",
      },
      {
        challengeId: 123,
        correct: false,
        text: "neither... nor",
        audioSrc: "/en_neither_nor.mp3",
      },

      // ASSIST (Pizza or pasta)
      {
        challengeId: 124,
        correct: true,
        text: "Voy a comer pizza o pasta",
        audioSrc: "/es_either_pizza_or_pasta.mp3",
      },
      {
        challengeId: 124,
        correct: false,
        text: "Voy a comer ni pizza ni pasta",
        audioSrc: "/es_neither_pizza_nor_pasta.mp3",
      },
      {
        challengeId: 124,
        correct: false,
        text: "Voy a comer tanto pizza como pasta",
        audioSrc: "/es_both_pizza_and_pasta.mp3",
      },

      // ASSIST (Neither he nor I like fish)
      {
        challengeId: 125,
        correct: true,
        text: "Ni él ni yo nos gusta el pescado",
        audioSrc: "/es_neither_he_nor_i_like_fish.mp3",
      },
      {
        challengeId: 125,
        correct: false,
        text: "Tanto él como yo nos gusta el pescado",
        audioSrc: "/es_both_he_and_i_like_fish.mp3",
      },
      {
        challengeId: 125,
        correct: false,
        text: "O él o yo nos gusta el pescado",
        audioSrc: "/es_either_he_or_i_like_fish.mp3",
      },
    ]);

    // Unit 5

    // Lesson 1 Basic Plural Forms of Nouns
    await db.insert(schema.challenges).values([
      // SELECT questions (Plural Forms of Nouns)
      {
        id: 126,
        lessonId: 21, // Adjust lesson ID accordingly
        type: "SELECT",
        order: 1,
        question: 'What is the plural of "book"?',
      },
      {
        id: 127,
        lessonId: 21,
        type: "SELECT",
        order: 2,
        question: 'What is the plural of "city"?',
      },
      {
        id: 128,
        lessonId: 21,
        type: "SELECT",
        order: 3,
        question: 'What is the plural of "child"?',
      },
      // ASSIST questions (Forming plurals)
      {
        id: 129,
        lessonId: 21,
        type: "ASSIST",
        order: 4,
        question: 'How to form the plural of "cat" in Spanish?',
      },
      {
        id: 130,
        lessonId: 21,
        type: "ASSIST",
        order: 5,
        question: 'What is the plural form of "persona" (person) in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Plural of book)
      {
        challengeId: 126,
        correct: true,
        text: "books",
        audioSrc: "/en_books.mp3",
      },
      {
        challengeId: 126,
        correct: false,
        text: "bookes",
        audioSrc: "/en_bookes.mp3",
      },
      {
        challengeId: 126,
        correct: false,
        text: "book",
        audioSrc: "/en_book.mp3",
      },

      // SELECT (Plural of city)
      {
        challengeId: 127,
        correct: true,
        text: "cities",
        audioSrc: "/en_cities.mp3",
      },
      {
        challengeId: 127,
        correct: false,
        text: "citys",
        audioSrc: "/en_citys.mp3",
      },
      {
        challengeId: 127,
        correct: false,
        text: "city",
        audioSrc: "/en_city.mp3",
      },

      // SELECT (Plural of child)
      {
        challengeId: 128,
        correct: true,
        text: "children",
        audioSrc: "/en_children.mp3",
      },
      {
        challengeId: 128,
        correct: false,
        text: "childs",
        audioSrc: "/en_childs.mp3",
      },
      {
        challengeId: 128,
        correct: false,
        text: "child",
        audioSrc: "/en_child.mp3",
      },

      // ASSIST (Plural of cat in Spanish)
      {
        challengeId: 129,
        correct: true,
        text: "gatos",
        audioSrc: "/es_gatos.mp3",
      },
      {
        challengeId: 129,
        correct: false,
        text: "gato",
        audioSrc: "/es_gato.mp3",
      },
      {
        challengeId: 129,
        correct: false,
        text: "gatas",
        audioSrc: "/es_gatas.mp3",
      },

      // ASSIST (Plural of persona)
      {
        challengeId: 130,
        correct: true,
        text: "personas",
        audioSrc: "/es_personas.mp3",
      },
      {
        challengeId: 130,
        correct: false,
        text: "personos",
        audioSrc: "/es_personos.mp3",
      },
      {
        challengeId: 130,
        correct: false,
        text: "persona",
        audioSrc: "/es_persona.mp3",
      },
    ]);

    // Lesson 2 Irregular Plural Forms

    await db.insert(schema.challenges).values([
      // SELECT questions (Irregular Plural Forms)
      {
        id: 131,
        lessonId: 22,
        type: "SELECT",
        order: 1,
        question: 'What is the plural of "man"?',
      },
      {
        id: 132,
        lessonId: 22,
        type: "SELECT",
        order: 2,
        question: 'What is the plural of "tooth"?',
      },
      {
        id: 133,
        lessonId: 22,
        type: "SELECT",
        order: 3,
        question: 'What is the plural of "foot"?',
      },
      // ASSIST questions (Irregular plural formation)
      {
        id: 134,
        lessonId: 22,
        type: "ASSIST",
        order: 4,
        question: 'How to say "women" in Spanish?',
      },
      {
        id: 135,
        lessonId: 22,
        type: "ASSIST",
        order: 5,
        question: 'What is the plural form of "luz" (light) in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Plural of man)
      {
        challengeId: 131,
        correct: true,
        text: "men",
        audioSrc: "/en_men.mp3",
      },
      {
        challengeId: 131,
        correct: false,
        text: "mans",
        audioSrc: "/en_mans.mp3",
      },
      {
        challengeId: 131,
        correct: false,
        text: "man",
        audioSrc: "/en_man.mp3",
      },

      // SELECT (Plural of tooth)
      {
        challengeId: 132,
        correct: true,
        text: "teeth",
        audioSrc: "/en_teeth.mp3",
      },
      {
        challengeId: 132,
        correct: false,
        text: "tooths",
        audioSrc: "/en_tooths.mp3",
      },
      {
        challengeId: 132,
        correct: false,
        text: "tooth",
        audioSrc: "/en_tooth.mp3",
      },

      // SELECT (Plural of foot)
      {
        challengeId: 133,
        correct: true,
        text: "feet",
        audioSrc: "/en_feet.mp3",
      },
      {
        challengeId: 133,
        correct: false,
        text: "foots",
        audioSrc: "/en_foots.mp3",
      },
      {
        challengeId: 133,
        correct: false,
        text: "foot",
        audioSrc: "/en_foot.mp3",
      },

      // ASSIST (Plural of woman)
      {
        challengeId: 134,
        correct: true,
        text: "mujeres",
        audioSrc: "/es_mujeres.mp3",
      },
      {
        challengeId: 134,
        correct: false,
        text: "mujer",
        audioSrc: "/es_mujer.mp3",
      },
      {
        challengeId: 134,
        correct: false,
        text: "mujera",
        audioSrc: "/es_mujera.mp3",
      },

      // ASSIST (Plural of luz)
      {
        challengeId: 135,
        correct: true,
        text: "luces",
        audioSrc: "/es_luces.mp3",
      },
      {
        challengeId: 135,
        correct: false,
        text: "luzos",
        audioSrc: "/es_luzos.mp3",
      },
      {
        challengeId: 135,
        correct: false,
        text: "luzes",
        audioSrc: "/es_luzes.mp3",
      },
    ]);

    // Lesson 3  Masculine and Feminine Nouns

    await db.insert(schema.challenges).values([
      // SELECT questions (Gendered Nouns)
      {
        id: 136,
        lessonId: 23,
        type: "SELECT",
        order: 1,
        question: "Which of these is a masculine noun in Spanish?",
      },
      {
        id: 137,
        lessonId: 23,
        type: "SELECT",
        order: 2,
        question: "Which of these is a feminine noun in Spanish?",
      },
      {
        id: 138,
        lessonId: 23,
        type: "SELECT",
        order: 3,
        question: "Which of these words refers to a female?",
      },
      // ASSIST questions (Gendered nouns)
      {
        id: 139,
        lessonId: 23,
        type: "ASSIST",
        order: 4,
        question: 'How to say "the male teacher" in Spanish?',
      },
      {
        id: 140,
        lessonId: 23,
        type: "ASSIST",
        order: 5,
        question: 'How to say "the female doctor" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Masculine noun in Spanish)
      {
        challengeId: 136,
        correct: true,
        text: "gato",
        audioSrc: "/es_gato.mp3",
      },
      {
        challengeId: 136,
        correct: false,
        text: "gata",
        audioSrc: "/es_gata.mp3",
      },
      {
        challengeId: 136,
        correct: false,
        text: "gatas",
        audioSrc: "/es_gatas.mp3",
      },

      // SELECT (Feminine noun in Spanish)
      {
        challengeId: 137,
        correct: true,
        text: "mujer",
        audioSrc: "/es_mujer.mp3",
      },
      {
        challengeId: 137,
        correct: false,
        text: "hombre",
        audioSrc: "/es_hombre.mp3",
      },
      {
        challengeId: 137,
        correct: false,
        text: "gato",
        audioSrc: "/es_gato.mp3",
      },

      // SELECT (Female noun)
      {
        challengeId: 138,
        correct: true,
        text: "queen",
        audioSrc: "/en_queen.mp3",
      },
      {
        challengeId: 138,
        correct: false,
        text: "king",
        audioSrc: "/en_king.mp3",
      },
      {
        challengeId: 138,
        correct: false,
        text: "actor",
        audioSrc: "/en_actor.mp3",
      },

      // ASSIST (Male teacher)
      {
        challengeId: 139,
        correct: true,
        text: "el maestro",
        audioSrc: "/es_el_maestro.mp3",
      },
      {
        challengeId: 139,
        correct: false,
        text: "la maestra",
        audioSrc: "/es_la_maestra.mp3",
      },
      {
        challengeId: 139,
        correct: false,
        text: "el médico",
        audioSrc: "/es_el_medico.mp3",
      },

      // ASSIST (Female doctor)
      {
        challengeId: 140,
        correct: true,
        text: "la doctora",
        audioSrc: "/es_la_doctora.mp3",
      },
      {
        challengeId: 140,
        correct: false,
        text: "el doctor",
        audioSrc: "/es_el_doctor.mp3",
      },
      {
        challengeId: 140,
        correct: false,
        text: "la médica",
        audioSrc: "/es_la_medica.mp3",
      },
    ]);

    // Lesson 4 Exceptions to Gendered Nouns

    await db.insert(schema.challenges).values([
      // SELECT questions (Exceptions to Gendered Nouns)
      {
        id: 141,
        lessonId: 24,
        type: "SELECT",
        order: 1,
        question: "Which of these nouns is masculine, despite ending in -a?",
      },
      {
        id: 142,
        lessonId: 24,
        type: "SELECT",
        order: 2,
        question: "Which noun is feminine, despite ending in -o?",
      },
      {
        id: 143,
        lessonId: 24,
        type: "SELECT",
        order: 3,
        question: "Which noun is irregular in gender?",
      },
      // ASSIST questions (Irregular gendered nouns)
      {
        id: 144,
        lessonId: 24,
        type: "ASSIST",
        order: 4,
        question:
          'How to say "the map" in Spanish (an exception to gender rules)?',
      },
      {
        id: 145,
        lessonId: 24,
        type: "ASSIST",
        order: 5,
        question:
          'How to say "the day" in Spanish (an exception to gender rules)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Masculine noun ending in -a)
      {
        challengeId: 141,
        correct: true,
        text: "el problema",
        audioSrc: "/es_el_problema.mp3",
      },
      {
        challengeId: 141,
        correct: false,
        text: "la casa",
        audioSrc: "/es_la_casa.mp3",
      },
      {
        challengeId: 141,
        correct: false,
        text: "la gata",
        audioSrc: "/es_la_gata.mp3",
      },

      // SELECT (Feminine noun ending in -o)
      {
        challengeId: 142,
        correct: true,
        text: "la mano",
        audioSrc: "/es_la_mano.mp3",
      },
      {
        challengeId: 142,
        correct: false,
        text: "el libro",
        audioSrc: "/es_el_libro.mp3",
      },
      {
        challengeId: 142,
        correct: false,
        text: "el gato",
        audioSrc: "/es_el_gato.mp3",
      },

      // SELECT (Irregular gender noun)
      {
        challengeId: 143,
        correct: true,
        text: "el agua",
        audioSrc: "/es_el_agua.mp3",
      },
      {
        challengeId: 143,
        correct: false,
        text: "la mesa",
        audioSrc: "/es_la_mesa.mp3",
      },
      {
        challengeId: 143,
        correct: false,
        text: "la gata",
        audioSrc: "/es_la_gata.mp3",
      },

      // ASSIST (The map in Spanish)
      {
        challengeId: 144,
        correct: true,
        text: "el mapa",
        audioSrc: "/es_el_mapa.mp3",
      },
      {
        challengeId: 144,
        correct: false,
        text: "la mapa",
        audioSrc: "/es_la_mapa.mp3",
      },
      {
        challengeId: 144,
        correct: false,
        text: "el mape",
        audioSrc: "/es_el_mape.mp3",
      },

      // ASSIST (The day in Spanish)
      {
        challengeId: 145,
        correct: true,
        text: "el día",
        audioSrc: "/es_el_dia.mp3",
      },
      {
        challengeId: 145,
        correct: false,
        text: "la día",
        audioSrc: "/es_la_dia.mp3",
      },
      {
        challengeId: 145,
        correct: false,
        text: "el dío",
        audioSrc: "/es_el_dio.mp3",
      },
    ]);

    // Lesson 5 Plurals and Gendered Nouns

    await db.insert(schema.challenges).values([
      // SELECT questions (Review Plurals and Gendered Nouns)
      {
        id: 146,
        lessonId: 25,
        type: "SELECT",
        order: 1,
        question: 'What is the correct plural of "person"?',
      },
      {
        id: 147,
        lessonId: 25,
        type: "SELECT",
        order: 2,
        question: 'What is the correct gender of "mano" (hand) in Spanish?',
      },
      {
        id: 148,
        lessonId: 25,
        type: "SELECT",
        order: 3,
        question: 'What is the plural form of "woman"?',
      },
      // ASSIST questions (Review Plurals and Gendered Nouns)
      {
        id: 149,
        lessonId: 25,
        type: "ASSIST",
        order: 4,
        question: 'How to say "the women" in Spanish?',
      },
      {
        id: 150,
        lessonId: 25,
        type: "ASSIST",
        order: 5,
        question: 'How to say "the maps" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Plural of person)
      {
        challengeId: 146,
        correct: true,
        text: "people",
        audioSrc: "/en_people.mp3",
      },
      {
        challengeId: 146,
        correct: false,
        text: "persons",
        audioSrc: "/en_persons.mp3",
      },
      {
        challengeId: 146,
        correct: false,
        text: "peoples",
        audioSrc: "/en_peoples.mp3",
      },

      // SELECT (Gender of mano)
      {
        challengeId: 147,
        correct: true,
        text: "feminine",
        audioSrc: "/en_feminine.mp3",
      },
      {
        challengeId: 147,
        correct: false,
        text: "masculine",
        audioSrc: "/en_masculine.mp3",
      },
      {
        challengeId: 147,
        correct: false,
        text: "neutral",
        audioSrc: "/en_neutral.mp3",
      },

      // SELECT (Plural of woman)
      {
        challengeId: 148,
        correct: true,
        text: "women",
        audioSrc: "/en_women.mp3",
      },
      {
        challengeId: 148,
        correct: false,
        text: "womans",
        audioSrc: "/en_womans.mp3",
      },
      {
        challengeId: 148,
        correct: false,
        text: "womons",
        audioSrc: "/en_womons.mp3",
      },

      // ASSIST (The women in Spanish)
      {
        challengeId: 149,
        correct: true,
        text: "las mujeres",
        audioSrc: "/es_las_mujeres.mp3",
      },
      {
        challengeId: 149,
        correct: false,
        text: "los mujeres",
        audioSrc: "/es_los_mujeres.mp3",
      },
      {
        challengeId: 149,
        correct: false,
        text: "las mujeras",
        audioSrc: "/es_las_mujeras.mp3",
      },

      // ASSIST (The maps in Spanish)
      {
        challengeId: 150,
        correct: true,
        text: "los mapas",
        audioSrc: "/es_los_mapas.mp3",
      },
      {
        challengeId: 150,
        correct: false,
        text: "las mapas",
        audioSrc: "/es_las_mapas.mp3",
      },
      {
        challengeId: 150,
        correct: false,
        text: "los mapos",
        audioSrc: "/es_los_mapos.mp3",
      },
    ]);

    // Unit 6: Simple Sentences, Negative Sentences, and Questions

    //Lesson 1 Simple Sentences
    await db.insert(schema.challenges).values([
      // SELECT questions (Simple Sentence Structure)
      {
        id: 151,
        lessonId: 26,
        type: "SELECT",
        order: 1,
        question: 'What is the correct subject in the sentence: "I eat pizza"?',
      },
      {
        id: 152,
        lessonId: 26,
        type: "SELECT",
        order: 2,
        question: 'Identify the object in the sentence: "She drinks water."',
      },
      {
        id: 153,
        lessonId: 26,
        type: "SELECT",
        order: 3,
        question: 'How do you say "He reads a book" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Subject of "I eat pizza")
      {
        challengeId: 151,
        correct: true,
        text: "I",
        audioSrc: "/en_I.mp3",
      },
      {
        challengeId: 151,
        correct: false,
        text: "pizza",
        audioSrc: "/en_pizza.mp3",
      },
      {
        challengeId: 151,
        correct: false,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },

      // SELECT (Object of "She drinks water")
      {
        challengeId: 152,
        correct: true,
        text: "water",
        audioSrc: "/en_water.mp3",
      },
      {
        challengeId: 152,
        correct: false,
        text: "She",
        audioSrc: "/en_she.mp3",
      },
      {
        challengeId: 152,
        correct: false,
        text: "drinks",
        audioSrc: "/en_drinks.mp3",
      },

      // SELECT (Translate "He reads a book" to Spanish)
      {
        challengeId: 153,
        correct: true,
        text: "Él lee un libro.",
        audioSrc: "/es_el_lee_un_libro.mp3",
      },
      {
        challengeId: 153,
        correct: false,
        text: "Él leer un libro.",
        audioSrc: "/es_el_leer_un_libro.mp3",
      },
      {
        challengeId: 153,
        correct: false,
        text: "Él lee libro.",
        audioSrc: "/es_el_lee_libro.mp3",
      },
    ]);

    //Lesson 2 Negative Sentences
    await db.insert(schema.challenges).values([
      // SELECT questions (Negative Sentences)
      {
        id: 154,
        lessonId: 27,
        type: "SELECT",
        order: 1,
        question: 'How do you say "I do not like apples" in Spanish?',
      },
      {
        id: 155,
        lessonId: 27,
        type: "SELECT",
        order: 2,
        question:
          'What is the correct way to negate the sentence: "She plays soccer"?',
      },
      {
        id: 156,
        lessonId: 27,
        type: "SELECT",
        order: 3,
        question: "Which of these is a negative sentence?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "I do not like apples" to Spanish)
      {
        challengeId: 154,
        correct: true,
        text: "No me gustan las manzanas.",
        audioSrc: "/es_no_me_gustan_las_manzanas.mp3",
      },
      {
        challengeId: 154,
        correct: false,
        text: "Me gustan las manzanas.",
        audioSrc: "/es_me_gustan_las_manzanas.mp3",
      },
      {
        challengeId: 154,
        correct: false,
        text: "Yo no gusta manzanas.",
        audioSrc: "/es_yo_no_gusta_manzanas.mp3",
      },

      // SELECT (Negate "She plays soccer")
      {
        challengeId: 155,
        correct: true,
        text: "She does not play soccer.",
        audioSrc: "/en_she_does_not_play_soccer.mp3",
      },
      {
        challengeId: 155,
        correct: false,
        text: "She plays not soccer.",
        audioSrc: "/en_she_plays_not_soccer.mp3",
      },
      {
        challengeId: 155,
        correct: false,
        text: "Not she plays soccer.",
        audioSrc: "/en_not_she_plays_soccer.mp3",
      },

      // SELECT (Identify a negative sentence)
      {
        challengeId: 156,
        correct: true,
        text: "I do not like pizza.",
        audioSrc: "/en_i_do_not_like_pizza.mp3",
      },
      {
        challengeId: 156,
        correct: false,
        text: "She likes pizza.",
        audioSrc: "/en_she_likes_pizza.mp3",
      },
      {
        challengeId: 156,
        correct: false,
        text: "He eats apples.",
        audioSrc: "/en_he_eats_apples.mp3",
      },
    ]);

    //Lesson 3 Yes/No Questions

    await db.insert(schema.challenges).values([
      // SELECT questions (Yes/No Questions)
      {
        id: 157,
        lessonId: 28,
        type: "SELECT",
        order: 1,
        question: 'How do you ask "Do you like chocolate?" in Spanish?',
      },
      {
        id: 158,
        lessonId: 28,
        type: "SELECT",
        order: 2,
        question:
          'Which is the correct yes/no question form for: "She is happy"?',
      },
      {
        id: 159,
        lessonId: 28,
        type: "SELECT",
        order: 3,
        question:
          'What is the correct way to ask "Is he your brother?" in Spanish?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "Do you like chocolate?" to Spanish)
      {
        challengeId: 157,
        correct: true,
        text: "¿Te gusta el chocolate?",
        audioSrc: "/es_te_gusta_el_chocolate.mp3",
      },
      {
        challengeId: 157,
        correct: false,
        text: "¿Te gusta chocolates?",
        audioSrc: "/es_te_gusta_chocolates.mp3",
      },
      {
        challengeId: 157,
        correct: false,
        text: "¿Te gusta chocolate?",
        audioSrc: "/es_te_gusta_chocolate.mp3",
      },

      // SELECT (Yes/No Question for "She is happy")
      {
        challengeId: 158,
        correct: true,
        text: "Is she happy?",
        audioSrc: "/en_is_she_happy.mp3",
      },
      {
        challengeId: 158,
        correct: false,
        text: "She is happy?",
        audioSrc: "/en_she_is_happy.mp3",
      },
      {
        challengeId: 158,
        correct: false,
        text: "Happy is she?",
        audioSrc: "/en_happy_is_she.mp3",
      },

      // SELECT (Translate "Is he your brother?" to Spanish)
      {
        challengeId: 159,
        correct: true,
        text: "¿Es él tu hermano?",
        audioSrc: "/es_es_el_tu_hermano.mp3",
      },
      {
        challengeId: 159,
        correct: false,
        text: "¿Él es tu hermano?",
        audioSrc: "/es_el_tu_hermano.mp3",
      },
      {
        challengeId: 159,
        correct: false,
        text: "¿Él tu hermano es?",
        audioSrc: "/es_el_tu_hermano_es.mp3",
      },
    ]);

    //Lesson 4  Information Questions

    await db.insert(schema.challenges).values([
      // SELECT questions (Information Questions)
      {
        id: 160,
        lessonId: 29,
        type: "SELECT",
        order: 1,
        question: 'How do you say "What is your name?" in Spanish?',
      },
      {
        id: 161,
        lessonId: 29,
        type: "SELECT",
        order: 2,
        question: "What question word would you use to ask about time?",
      },
      {
        id: 162,
        lessonId: 29,
        type: "SELECT",
        order: 3,
        question: "Which of these is an information question?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "What is your name?" to Spanish)
      {
        challengeId: 160,
        correct: true,
        text: "¿Cuál es tu nombre?",
        audioSrc: "/es_cual_es_tu_nombre.mp3",
      },
      {
        challengeId: 160,
        correct: false,
        text: "¿Qué es tu nombre?",
        audioSrc: "/es_que_es_tu_nombre.mp3",
      },
      {
        challengeId: 160,
        correct: false,
        text: "¿Cómo te llamas?",
        audioSrc: "/es_como_te_llamas.mp3",
      },

      // SELECT (Question word for time)
      {
        challengeId: 161,
        correct: true,
        text: "When",
        audioSrc: "/en_when.mp3",
      },
      {
        challengeId: 161,
        correct: false,
        text: "Where",
        audioSrc: "/en_where.mp3",
      },
      {
        challengeId: 161,
        correct: false,
        text: "Who",
        audioSrc: "/en_who.mp3",
      },

      // SELECT (Identify an information question)
      {
        challengeId: 162,
        correct: true,
        text: "Where do you live?",
        audioSrc: "/en_where_do_you_live.mp3",
      },
      {
        challengeId: 162,
        correct: false,
        text: "You live?",
        audioSrc: "/en_you_live.mp3",
      },
      {
        challengeId: 162,
        correct: false,
        text: "Live you?",
        audioSrc: "/en_live_you.mp3",
      },
    ]);

    //Lesson 5 Review and Practice

    await db.insert(schema.challenges).values([
      // SELECT questions (Review)
      {
        id: 163,
        lessonId: 30,
        type: "SELECT",
        order: 1,
        question: 'How do you form a negative sentence from: "I like pizza"?',
      },
      {
        id: 164,
        lessonId: 30,
        type: "SELECT",
        order: 2,
        question:
          'What is the correct yes/no question form of: "They are coming"?',
      },
      {
        id: 165,
        lessonId: 30,
        type: "SELECT",
        order: 3,
        question: 'Translate to Spanish: "What do you want?"',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Form negative sentence from "I like pizza")
      {
        challengeId: 163,
        correct: true,
        text: "I do not like pizza.",
        audioSrc: "/en_i_do_not_like_pizza.mp3",
      },
      {
        challengeId: 163,
        correct: false,
        text: "I like not pizza.",
        audioSrc: "/en_i_like_not_pizza.mp3",
      },
      {
        challengeId: 163,
        correct: false,
        text: "Not I like pizza.",
        audioSrc: "/en_not_i_like_pizza.mp3",
      },

      // SELECT (Yes/No question from "They are coming")
      {
        challengeId: 164,
        correct: true,
        text: "Are they coming?",
        audioSrc: "/en_are_they_coming.mp3",
      },
      {
        challengeId: 164,
        correct: false,
        text: "They are coming?",
        audioSrc: "/en_they_are_coming.mp3",
      },
      {
        challengeId: 164,
        correct: false,
        text: "Coming they are?",
        audioSrc: "/en_coming_they_are.mp3",
      },

      // SELECT (Translate "What do you want?" to Spanish)
      {
        challengeId: 165,
        correct: true,
        text: "¿Qué quieres?",
        audioSrc: "/es_que_quieres.mp3",
      },
      {
        challengeId: 165,
        correct: false,
        text: "¿Cuál quieres?",
        audioSrc: "/es_cual_quieres.mp3",
      },
      {
        challengeId: 165,
        correct: false,
        text: "¿Qué quieres tú?",
        audioSrc: "/es_que_quieres_tu.mp3",
      },
    ]);

    //Unit 7: Imperatives and Verb Tenses

    //Lesson 1 Imperatives

    await db.insert(schema.challenges).values([
      // SELECT questions (Imperatives)
      {
        id: 166,
        lessonId: 31,
        type: "SELECT",
        order: 1,
        question: 'How do you say "Sit down" in Spanish?',
      },
      {
        id: 167,
        lessonId: 31,
        type: "SELECT",
        order: 2,
        question: 'What is the imperative form of "to go"?',
      },
      {
        id: 168,
        lessonId: 31,
        type: "SELECT",
        order: 3,
        question: "Which of these is an imperative sentence?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "Sit down" to Spanish)
      {
        challengeId: 166,
        correct: true,
        text: "Siéntate.",
        audioSrc: "/es_sientate.mp3",
      },
      {
        challengeId: 166,
        correct: false,
        text: "Sientate.",
        audioSrc: "/es_sientate.mp3",
      },
      {
        challengeId: 166,
        correct: false,
        text: "Siéntate tú.",
        audioSrc: "/es_sientate_tu.mp3",
      },

      // SELECT (Imperative form of "to go")
      {
        challengeId: 167,
        correct: true,
        text: "Go!",
        audioSrc: "/en_go.mp3",
      },
      {
        challengeId: 167,
        correct: false,
        text: "Going!",
        audioSrc: "/en_going.mp3",
      },
      {
        challengeId: 167,
        correct: false,
        text: "Goes!",
        audioSrc: "/en_goes.mp3",
      },

      // SELECT (Identify an imperative sentence)
      {
        challengeId: 168,
        correct: true,
        text: "Close the door.",
        audioSrc: "/en_close_the_door.mp3",
      },
      {
        challengeId: 168,
        correct: false,
        text: "I closed the door.",
        audioSrc: "/en_i_closed_the_door.mp3",
      },
      {
        challengeId: 168,
        correct: false,
        text: "Did you close the door?",
        audioSrc: "/en_did_you_close_the_door.mp3",
      },
    ]);

    //Lesson 2 Present Tense

    await db.insert(schema.challenges).values([
      // SELECT questions (Present Tense)
      {
        id: 169,
        lessonId: 32,
        type: "SELECT",
        order: 1,
        question: 'How do you say "I eat" in Spanish?',
      },
      {
        id: 170,
        lessonId: 32,
        type: "SELECT",
        order: 2,
        question: 'Which is the correct present tense form of "to run"?',
      },
      {
        id: 171,
        lessonId: 32,
        type: "SELECT",
        order: 3,
        question:
          'Identify the present tense in the sentence: "They play soccer."',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "I eat" to Spanish)
      {
        challengeId: 169,
        correct: true,
        text: "Yo como.",
        audioSrc: "/es_yo_como.mp3",
      },
      {
        challengeId: 169,
        correct: false,
        text: "Yo comiendo.",
        audioSrc: "/es_yo_comiendo.mp3",
      },
      {
        challengeId: 169,
        correct: false,
        text: "Como.",
        audioSrc: "/es_como.mp3",
      },

      // SELECT (Present tense form of "to run")
      {
        challengeId: 170,
        correct: true,
        text: "I run.",
        audioSrc: "/en_i_run.mp3",
      },
      {
        challengeId: 170,
        correct: false,
        text: "Running.",
        audioSrc: "/en_running.mp3",
      },
      {
        challengeId: 170,
        correct: false,
        text: "Ran.",
        audioSrc: "/en_ran.mp3",
      },

      // SELECT (Identify the present tense)
      {
        challengeId: 171,
        correct: true,
        text: "play",
        audioSrc: "/en_play.mp3",
      },
      {
        challengeId: 171,
        correct: false,
        text: "played",
        audioSrc: "/en_played.mp3",
      },
      {
        challengeId: 171,
        correct: false,
        text: "playing",
        audioSrc: "/en_playing.mp3",
      },
    ]);

    //Lesson 3 Past Tense

    await db.insert(schema.challenges).values([
      // SELECT questions (Past Tense)
      {
        id: 172,
        lessonId: 33,
        type: "SELECT",
        order: 1,
        question: 'How do you say "I ate" in Spanish?',
      },
      {
        id: 173,
        lessonId: 33,
        type: "SELECT",
        order: 2,
        question: 'Which is the correct past tense form of "to see"?',
      },
      {
        id: 174,
        lessonId: 33,
        type: "SELECT",
        order: 3,
        question:
          'Identify the past tense in the sentence: "She watched a movie."',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "I ate" to Spanish)
      {
        challengeId: 172,
        correct: true,
        text: "Yo comí.",
        audioSrc: "/es_yo_comi.mp3",
      },
      {
        challengeId: 172,
        correct: false,
        text: "Yo comer.",
        audioSrc: "/es_yo_comer.mp3",
      },
      {
        challengeId: 172,
        correct: false,
        text: "Comí.",
        audioSrc: "/es_comi.mp3",
      },

      // SELECT (Past tense form of "to see")
      {
        challengeId: 173,
        correct: true,
        text: "saw",
        audioSrc: "/en_saw.mp3",
      },
      {
        challengeId: 173,
        correct: false,
        text: "see",
        audioSrc: "/en_see.mp3",
      },
      {
        challengeId: 173,
        correct: false,
        text: "seeing",
        audioSrc: "/en_seeing.mp3",
      },

      // SELECT (Identify the past tense)
      {
        challengeId: 174,
        correct: true,
        text: "watched",
        audioSrc: "/en_watched.mp3",
      },
      {
        challengeId: 174,
        correct: false,
        text: "watch",
        audioSrc: "/en_watch.mp3",
      },
      {
        challengeId: 174,
        correct: false,
        text: "watching",
        audioSrc: "/en_watching.mp3",
      },
    ]);

    //Lesson 4 Future Tense

    await db.insert(schema.challenges).values([
      // SELECT questions (Future Tense)
      {
        id: 175,
        lessonId: 34,
        type: "SELECT",
        order: 1,
        question: 'How do you say "I will eat" in Spanish?',
      },
      {
        id: 176,
        lessonId: 34,
        type: "SELECT",
        order: 2,
        question: 'Which is the correct future tense form of "to go"?',
      },
      {
        id: 177,
        lessonId: 34,
        type: "SELECT",
        order: 3,
        question:
          'Identify the future tense in the sentence: "They will play soccer."',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "I will eat" to Spanish)
      {
        challengeId: 175,
        correct: true,
        text: "Yo comeré.",
        audioSrc: "/es_yo_comere.mp3",
      },
      {
        challengeId: 175,
        correct: false,
        text: "Yo come.",
        audioSrc: "/es_yo_come.mp3",
      },
      {
        challengeId: 175,
        correct: false,
        text: "Comeré.",
        audioSrc: "/es_comere.mp3",
      },

      // SELECT (Future tense form of "to go")
      {
        challengeId: 176,
        correct: true,
        text: "will go",
        audioSrc: "/en_will_go.mp3",
      },
      {
        challengeId: 176,
        correct: false,
        text: "going",
        audioSrc: "/en_going.mp3",
      },
      {
        challengeId: 176,
        correct: false,
        text: "went",
        audioSrc: "/en_went.mp3",
      },

      // SELECT (Identify the future tense)
      {
        challengeId: 177,
        correct: true,
        text: "will play",
        audioSrc: "/en_will_play.mp3",
      },
      {
        challengeId: 177,
        correct: false,
        text: "played",
        audioSrc: "/en_played.mp3",
      },
      {
        challengeId: 177,
        correct: false,
        text: "play",
        audioSrc: "/en_play.mp3",
      },
    ]);

    //Lesson 5 Review and Practice

    await db.insert(schema.challenges).values([
      // SELECT questions (Review)
      {
        id: 178,
        lessonId: 35,
        type: "SELECT",
        order: 1,
        question: 'How do you form an imperative from "to sit"?',
      },
      {
        id: 179,
        lessonId: 35,
        type: "SELECT",
        order: 2,
        question: 'Translate to Spanish: "They will go."',
      },
      {
        id: 180,
        lessonId: 35,
        type: "SELECT",
        order: 3,
        question: 'What is the past tense form of "to eat"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Imperative form from "to sit")
      {
        challengeId: 178,
        correct: true,
        text: "Sit!",
        audioSrc: "/en_sit.mp3",
      },
      {
        challengeId: 178,
        correct: false,
        text: "Sitting!",
        audioSrc: "/en_sitting.mp3",
      },
      {
        challengeId: 178,
        correct: false,
        text: "Sat!",
        audioSrc: "/en_sat.mp3",
      },

      // SELECT (Translate "They will go." to Spanish)
      {
        challengeId: 179,
        correct: true,
        text: "Ellos irán.",
        audioSrc: "/es_ellos_iran.mp3",
      },
      {
        challengeId: 179,
        correct: false,
        text: "Ellos van.",
        audioSrc: "/es_ellos_van.mp3",
      },
      {
        challengeId: 179,
        correct: false,
        text: "Ellos fueron.",
        audioSrc: "/es_ellos_fueron.mp3",
      },

      // SELECT (Past tense form of "to eat")
      {
        challengeId: 180,
        correct: true,
        text: "ate",
        audioSrc: "/en_ate.mp3",
      },
      {
        challengeId: 180,
        correct: false,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },
      {
        challengeId: 180,
        correct: false,
        text: "eating",
        audioSrc: "/en_eating.mp3",
      },
    ]);

    //Unit 8: Conditional Sentences, Comparatives, Superlatives, and Subject-Verb Agreement

    //Lesson 1 Conditional Sentences

    await db.insert(schema.challenges).values([
      // SELECT questions (Conditional Sentences)
      {
        id: 181,
        lessonId: 36,
        type: "SELECT",
        order: 1,
        question: 'How do you say "If I go, I will come back" in Spanish?',
      },
      {
        id: 182,
        lessonId: 36,
        type: "SELECT",
        order: 2,
        question: 'Complete the sentence: "If it rains, I ___."',
      },
      {
        id: 183,
        lessonId: 36,
        type: "SELECT",
        order: 3,
        question: "Identify the correct conditional sentence.",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "If I go, I will come back" to Spanish)
      {
        challengeId: 181,
        correct: true,
        text: "Si voy, volveré.",
        audioSrc: "/es_si_voy_volvere.mp3",
      },
      {
        challengeId: 181,
        correct: false,
        text: "Si yo voy, vengo.",
        audioSrc: "/es_si_yo_voy_vengo.mp3",
      },
      {
        challengeId: 181,
        correct: false,
        text: "Si iré, volveré.",
        audioSrc: "/es_si_ire_volvere.mp3",
      },

      // SELECT (Complete the sentence: "If it rains, I ___")
      {
        challengeId: 182,
        correct: true,
        text: "will stay home.",
        audioSrc: "/en_will_stay_home.mp3",
      },
      {
        challengeId: 182,
        correct: false,
        text: "stayed home.",
        audioSrc: "/en_stayed_home.mp3",
      },
      {
        challengeId: 182,
        correct: false,
        text: "stays home.",
        audioSrc: "/en_stays_home.mp3",
      },

      // SELECT (Identify the correct conditional sentence)
      {
        challengeId: 183,
        correct: true,
        text: "If I study, I will pass the exam.",
        audioSrc: "/en_if_i_study.mp3",
      },
      {
        challengeId: 183,
        correct: false,
        text: "If I studied, I will pass the exam.",
        audioSrc: "/en_if_i_studied.mp3",
      },
      {
        challengeId: 183,
        correct: false,
        text: "I study if I will pass the exam.",
        audioSrc: "/en_i_study_if_i_will_pass.mp3",
      },
    ]);

    //Lesson 2 Comparatives and Superlatives
    await db.insert(schema.challenges).values([
      // SELECT questions (Comparatives and Superlatives)
      {
        id: 184,
        lessonId: 37,
        type: "SELECT",
        order: 1,
        question: 'How do you say "bigger than" in Spanish?',
      },
      {
        id: 185,
        lessonId: 37,
        type: "SELECT",
        order: 2,
        question: 'What is the superlative form of "good"?',
      },
      {
        id: 186,
        lessonId: 37,
        type: "SELECT",
        order: 3,
        question:
          'Complete the sentence: "She is the ___ student in the class."',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "bigger than" to Spanish)
      {
        challengeId: 184,
        correct: true,
        text: "más grande que.",
        audioSrc: "/es_mas_grande_que.mp3",
      },
      {
        challengeId: 184,
        correct: false,
        text: "grande que.",
        audioSrc: "/es_grande_que.mp3",
      },
      {
        challengeId: 184,
        correct: false,
        text: "grande.",
        audioSrc: "/es_grande.mp3",
      },

      // SELECT (Superlative form of "good")
      {
        challengeId: 185,
        correct: true,
        text: "best",
        audioSrc: "/en_best.mp3",
      },
      {
        challengeId: 185,
        correct: false,
        text: "goodest",
        audioSrc: "/en_goodest.mp3",
      },
      {
        challengeId: 185,
        correct: false,
        text: "better",
        audioSrc: "/en_better.mp3",
      },

      // SELECT (Complete the sentence)
      {
        challengeId: 186,
        correct: true,
        text: "best",
        audioSrc: "/en_best.mp3",
      },
      {
        challengeId: 186,
        correct: false,
        text: "better",
        audioSrc: "/en_better.mp3",
      },
      {
        challengeId: 186,
        correct: false,
        text: "good",
        audioSrc: "/en_good.mp3",
      },
    ]);

    //Lesson 3 Subject-Verb Agreement

    await db.insert(schema.challenges).values([
      // SELECT questions (Subject-Verb Agreement)
      {
        id: 187,
        lessonId: 38,
        type: "SELECT",
        order: 1,
        question: "Which sentence is correct?",
      },
      {
        id: 188,
        lessonId: 38,
        type: "SELECT",
        order: 2,
        question: 'Complete the sentence: "The dog ___ running."',
      },
      {
        id: 189,
        lessonId: 38,
        type: "SELECT",
        order: 3,
        question: "Identify the incorrect subject-verb agreement.",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Identify the correct sentence)
      {
        challengeId: 187,
        correct: true,
        text: "She sings beautifully.",
        audioSrc: "/en_she_sings.mp3",
      },
      {
        challengeId: 187,
        correct: false,
        text: "She sing beautifully.",
        audioSrc: "/en_she_sing.mp3",
      },
      {
        challengeId: 187,
        correct: false,
        text: "They sings beautifully.",
        audioSrc: "/en_they_sings.mp3",
      },

      // SELECT (Complete the sentence: "The dog ___ running.")
      {
        challengeId: 188,
        correct: true,
        text: "is",
        audioSrc: "/en_is.mp3",
      },
      {
        challengeId: 188,
        correct: false,
        text: "are",
        audioSrc: "/en_are.mp3",
      },
      {
        challengeId: 188,
        correct: false,
        text: "were",
        audioSrc: "/en_were.mp3",
      },

      // SELECT (Identify the incorrect subject-verb agreement)
      {
        challengeId: 189,
        correct: true,
        text: "He go to school.",
        audioSrc: "/en_he_go_to_school.mp3",
      },
      {
        challengeId: 189,
        correct: false,
        text: "She goes to school.",
        audioSrc: "/en_she_goes_to_school.mp3",
      },
      {
        challengeId: 189,
        correct: false,
        text: "They go to school.",
        audioSrc: "/en_they_go_to_school.mp3",
      },
    ]);

    //Lesson 4  Combining Concepts

    await db.insert(schema.challenges).values([
      // SELECT questions (Combining Concepts)
      {
        id: 190,
        lessonId: 39,
        type: "SELECT",
        order: 1,
        question: 'How do you say "If he is taller, he will win" in Spanish?',
      },
      {
        id: 191,
        lessonId: 39,
        type: "SELECT",
        order: 2,
        question:
          'Complete the sentence: "If she studies harder, she is the ___ student."',
      },
      {
        id: 192,
        lessonId: 39,
        type: "SELECT",
        order: 3,
        question: "Identify the correct sentence combining concepts.",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "If he is taller, he will win" to Spanish)
      {
        challengeId: 190,
        correct: true,
        text: "Si él es más alto, ganará.",
        audioSrc: "/es_si_el_es_mas_alto_ganara.mp3",
      },
      {
        challengeId: 190,
        correct: false,
        text: "Si él alto, ganará.",
        audioSrc: "/es_si_el_alto_ganara.mp3",
      },
      {
        challengeId: 190,
        correct: false,
        text: "Si él está más alto, ganará.",
        audioSrc: "/es_si_el_esta_mas_alto_ganara.mp3",
      },

      // SELECT (Complete the sentence: "If she studies harder, she is the ___ student.")
      {
        challengeId: 191,
        correct: true,
        text: "best",
        audioSrc: "/en_best.mp3",
      },
      {
        challengeId: 191,
        correct: false,
        text: "better",
        audioSrc: "/en_better.mp3",
      },
      {
        challengeId: 191,
        correct: false,
        text: "good",
        audioSrc: "/en_good.mp3",
      },

      // SELECT (Identify the correct sentence combining concepts)
      {
        challengeId: 192,
        correct: true,
        text: "If she is the best student, she will get a scholarship.",
        audioSrc: "/en_if_she_is_best_student.mp3",
      },
      {
        challengeId: 192,
        correct: false,
        text: "If she the best student, she will get a scholarship.",
        audioSrc: "/en_if_she_best_student.mp3",
      },
      {
        challengeId: 192,
        correct: false,
        text: "If she was the best student, she will get a scholarship.",
        audioSrc: "/en_if_she_was_best_student.mp3",
      },
    ]);

    //Lesson 5  Review and Practice

    await db.insert(schema.challenges).values([
      // SELECT questions (Review)
      {
        id: 193,
        lessonId: 40,
        type: "SELECT",
        order: 1,
        question: "What is the structure of a conditional sentence?",
      },
      {
        id: 194,
        lessonId: 40,
        type: "SELECT",
        order: 2,
        question: 'Translate to Spanish: "She is the tallest in the class."',
      },
      {
        id: 195,
        lessonId: 40,
        type: "SELECT",
        order: 3,
        question: 'Choose the correct form: "They ___ (go/goes) to the park."',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Identify the structure of a conditional sentence)
      {
        challengeId: 193,
        correct: true,
        text: "If + condition, + result.",
        audioSrc: "/en_if_condition_result.mp3",
      },
      {
        challengeId: 193,
        correct: false,
        text: "Condition + if + result.",
        audioSrc: "/en_condition_if_result.mp3",
      },
      {
        challengeId: 193,
        correct: false,
        text: "Result + if + condition.",
        audioSrc: "/en_result_if_condition.mp3",
      },

      // SELECT (Translate "She is the tallest in the class." to Spanish)
      {
        challengeId: 194,
        correct: true,
        text: "Ella es la más alta de la clase.",
        audioSrc: "/es_ella_es_la_mas_alta_de_la_clase.mp3",
      },
      {
        challengeId: 194,
        correct: false,
        text: "Ella es alta en la clase.",
        audioSrc: "/es_ella_es_alta_en_la_clase.mp3",
      },
      {
        challengeId: 194,
        correct: false,
        text: "Ella es la alta de la clase.",
        audioSrc: "/es_ella_es_la_alta_de_la_clase.mp3",
      },

      // SELECT (Choose the correct form: "They ___ (go/goes) to the park.")
      {
        challengeId: 195,
        correct: true,
        text: "go",
        audioSrc: "/en_go.mp3",
      },
      {
        challengeId: 195,
        correct: false,
        text: "goes",
        audioSrc: "/en_goes.mp3",
      },
    ]);

    // Unit 9: Essential Conversations – Greetings, Introductions, and Polite Expressions

    //Lesson 1 Greetings

    await db.insert(schema.challenges).values([
      // SELECT questions (Greetings)
      {
        id: 196,
        lessonId: 41,
        type: "SELECT",
        order: 1,
        question: 'How do you say "Good morning" in Spanish?',
      },
      {
        id: 197,
        lessonId: 41,
        type: "SELECT",
        order: 2,
        question: 'Which phrase means "Goodbye"?',
      },
      {
        id: 198,
        lessonId: 41,
        type: "SELECT",
        order: 3,
        question: 'What does "Buenas tardes" mean in English?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "Good morning" to Spanish)
      {
        challengeId: 196,
        correct: true,
        text: "Buenos días",
        audioSrc: "/es_buenos_dias.mp3",
      },
      {
        challengeId: 196,
        correct: false,
        text: "Buenas noches",
        audioSrc: "/es_buenas_noches.mp3",
      },
      {
        challengeId: 196,
        correct: false,
        text: "Adiós",
        audioSrc: "/es_adios.mp3",
      },

      // SELECT (Which phrase means "Goodbye"?)
      {
        challengeId: 197,
        correct: true,
        text: "Adiós",
        audioSrc: "/es_adios.mp3",
      },
      {
        challengeId: 197,
        correct: false,
        text: "Hola",
        audioSrc: "/es_hola.mp3",
      },
      {
        challengeId: 197,
        correct: false,
        text: "Buenos días",
        audioSrc: "/es_buenos_dias.mp3",
      },

      // SELECT (What does "Buenas tardes" mean?)
      {
        challengeId: 198,
        correct: true,
        text: "Good afternoon",
        audioSrc: "/en_good_afternoon.mp3",
      },
      {
        challengeId: 198,
        correct: false,
        text: "Good morning",
        audioSrc: "/en_good_morning.mp3",
      },
      {
        challengeId: 198,
        correct: false,
        text: "Good night",
        audioSrc: "/en_good_night.mp3",
      },
    ]);

    //Lesson 2  Introducing Yourself

    await db.insert(schema.challenges).values([
      // SELECT questions (Introducing Yourself)
      {
        id: 199,
        lessonId: 42,
        type: "SELECT",
        order: 1,
        question: 'How do you say "My name is…" in Spanish?',
      },
      {
        id: 200,
        lessonId: 42,
        type: "SELECT",
        order: 2,
        question: 'What does "Soy de" mean in English?',
      },
      {
        id: 201,
        lessonId: 42,
        type: "SELECT",
        order: 3,
        question: 'Complete the sentence: "Where are you ___?"',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "My name is…" to Spanish)
      {
        challengeId: 199,
        correct: true,
        text: "Me llamo",
        audioSrc: "/es_me_llamo.mp3",
      },
      {
        challengeId: 199,
        correct: false,
        text: "Soy de",
        audioSrc: "/es_soy_de.mp3",
      },
      {
        challengeId: 199,
        correct: false,
        text: "Cómo te llamas",
        audioSrc: "/es_como_te_llamas.mp3",
      },

      // SELECT (What does "Soy de" mean in English?)
      {
        challengeId: 200,
        correct: true,
        text: "I am from",
        audioSrc: "/en_i_am_from.mp3",
      },
      {
        challengeId: 200,
        correct: false,
        text: "I am",
        audioSrc: "/en_i_am.mp3",
      },
      {
        challengeId: 200,
        correct: false,
        text: "Where are you from?",
        audioSrc: "/en_where_are_you_from.mp3",
      },

      // SELECT (Complete the sentence: "Where are you ___?")
      {
        challengeId: 201,
        correct: true,
        text: "from",
        audioSrc: "/en_from.mp3",
      },
      {
        challengeId: 201,
        correct: false,
        text: "is",
        audioSrc: "/en_is.mp3",
      },
      {
        challengeId: 201,
        correct: false,
        text: "do",
        audioSrc: "/en_do.mp3",
      },
    ]);

    //Lesson 3 Polite Expressions

    await db.insert(schema.challenges).values([
      // SELECT questions (Polite Expressions)
      {
        id: 202,
        lessonId: 43,
        type: "SELECT",
        order: 1,
        question: 'How do you say "Thank you" in Spanish?',
      },
      {
        id: 203,
        lessonId: 43,
        type: "SELECT",
        order: 2,
        question: 'Which phrase means "Sorry"?',
      },
      {
        id: 204,
        lessonId: 43,
        type: "SELECT",
        order: 3,
        question: 'What does "Por favor" mean in English?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Translate "Thank you" to Spanish)
      {
        challengeId: 202,
        correct: true,
        text: "Gracias",
        audioSrc: "/es_gracias.mp3",
      },
      {
        challengeId: 202,
        correct: false,
        text: "De nada",
        audioSrc: "/es_de_nada.mp3",
      },
      {
        challengeId: 202,
        correct: false,
        text: "Perdón",
        audioSrc: "/es_perdon.mp3",
      },

      // SELECT (Which phrase means "Sorry"?)
      {
        challengeId: 203,
        correct: true,
        text: "Lo siento",
        audioSrc: "/es_lo_siento.mp3",
      },
      {
        challengeId: 203,
        correct: false,
        text: "Por favor",
        audioSrc: "/es_por_favor.mp3",
      },
      {
        challengeId: 203,
        correct: false,
        text: "Gracias",
        audioSrc: "/es_gracias.mp3",
      },

      // SELECT (What does "Por favor" mean in English?)
      {
        challengeId: 204,
        correct: true,
        text: "Please",
        audioSrc: "/en_please.mp3",
      },
      {
        challengeId: 204,
        correct: false,
        text: "Excuse me",
        audioSrc: "/en_excuse_me.mp3",
      },
      {
        challengeId: 204,
        correct: false,
        text: "Thank you",
        audioSrc: "/en_thank_you.mp3",
      },
    ]);

    //Lesson 4 Yes/No Responses

    await db.insert(schema.challenges).values([
      // SELECT questions (Yes/No Responses)
      {
        id: 205,
        lessonId: 44,
        type: "SELECT",
        order: 1,
        question: 'How do you respond to "Do you like pizza?" if you do?',
      },
      {
        id: 206,
        lessonId: 44,
        type: "SELECT",
        order: 2,
        question: 'Which response means "No"?',
      },
      {
        id: 207,
        lessonId: 44,
        type: "SELECT",
        order: 3,
        question:
          'If someone asks "Are you coming?", what is a neutral response?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Responding to "Do you like pizza?")
      {
        challengeId: 205,
        correct: true,
        text: "Yes, I do.",
        audioSrc: "/en_yes_i_do.mp3",
      },
      {
        challengeId: 205,
        correct: false,
        text: "Maybe.",
        audioSrc: "/en_maybe.mp3",
      },
      {
        challengeId: 205,
        correct: false,
        text: "No, I don't.",
        audioSrc: "/en_no_i_dont.mp3",
      },

      // SELECT (Which response means "No"?)
      {
        challengeId: 206,
        correct: true,
        text: "No, I don't.",
        audioSrc: "/en_no_i_dont.mp3",
      },
      {
        challengeId: 206,
        correct: false,
        text: "Yes, I do.",
        audioSrc: "/en_yes_i_do.mp3",
      },
      {
        challengeId: 206,
        correct: false,
        text: "I don't know.",
        audioSrc: "/en_i_dont_know.mp3",
      },

      // SELECT (Neutral response to "Are you coming?")
      {
        challengeId: 207,
        correct: true,
        text: "Maybe.",
        audioSrc: "/en_maybe.mp3",
      },
      {
        challengeId: 207,
        correct: false,
        text: "Yes, I am.",
        audioSrc: "/en_yes_i_am.mp3",
      },
      {
        challengeId: 207,
        correct: false,
        text: "No, I'm not.",
        audioSrc: "/en_no_im_not.mp3",
      },
    ]);

    //Lesson 5 Asking How Someone Is

    await db.insert(schema.challenges).values([
      // SELECT questions (Asking How Someone Is)
      {
        id: 208,
        lessonId: 45,
        type: "SELECT",
        order: 1,
        question: 'How do you ask "How are you?" in Spanish?',
      },
      {
        id: 209,
        lessonId: 45,
        type: "SELECT",
        order: 2,
        question: 'What is a common response to "How are you?"?',
      },
      {
        id: 210,
        lessonId: 45,
        type: "SELECT",
        order: 3,
        question: 'If someone asks you "¿Cómo estás?", what is your response?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (Asking "How are you?" in Spanish)
      {
        challengeId: 208,
        correct: true,
        text: "¿Cómo estás?",
        audioSrc: "/es_como_estas.mp3",
      },
      {
        challengeId: 208,
        correct: false,
        text: "¿Qué tal?",
        audioSrc: "/es_que_tal.mp3",
      },
      {
        challengeId: 208,
        correct: false,
        text: "¿Qué pasa?",
        audioSrc: "/es_que_pasa.mp3",
      },

      // SELECT (Common response to "How are you?")
      {
        challengeId: 209,
        correct: true,
        text: "I'm fine, thank you.",
        audioSrc: "/en_im_fine_thank_you.mp3",
      },
      {
        challengeId: 209,
        correct: false,
        text: "Goodbye.",
        audioSrc: "/en_goodbye.mp3",
      },
      {
        challengeId: 209,
        correct: false,
        text: "I don't know.",
        audioSrc: "/en_i_dont_know.mp3",
      },

      // SELECT (Response to "¿Cómo estás?")
      {
        challengeId: 210,
        correct: true,
        text: "Estoy bien, gracias.",
        audioSrc: "/es_estoy_bien_gracias.mp3",
      },
      {
        challengeId: 210,
        correct: false,
        text: "No estoy bien.",
        audioSrc: "/es_no_estoy_bien.mp3",
      },
      {
        challengeId: 210,
        correct: false,
        text: "Adiós.",
        audioSrc: "/es_adios.mp3",
      },
    ]);

    // Unit 10: Vocabulary and Counting

    //Lesson 1 Numbers
    await db.insert(schema.challenges).values([
      // SELECT questions (Numbers)
      {
        id: 211,
        lessonId: 46,
        type: "SELECT",
        order: 1,
        question: 'How do you say "5" in English?',
      },
      {
        id: 212,
        lessonId: 46,
        type: "SELECT",
        order: 2,
        question: 'What is "10" plus "15"?',
      },
      {
        id: 213,
        lessonId: 46,
        type: "SELECT",
        order: 3,
        question: 'How do you say "100" in English?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you say "5" in English?)
      {
        challengeId: 211,
        correct: true,
        text: "Five",
        audioSrc: "/en_five.mp3",
      },
      {
        challengeId: 211,
        correct: false,
        text: "Six",
        audioSrc: "/en_six.mp3",
      },
      {
        challengeId: 211,
        correct: false,
        text: "Four",
        audioSrc: "/en_four.mp3",
      },

      // SELECT (What is "10" plus "15"?)
      {
        challengeId: 212,
        correct: true,
        text: "25",
        audioSrc: "/en_twenty_five.mp3",
      },
      {
        challengeId: 212,
        correct: false,
        text: "20",
        audioSrc: "/en_twenty.mp3",
      },
      {
        challengeId: 212,
        correct: false,
        text: "30",
        audioSrc: "/en_thirty.mp3",
      },

      // SELECT (How do you say "100" in English?)
      {
        challengeId: 213,
        correct: true,
        text: "One hundred",
        audioSrc: "/en_one_hundred.mp3",
      },
      {
        challengeId: 213,
        correct: false,
        text: "One thousand",
        audioSrc: "/en_one_thousand.mp3",
      },
      {
        challengeId: 213,
        correct: false,
        text: "Ten",
        audioSrc: "/en_ten.mp3",
      },
    ]);

    //Lesson 2 Days of the Week and Months

    await db.insert(schema.challenges).values([
      // SELECT questions (Days of the Week and Months)
      {
        id: 214,
        lessonId: 47,
        type: "SELECT",
        order: 1,
        question: "What day comes after Monday?",
      },
      {
        id: 215,
        lessonId: 47,
        type: "SELECT",
        order: 2,
        question: "How many months are in a year?",
      },
      {
        id: 216,
        lessonId: 47,
        type: "SELECT",
        order: 3,
        question: "What is the first month of the year?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (What day comes after Monday?)
      {
        challengeId: 214,
        correct: true,
        text: "Tuesday",
        audioSrc: "/en_tuesday.mp3",
      },
      {
        challengeId: 214,
        correct: false,
        text: "Friday",
        audioSrc: "/en_friday.mp3",
      },
      {
        challengeId: 214,
        correct: false,
        text: "Sunday",
        audioSrc: "/en_sunday.mp3",
      },

      // SELECT (How many months are in a year?)
      {
        challengeId: 215,
        correct: true,
        text: "12",
        audioSrc: "/en_twelve.mp3",
      },
      {
        challengeId: 215,
        correct: false,
        text: "10",
        audioSrc: "/en_ten.mp3",
      },
      {
        challengeId: 215,
        correct: false,
        text: "11",
        audioSrc: "/en_eleven.mp3",
      },

      // SELECT (What is the first month of the year?)
      {
        challengeId: 216,
        correct: true,
        text: "January",
        audioSrc: "/en_january.mp3",
      },
      {
        challengeId: 216,
        correct: false,
        text: "February",
        audioSrc: "/en_february.mp3",
      },
      {
        challengeId: 216,
        correct: false,
        text: "March",
        audioSrc: "/en_march.mp3",
      },
    ]);

    //Lesson 3 Colors

    await db.insert(schema.challenges).values([
      // SELECT questions (Colors)
      {
        id: 217,
        lessonId: 48,
        type: "SELECT",
        order: 1,
        question: "What color is the sky on a clear day?",
      },
      {
        id: 218,
        lessonId: 48,
        type: "SELECT",
        order: 2,
        question: "Which color is associated with grass?",
      },
      {
        id: 219,
        lessonId: 48,
        type: "SELECT",
        order: 3,
        question: "What is the color of a ripe banana?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (What color is the sky on a clear day?)
      {
        challengeId: 217,
        correct: true,
        text: "Blue",
        audioSrc: "/en_blue.mp3",
      },
      {
        challengeId: 217,
        correct: false,
        text: "Gray",
        audioSrc: "/en_gray.mp3",
      },
      {
        challengeId: 217,
        correct: false,
        text: "Green",
        audioSrc: "/en_green.mp3",
      },

      // SELECT (Which color is associated with grass?)
      {
        challengeId: 218,
        correct: true,
        text: "Green",
        audioSrc: "/en_green.mp3",
      },
      {
        challengeId: 218,
        correct: false,
        text: "Yellow",
        audioSrc: "/en_yellow.mp3",
      },
      {
        challengeId: 218,
        correct: false,
        text: "Red",
        audioSrc: "/en_red.mp3",
      },

      // SELECT (What is the color of a ripe banana?)
      {
        challengeId: 219,
        correct: true,
        text: "Yellow",
        audioSrc: "/en_yellow.mp3",
      },
      {
        challengeId: 219,
        correct: false,
        text: "Brown",
        audioSrc: "/en_brown.mp3",
      },
      {
        challengeId: 219,
        correct: false,
        text: "Red",
        audioSrc: "/en_red.mp3",
      },
    ]);

    //Lesson 4 Family Vocabulary

    await db.insert(schema.challenges).values([
      // SELECT questions (Family Vocabulary)
      {
        id: 220,
        lessonId: 49,
        type: "SELECT",
        order: 1,
        question: "What do you call your mother’s sister?",
      },
      {
        id: 221,
        lessonId: 49,
        type: "SELECT",
        order: 2,
        question: "How do you refer to your father’s son?",
      },
      {
        id: 222,
        lessonId: 49,
        type: "SELECT",
        order: 3,
        question: "What is the term for your brother or sister?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (What do you call your mother’s sister?)
      {
        challengeId: 220,
        correct: true,
        text: "Aunt",
        audioSrc: "/en_aunt.mp3",
      },
      {
        challengeId: 220,
        correct: false,
        text: "Cousin",
        audioSrc: "/en_cousin.mp3",
      },
      {
        challengeId: 220,
        correct: false,
        text: "Sister",
        audioSrc: "/en_sister.mp3",
      },

      // SELECT (How do you refer to your father’s son?)
      {
        challengeId: 221,
        correct: true,
        text: "Brother",
        audioSrc: "/en_brother.mp3",
      },
      {
        challengeId: 221,
        correct: false,
        text: "Cousin",
        audioSrc: "/en_cousin.mp3",
      },
      {
        challengeId: 221,
        correct: false,
        text: "Son",
        audioSrc: "/en_son.mp3",
      },

      // SELECT (What is the term for your brother or sister?)
      {
        challengeId: 222,
        correct: true,
        text: "Sibling",
        audioSrc: "/en_sibling.mp3",
      },
      {
        challengeId: 222,
        correct: false,
        text: "Parent",
        audioSrc: "/en_parent.mp3",
      },
      {
        challengeId: 222,
        correct: false,
        text: "Child",
        audioSrc: "/en_child.mp3",
      },
    ]);

    //Lesson 5 Food Vocabulary

    await db.insert(schema.challenges).values([
      // SELECT questions (Food Vocabulary)
      {
        id: 223,
        lessonId: 50,
        type: "SELECT",
        order: 1,
        question: "What do you call a common breakfast food made from grain?",
      },
      {
        id: 224,
        lessonId: 50,
        type: "SELECT",
        order: 2,
        question: "Which beverage is made from roasted beans?",
      },
      {
        id: 225,
        lessonId: 50,
        type: "SELECT",
        order: 3,
        question:
          "What is the name of a sweet fruit that is often red or green?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (What do you call a common breakfast food made from grain?)
      {
        challengeId: 223,
        correct: true,
        text: "Bread",
        audioSrc: "/en_bread.mp3",
      },
      {
        challengeId: 223,
        correct: false,
        text: "Eggs",
        audioSrc: "/en_eggs.mp3",
      },
      {
        challengeId: 223,
        correct: false,
        text: "Cereal",
        audioSrc: "/en_cereal.mp3",
      },

      // SELECT (Which beverage is made from roasted beans?)
      {
        challengeId: 224,
        correct: true,
        text: "Coffee",
        audioSrc: "/en_coffee.mp3",
      },
      {
        challengeId: 224,
        correct: false,
        text: "Tea",
        audioSrc: "/en_tea.mp3",
      },
      {
        challengeId: 224,
        correct: false,
        text: "Juice",
        audioSrc: "/en_juice.mp3",
      },

      // SELECT (What is the name of a sweet fruit that is often red or green?)
      {
        challengeId: 225,
        correct: true,
        text: "Apple",
        audioSrc: "/en_apple.mp3",
      },
      {
        challengeId: 225,
        correct: false,
        text: "Banana",
        audioSrc: "/en_banana.mp3",
      },
      {
        challengeId: 225,
        correct: false,
        text: "Orange",
        audioSrc: "/en_orange.mp3",
      },
    ]);

    //Lesson 6: Weather Vocabulary

    await db.insert(schema.challenges).values([
      // SELECT questions (Weather Vocabulary)
      {
        id: 226,
        lessonId: 51,
        type: "SELECT",
        order: 1,
        question:
          "What do you call it when there is no rain and the sun is shining?",
      },
      {
        id: 227,
        lessonId: 51,
        type: "SELECT",
        order: 2,
        question: "What word describes a rainy day?",
      },
      {
        id: 228,
        lessonId: 51,
        type: "SELECT",
        order: 3,
        question: "What is it called when it is very cold outside?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (What do you call it when there is no rain and the sun is shining?)
      {
        challengeId: 226,
        correct: true,
        text: "Sunny",
        audioSrc: "/en_sunny.mp3",
      },
      {
        challengeId: 226,
        correct: false,
        text: "Cloudy",
        audioSrc: "/en_cloudy.mp3",
      },
      {
        challengeId: 226,
        correct: false,
        text: "Windy",
        audioSrc: "/en_windy.mp3",
      },

      // SELECT (What word describes a rainy day?)
      {
        challengeId: 227,
        correct: true,
        text: "Rainy",
        audioSrc: "/en_rainy.mp3",
      },
      {
        challengeId: 227,
        correct: false,
        text: "Sunny",
        audioSrc: "/en_sunny.mp3",
      },
      {
        challengeId: 227,
        correct: false,
        text: "Snowy",
        audioSrc: "/en_snowy.mp3",
      },

      // SELECT (What is it called when it is very cold outside?)
      {
        challengeId: 228,
        correct: true,
        text: "Cold",
        audioSrc: "/en_cold.mp3",
      },
      {
        challengeId: 228,
        correct: false,
        text: "Warm",
        audioSrc: "/en_warm.mp3",
      },
      {
        challengeId: 228,
        correct: false,
        text: "Hot",
        audioSrc: "/en_hot.mp3",
      },
    ]);

    // Unit 11: Practical Communication Skills

    // Lesson 1 Asking for Directions

    await db.insert(schema.challenges).values([
      // SELECT questions (Asking for Directions)
      {
        id: 229,
        lessonId: 52,
        type: "SELECT",
        order: 1,
        question: "How do you ask for directions to the nearest bus stop?",
      },
      {
        id: 230,
        lessonId: 52,
        type: "SELECT",
        order: 2,
        question:
          "What phrase do you use to inquire about the location of a restaurant?",
      },
      {
        id: 231,
        lessonId: 52,
        type: "SELECT",
        order: 3,
        question: "How do you ask how to get to the train station?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask for directions to the nearest bus stop?)
      {
        challengeId: 229,
        correct: true,
        text: "Where is the nearest bus stop?",
        audioSrc: "/en_where_is_the_nearest_bus_stop.mp3",
      },
      {
        challengeId: 229,
        correct: false,
        text: "Can you show me the way?",
        audioSrc: "/en_can_you_show_me_the_way.mp3",
      },
      {
        challengeId: 229,
        correct: false,
        text: "How far is it?",
        audioSrc: "/en_how_far_is_it.mp3",
      },

      // SELECT (What phrase do you use to inquire about the location of a restaurant?)
      {
        challengeId: 230,
        correct: true,
        text: "Where is the restaurant?",
        audioSrc: "/en_where_is_the_restaurant.mp3",
      },
      {
        challengeId: 230,
        correct: false,
        text: "How do I get to the park?",
        audioSrc: "/en_how_do_i_get_to_the_park.mp3",
      },
      {
        challengeId: 230,
        correct: false,
        text: "Is it far from here?",
        audioSrc: "/en_is_it_far_from_here.mp3",
      },

      // SELECT (How do you ask how to get to the train station?)
      {
        challengeId: 231,
        correct: true,
        text: "How do I get to the train station?",
        audioSrc: "/en_how_do_i_get_to_the_train_station.mp3",
      },
      {
        challengeId: 231,
        correct: false,
        text: "Where is the bus station?",
        audioSrc: "/en_where_is_the_bus_station.mp3",
      },
      {
        challengeId: 231,
        correct: false,
        text: "Is the train station near here?",
        audioSrc: "/en_is_the_train_station_near_here.mp3",
      },
    ]);

    // Lesson 2 Booking a Hotel Room

    await db.insert(schema.challenges).values([
      // SELECT questions (Booking a Hotel Room)
      {
        id: 232,
        lessonId: 53,
        type: "SELECT",
        order: 1,
        question: "How do you say you want to book a room?",
      },
      {
        id: 233,
        lessonId: 53,
        type: "SELECT",
        order: 2,
        question: "What do you ask to check if breakfast is included?",
      },
      {
        id: 234,
        lessonId: 53,
        type: "SELECT",
        order: 3,
        question: "How do you inquire about the price of a room?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you say you want to book a room?)
      {
        challengeId: 232,
        correct: true,
        text: "I’d like to book a room.",
        audioSrc: "/en_id_like_to_book_a_room.mp3",
      },
      {
        challengeId: 232,
        correct: false,
        text: "Is there a room available?",
        audioSrc: "/en_is_there_a_room_available.mp3",
      },
      {
        challengeId: 232,
        correct: false,
        text: "Can I see the room?",
        audioSrc: "/en_can_i_see_the_room.mp3",
      },

      // SELECT (What do you ask to check if breakfast is included?)
      {
        challengeId: 233,
        correct: true,
        text: "Is breakfast included?",
        audioSrc: "/en_is_breakfast_included.mp3",
      },
      {
        challengeId: 233,
        correct: false,
        text: "What time is breakfast?",
        audioSrc: "/en_what_time_is_breakfast.mp3",
      },
      {
        challengeId: 233,
        correct: false,
        text: "Can I have breakfast in my room?",
        audioSrc: "/en_can_i_have_breakfast_in_my_room.mp3",
      },

      // SELECT (How do you inquire about the price of a room?)
      {
        challengeId: 234,
        correct: true,
        text: "What is the price of a room?",
        audioSrc: "/en_what_is_the_price_of_a_room.mp3",
      },
      {
        challengeId: 234,
        correct: false,
        text: "How many rooms do you have?",
        audioSrc: "/en_how_many_rooms_do_you_have.mp3",
      },
      {
        challengeId: 234,
        correct: false,
        text: "Can I book a room now?",
        audioSrc: "/en_can_i_book_a_room_now.mp3",
      },
    ]);

    // Lesson 3 Ordering Food at a Restaurant

    await db.insert(schema.challenges).values([
      // SELECT questions (Ordering Food at a Restaurant)
      {
        id: 235,
        lessonId: 54,
        type: "SELECT",
        order: 1,
        question: "How do you ask to order food?",
      },
      {
        id: 236,
        lessonId: 54,
        type: "SELECT",
        order: 2,
        question: "What do you say to request the menu?",
      },
      {
        id: 237,
        lessonId: 54,
        type: "SELECT",
        order: 3,
        question: "How do you ask for the bill?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask to order food?)
      {
        challengeId: 235,
        correct: true,
        text: "I’d like to order...",
        audioSrc: "/en_id_like_to_order.mp3",
      },
      {
        challengeId: 235,
        correct: false,
        text: "What do you recommend?",
        audioSrc: "/en_what_do_you_recommend.mp3",
      },
      {
        challengeId: 235,
        correct: false,
        text: "Can I have some food?",
        audioSrc: "/en_can_i_have_some_food.mp3",
      },

      // SELECT (What do you say to request the menu?)
      {
        challengeId: 236,
        correct: true,
        text: "Can I see the menu?",
        audioSrc: "/en_can_i_see_the_menu.mp3",
      },
      {
        challengeId: 236,
        correct: false,
        text: "What is today’s special?",
        audioSrc: "/en_what_is_todays_special.mp3",
      },
      {
        challengeId: 236,
        correct: false,
        text: "Do you have vegetarian options?",
        audioSrc: "/en_do_you_have_vegetarian_options.mp3",
      },

      // SELECT (How do you ask for the bill?)
      {
        challengeId: 237,
        correct: true,
        text: "Can I have the bill, please?",
        audioSrc: "/en_can_i_have_the_bill_please.mp3",
      },
      {
        challengeId: 237,
        correct: false,
        text: "What time do you close?",
        audioSrc: "/en_what_time_do_you_close.mp3",
      },
      {
        challengeId: 237,
        correct: false,
        text: "Is there a restroom here?",
        audioSrc: "/en_is_there_a_restroom_here.mp3",
      },
    ]);

    // Lesson 4 At the Airport

    await db.insert(schema.challenges).values([
      // SELECT questions (At the Airport)
      {
        id: 238,
        lessonId: 55,
        type: "SELECT",
        order: 1,
        question: "How do you ask where the check-in counter is?",
      },
      {
        id: 239,
        lessonId: 55,
        type: "SELECT",
        order: 2,
        question: "What do you ask about the departure time of your flight?",
      },
      {
        id: 240,
        lessonId: 55,
        type: "SELECT",
        order: 3,
        question: "How do you inquire about your luggage?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask where the check-in counter is?)
      {
        challengeId: 238,
        correct: true,
        text: "Where is the check-in counter?",
        audioSrc: "/en_where_is_the_check_in_counter.mp3",
      },
      {
        challengeId: 238,
        correct: false,
        text: "Is my flight on time?",
        audioSrc: "/en_is_my_flight_on_time.mp3",
      },
      {
        challengeId: 238,
        correct: false,
        text: "Can you help me with my luggage?",
        audioSrc: "/en_can_you_help_me_with_my_luggage.mp3",
      },

      // SELECT (What do you ask about the departure time of your flight?)
      {
        challengeId: 239,
        correct: true,
        text: "What time does the flight leave?",
        audioSrc: "/en_what_time_does_the_flight_leave.mp3",
      },
      {
        challengeId: 239,
        correct: false,
        text: "Is the flight delayed?",
        audioSrc: "/en_is_the_flight_delayed.mp3",
      },
      {
        challengeId: 239,
        correct: false,
        text: "Where is my gate?",
        audioSrc: "/en_where_is_my_gate.mp3",
      },

      // SELECT (How do you inquire about your luggage?)
      {
        challengeId: 240,
        correct: true,
        text: "Where can I find my luggage?",
        audioSrc: "/en_where_can_i_find_my_luggage.mp3",
      },
      {
        challengeId: 240,
        correct: false,
        text: "How much does my luggage weigh?",
        audioSrc: "/en_how_much_does_my_luggage_weigh.mp3",
      },
      {
        challengeId: 240,
        correct: false,
        text: "Can I carry this on the plane?",
        audioSrc: "/en_can_i_carry_this_on_the_plane.mp3",
      },
    ]);

    // Lesson 5 Asking About Public Transport
    await db.insert(schema.challenges).values([
      // SELECT questions (Asking About Public Transport)
      {
        id: 241,
        lessonId: 56,
        type: "SELECT",
        order: 1,
        question: "How do you ask when the next bus is?",
      },
      {
        id: 242,
        lessonId: 56,
        type: "SELECT",
        order: 2,
        question: "What do you ask about the cost of a ticket?",
      },
      {
        id: 243,
        lessonId: 56,
        type: "SELECT",
        order: 3,
        question: "How do you inquire about train schedules?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask when the next bus is?)
      {
        challengeId: 241,
        correct: true,
        text: "What time is the next bus?",
        audioSrc: "/en_what_time_is_the_next_bus.mp3",
      },
      {
        challengeId: 241,
        correct: false,
        text: "Is the bus late?",
        audioSrc: "/en_is_the_bus_late.mp3",
      },
      {
        challengeId: 241,
        correct: false,
        text: "Where does this bus go?",
        audioSrc: "/en_where_does_this_bus_go.mp3",
      },

      // SELECT (What do you ask about the cost of a ticket?)
      {
        challengeId: 242,
        correct: true,
        text: "How much is a ticket?",
        audioSrc: "/en_how_much_is_a_ticket.mp3",
      },
      {
        challengeId: 242,
        correct: false,
        text: "Where can I buy a ticket?",
        audioSrc: "/en_where_can_i_buy_a_ticket.mp3",
      },
      {
        challengeId: 242,
        correct: false,
        text: "What is the best route?",
        audioSrc: "/en_what_is_the_best_route.mp3",
      },

      // SELECT (How do you inquire about train schedules?)
      {
        challengeId: 243,
        correct: true,
        text: "What time does the train arrive?",
        audioSrc: "/en_what_time_does_the_train_arrive.mp3",
      },
      {
        challengeId: 243,
        correct: false,
        text: "Where is the train station?",
        audioSrc: "/en_where_is_the_train_station.mp3",
      },
      {
        challengeId: 243,
        correct: false,
        text: "Is there a train to the city?",
        audioSrc: "/en_is_there_a_train_to_the_city.mp3",
      },
    ]);

    //Unit 12: Essential Survival Phrases

    // Lesson 1 Shopping Phrases

    await db.insert(schema.challenges).values([
      // SELECT questions (Shopping Phrases)
      {
        id: 244,
        lessonId: 57,
        type: "SELECT",
        order: 1,
        question: "How do you ask about the price of an item?",
      },
      {
        id: 245,
        lessonId: 57,
        type: "SELECT",
        order: 2,
        question: "What phrase do you use to inquire about payment methods?",
      },
      {
        id: 246,
        lessonId: 57,
        type: "SELECT",
        order: 3,
        question: "How do you ask for a discount?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask about the price of an item?)
      {
        challengeId: 244,
        correct: true,
        text: "How much does this cost?",
        audioSrc: "/en_how_much_does_this_cost.mp3",
      },
      {
        challengeId: 244,
        correct: false,
        text: "Can I try this on?",
        audioSrc: "/en_can_i_try_this_on.mp3",
      },
      {
        challengeId: 244,
        correct: false,
        text: "Do you have this in another size?",
        audioSrc: "/en_do_you_have_this_in_another_size.mp3",
      },

      // SELECT (What phrase do you use to inquire about payment methods?)
      {
        challengeId: 245,
        correct: true,
        text: "Do you accept credit cards?",
        audioSrc: "/en_do_you_accept_credit_cards.mp3",
      },
      {
        challengeId: 245,
        correct: false,
        text: "What time do you close?",
        audioSrc: "/en_what_time_do_you_close.mp3",
      },
      {
        challengeId: 245,
        correct: false,
        text: "Can I return this item?",
        audioSrc: "/en_can_i_return_this_item.mp3",
      },

      // SELECT (How do you ask for a discount?)
      {
        challengeId: 246,
        correct: true,
        text: "Can I get a discount?",
        audioSrc: "/en_can_i_get_a_discount.mp3",
      },
      {
        challengeId: 246,
        correct: false,
        text: "What is your return policy?",
        audioSrc: "/en_what_is_your_return_policy.mp3",
      },
      {
        challengeId: 246,
        correct: false,
        text: "Do you have a loyalty program?",
        audioSrc: "/en_do_you_have_a_loyalty_program.mp3",
      },
    ]);

    // Lesson 2 Medical Emergencies

    await db.insert(schema.challenges).values([
      // SELECT questions (Medical Emergencies)
      {
        id: 247,
        lessonId: 58,
        type: "SELECT",
        order: 1,
        question: "How do you ask for medical assistance?",
      },
      {
        id: 248,
        lessonId: 58,
        type: "SELECT",
        order: 2,
        question: "What do you say if you have pain?",
      },
      {
        id: 249,
        lessonId: 58,
        type: "SELECT",
        order: 3,
        question: "How do you inform someone about an allergy?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask for medical assistance?)
      {
        challengeId: 247,
        correct: true,
        text: "I need a doctor.",
        audioSrc: "/en_i_need_a_doctor.mp3",
      },
      {
        challengeId: 247,
        correct: false,
        text: "Where is the nearest pharmacy?",
        audioSrc: "/en_where_is_the_nearest_pharmacy.mp3",
      },
      {
        challengeId: 247,
        correct: false,
        text: "What time does the hospital open?",
        audioSrc: "/en_what_time_does_the_hospital_open.mp3",
      },

      // SELECT (What do you say if you have pain?)
      {
        challengeId: 248,
        correct: true,
        text: "It hurts here.",
        audioSrc: "/en_it_hurts_here.mp3",
      },
      {
        challengeId: 248,
        correct: false,
        text: "I feel tired.",
        audioSrc: "/en_i_feel_tired.mp3",
      },
      {
        challengeId: 248,
        correct: false,
        text: "I have a headache.",
        audioSrc: "/en_i_have_a_headache.mp3",
      },

      // SELECT (How do you inform someone about an allergy?)
      {
        challengeId: 249,
        correct: true,
        text: "I’m allergic to...",
        audioSrc: "/en_im_allergic_to.mp3",
      },
      {
        challengeId: 249,
        correct: false,
        text: "I have a cold.",
        audioSrc: "/en_i_have_a_cold.mp3",
      },
      {
        challengeId: 249,
        correct: false,
        text: "I need some water.",
        audioSrc: "/en_i_need_some_water.mp3",
      },
    ]);

    // Lesson 3 Asking for Help

    await db.insert(schema.challenges).values([
      // SELECT questions (Asking for Help)
      {
        id: 250,
        lessonId: 59,
        type: "SELECT",
        order: 1,
        question: "How do you ask someone to help you?",
      },
      {
        id: 251,
        lessonId: 59,
        type: "SELECT",
        order: 2,
        question: "What do you say if you are lost?",
      },
      {
        id: 252,
        lessonId: 59,
        type: "SELECT",
        order: 3,
        question: "How do you ask for directions to a specific place?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask someone to help you?)
      {
        challengeId: 250,
        correct: true,
        text: "Can you help me?",
        audioSrc: "/en_can_you_help_me.mp3",
      },
      {
        challengeId: 250,
        correct: false,
        text: "Where is the nearest hotel?",
        audioSrc: "/en_where_is_the_nearest_hotel.mp3",
      },
      {
        challengeId: 250,
        correct: false,
        text: "What time does it start?",
        audioSrc: "/en_what_time_does_it_start.mp3",
      },

      // SELECT (What do you say if you are lost?)
      {
        challengeId: 251,
        correct: true,
        text: "I’m lost.",
        audioSrc: "/en_im_lost.mp3",
      },
      {
        challengeId: 251,
        correct: false,
        text: "I need some food.",
        audioSrc: "/en_i_need_some_food.mp3",
      },
      {
        challengeId: 251,
        correct: false,
        text: "Where is my hotel?",
        audioSrc: "/en_where_is_my_hotel.mp3",
      },

      // SELECT (How do you ask for directions to a specific place?)
      {
        challengeId: 252,
        correct: true,
        text: "How do I get to the...?",
        audioSrc: "/en_how_do_i_get_to_the.mp3",
      },
      {
        challengeId: 252,
        correct: false,
        text: "Where is the nearest supermarket?",
        audioSrc: "/en_where_is_the_nearest_supermarket.mp3",
      },
      {
        challengeId: 252,
        correct: false,
        text: "What is the best route?",
        audioSrc: "/en_what_is_the_best_route.mp3",
      },
    ]);

    // Lesson 4 Exchanging Money

    await db.insert(schema.challenges).values([
      // SELECT questions (Exchanging Money)
      {
        id: 253,
        lessonId: 60,
        type: "SELECT",
        order: 1,
        question: "How do you ask where to exchange currency?",
      },
      {
        id: 254,
        lessonId: 60,
        type: "SELECT",
        order: 2,
        question: "What do you say to ask about the exchange rate?",
      },
      {
        id: 255,
        lessonId: 60,
        type: "SELECT",
        order: 3,
        question: "How do you ask if there are fees for exchanging money?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask where to exchange currency?)
      {
        challengeId: 253,
        correct: true,
        text: "Where can I exchange currency?",
        audioSrc: "/en_where_can_i_exchange_currency.mp3",
      },
      {
        challengeId: 253,
        correct: false,
        text: "What is the best place to eat?",
        audioSrc: "/en_what_is_the_best_place_to_eat.mp3",
      },
      {
        challengeId: 253,
        correct: false,
        text: "Where can I find a taxi?",
        audioSrc: "/en_where_can_i_find_a_taxi.mp3",
      },

      // SELECT (What do you say to ask about the exchange rate?)
      {
        challengeId: 254,
        correct: true,
        text: "What’s the exchange rate?",
        audioSrc: "/en_whats_the_exchange_rate.mp3",
      },
      {
        challengeId: 254,
        correct: false,
        text: "Can I pay with cash?",
        audioSrc: "/en_can_i_pay_with_cash.mp3",
      },
      {
        challengeId: 254,
        correct: false,
        text: "What time do you close?",
        audioSrc: "/en_what_time_do_you_close.mp3",
      },

      // SELECT (How do you ask if there are fees for exchanging money?)
      {
        challengeId: 255,
        correct: true,
        text: "Are there any fees?",
        audioSrc: "/en_are_there_any_fees.mp3",
      },
      {
        challengeId: 255,
        correct: false,
        text: "Is this the right way?",
        audioSrc: "/en_is_this_the_right_way.mp3",
      },
      {
        challengeId: 255,
        correct: false,
        text: "How much is this?",
        audioSrc: "/en_how_much_is_this.mp3",
      },
    ]);

    // Lesson 5 Customs and Immigration

    await db.insert(schema.challenges).values([
      // SELECT questions (Customs and Immigration)
      {
        id: 256,
        lessonId: 61,
        type: "SELECT",
        order: 1,
        question: "How do you say you are visiting for tourism?",
      },
      {
        id: 257,
        lessonId: 61,
        type: "SELECT",
        order: 2,
        question: "What do you say when presenting your passport?",
      },
      {
        id: 258,
        lessonId: 61,
        type: "SELECT",
        order: 3,
        question: "How do you indicate your purpose of visit?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you say you are visiting for tourism?)
      {
        challengeId: 256,
        correct: true,
        text: "I’m here for tourism.",
        audioSrc: "/en_im_here_for_tourism.mp3",
      },
      {
        challengeId: 256,
        correct: false,
        text: "I’m looking for a hotel.",
        audioSrc: "/en_im_looking_for_a_hotel.mp3",
      },
      {
        challengeId: 256,
        correct: false,
        text: "I have a reservation.",
        audioSrc: "/en_i_have_a_reservation.mp3",
      },

      // SELECT (What do you say when presenting your passport?)
      {
        challengeId: 257,
        correct: true,
        text: "Here is my passport.",
        audioSrc: "/en_here_is_my_passport.mp3",
      },
      {
        challengeId: 257,
        correct: false,
        text: "I need to check in.",
        audioSrc: "/en_i_need_to_check_in.mp3",
      },
      {
        challengeId: 257,
        correct: false,
        text: "Do you have a map?",
        audioSrc: "/en_do_you_have_a_map.mp3",
      },

      // SELECT (How do you indicate your purpose of visit?)
      {
        challengeId: 258,
        correct: true,
        text: "I’m here for business.",
        audioSrc: "/en_im_here_for_business.mp3",
      },
      {
        challengeId: 258,
        correct: false,
        text: "I’m looking for food.",
        audioSrc: "/en_im_looking_for_food.mp3",
      },
      {
        challengeId: 258,
        correct: false,
        text: "I have a ticket.",
        audioSrc: "/en_i_have_a_ticket.mp3",
      },
    ]);

    // Unit 13: Hotel and Accommodation Phrases

    // Lesson 1 Checking In/Out of a Hotel

    await db.insert(schema.challenges).values([
      // SELECT questions (Checking In/Out of a Hotel)
      {
        id: 259,
        lessonId: 62,
        type: "SELECT",
        order: 1,
        question: "How do you say you have a reservation?",
      },
      {
        id: 260,
        lessonId: 62,
        type: "SELECT",
        order: 2,
        question: "What phrase do you use to check out?",
      },
      {
        id: 261,
        lessonId: 62,
        type: "SELECT",
        order: 3,
        question: "How do you inquire about your check-in time?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you say you have a reservation?)
      {
        challengeId: 259,
        correct: true,
        text: "I have a reservation.",
        audioSrc: "/en_i_have_a_reservation.mp3",
      },
      {
        challengeId: 259,
        correct: false,
        text: "Can I see the menu?",
        audioSrc: "/en_can_i_see_the_menu.mp3",
      },
      {
        challengeId: 259,
        correct: false,
        text: "What time is breakfast?",
        audioSrc: "/en_what_time_is_breakfast.mp3",
      },

      // SELECT (What phrase do you use to check out?)
      {
        challengeId: 260,
        correct: true,
        text: "I’d like to check out.",
        audioSrc: "/en_id_like_to_check_out.mp3",
      },
      {
        challengeId: 260,
        correct: false,
        text: "Where is the nearest bus stop?",
        audioSrc: "/en_where_is_the_nearest_bus_stop.mp3",
      },
      {
        challengeId: 260,
        correct: false,
        text: "What time does the restaurant open?",
        audioSrc: "/en_what_time_does_the_restaurant_open.mp3",
      },

      // SELECT (How do you inquire about your check-in time?)
      {
        challengeId: 261,
        correct: true,
        text: "What time is check-in?",
        audioSrc: "/en_what_time_is_check_in.mp3",
      },
      {
        challengeId: 261,
        correct: false,
        text: "Can I order room service?",
        audioSrc: "/en_can_i_order_room_service.mp3",
      },
      {
        challengeId: 261,
        correct: false,
        text: "Is breakfast included?",
        audioSrc: "/en_is_breakfast_included.mp3",
      },
    ]);

    // Lesson 2 Requesting Services

    await db.insert(schema.challenges).values([
      // SELECT questions (Requesting Services)
      {
        id: 262,
        lessonId: 63,
        type: "SELECT",
        order: 1,
        question: "How do you ask for an extra towel?",
      },
      {
        id: 263,
        lessonId: 63,
        type: "SELECT",
        order: 2,
        question: "What do you say when you need a wake-up call?",
      },
      {
        id: 264,
        lessonId: 63,
        type: "SELECT",
        order: 3,
        question: "How do you inquire about Wi-Fi availability?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask for an extra towel?)
      {
        challengeId: 262,
        correct: true,
        text: "Can I have an extra towel?",
        audioSrc: "/en_can_i_have_an_extra_towel.mp3",
      },
      {
        challengeId: 262,
        correct: false,
        text: "Where is the gym?",
        audioSrc: "/en_where_is_the_gym.mp3",
      },
      {
        challengeId: 262,
        correct: false,
        text: "What time is breakfast?",
        audioSrc: "/en_what_time_is_breakfast.mp3",
      },

      // SELECT (What do you say when you need a wake-up call?)
      {
        challengeId: 263,
        correct: true,
        text: "Can I get a wake-up call?",
        audioSrc: "/en_can_i_get_a_wake_up_call.mp3",
      },
      {
        challengeId: 263,
        correct: false,
        text: "How much is a taxi?",
        audioSrc: "/en_how_much_is_a_taxi.mp3",
      },
      {
        challengeId: 263,
        correct: false,
        text: "Where can I buy a ticket?",
        audioSrc: "/en_where_can_i_buy_a_ticket.mp3",
      },

      // SELECT (How do you inquire about Wi-Fi availability?)
      {
        challengeId: 264,
        correct: true,
        text: "Is there Wi-Fi in the room?",
        audioSrc: "/en_is_there_wifi_in_the_room.mp3",
      },
      {
        challengeId: 264,
        correct: false,
        text: "What time is check-in?",
        audioSrc: "/en_what_time_is_check_in.mp3",
      },
      {
        challengeId: 264,
        correct: false,
        text: "Can I have room service?",
        audioSrc: "/en_can_i_have_room_service.mp3",
      },
    ]);

    // Lesson 3 Confirming Details

    await db.insert(schema.challenges).values([
      // SELECT questions (Confirming Details)
      {
        id: 265,
        lessonId: 64,
        type: "SELECT",
        order: 1,
        question: "How do you ask how much a room costs?",
      },
      {
        id: 266,
        lessonId: 64,
        type: "SELECT",
        order: 2,
        question: "What do you say when confirming your reservation?",
      },
      {
        id: 267,
        lessonId: 64,
        type: "SELECT",
        order: 3,
        question: "How do you ask about check-in time?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask how much a room costs?)
      {
        challengeId: 265,
        correct: true,
        text: "How much per night?",
        audioSrc: "/en_how_much_per_night.mp3",
      },
      {
        challengeId: 265,
        correct: false,
        text: "Can I have a key?",
        audioSrc: "/en_can_i_have_a_key.mp3",
      },
      {
        challengeId: 265,
        correct: false,
        text: "What time is breakfast?",
        audioSrc: "/en_what_time_is_breakfast.mp3",
      },

      // SELECT (What do you say when confirming your reservation?)
      {
        challengeId: 266,
        correct: true,
        text: "I have a reservation for tonight.",
        audioSrc: "/en_i_have_a_reservation_for_tonight.mp3",
      },
      {
        challengeId: 266,
        correct: false,
        text: "Can I pay with a card?",
        audioSrc: "/en_can_i_pay_with_a_card.mp3",
      },
      {
        challengeId: 266,
        correct: false,
        text: "Where is the breakfast buffet?",
        audioSrc: "/en_where_is_the_breakfast_buffet.mp3",
      },

      // SELECT (How do you ask about check-in time?)
      {
        challengeId: 267,
        correct: true,
        text: "What time is check-in?",
        audioSrc: "/en_what_time_is_check_in.mp3",
      },
      {
        challengeId: 267,
        correct: false,
        text: "Where can I find the pool?",
        audioSrc: "/en_where_can_i_find_the_pool.mp3",
      },
      {
        challengeId: 267,
        correct: false,
        text: "Is breakfast included?",
        audioSrc: "/en_is_breakfast_included.mp3",
      },
    ]);

    // Lesson 4 Complaints

    await db.insert(schema.challenges).values([
      // SELECT questions (Complaints)
      {
        id: 268,
        lessonId: 65,
        type: "SELECT",
        order: 1,
        question: "How do you report a problem with your room?",
      },
      {
        id: 269,
        lessonId: 65,
        type: "SELECT",
        order: 2,
        question: "What do you say if the air conditioning is not working?",
      },
      {
        id: 270,
        lessonId: 65,
        type: "SELECT",
        order: 3,
        question: "How do you express dissatisfaction with service?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you report a problem with your room?)
      {
        challengeId: 268,
        correct: true,
        text: "There is a problem with the room.",
        audioSrc: "/en_there_is_a_problem_with_the_room.mp3",
      },
      {
        challengeId: 268,
        correct: false,
        text: "Can I have a drink?",
        audioSrc: "/en_can_i_have_a_drink.mp3",
      },
      {
        challengeId: 268,
        correct: false,
        text: "Where is the restaurant?",
        audioSrc: "/en_where_is_the_restaurant.mp3",
      },

      // SELECT (What do you say if the air conditioning is not working?)
      {
        challengeId: 269,
        correct: true,
        text: "The air conditioning isn’t working.",
        audioSrc: "/en_the_air_conditioning_isnt_working.mp3",
      },
      {
        challengeId: 269,
        correct: false,
        text: "I need more pillows.",
        audioSrc: "/en_i_need_more_pillows.mp3",
      },
      {
        challengeId: 269,
        correct: false,
        text: "Is breakfast included?",
        audioSrc: "/en_is_breakfast_included.mp3",
      },

      // SELECT (How do you express dissatisfaction with service?)
      {
        challengeId: 270,
        correct: true,
        text: "I’m not happy with the service.",
        audioSrc: "/en_im_not_happy_with_the_service.mp3",
      },
      {
        challengeId: 270,
        correct: false,
        text: "Can I order food?",
        audioSrc: "/en_can_i_order_food.mp3",
      },
      {
        challengeId: 270,
        correct: false,
        text: "What time is check-out?",
        audioSrc: "/en_what_time_is_check_out.mp3",
      },
    ]);

    // Lesson 5 Asking for Recommendations

    await db.insert(schema.challenges).values([
      // SELECT questions (Asking for Recommendations)
      {
        id: 271,
        lessonId: 66,
        type: "SELECT",
        order: 1,
        question: "How do you ask for a good restaurant?",
      },
      {
        id: 272,
        lessonId: 66,
        type: "SELECT",
        order: 2,
        question: "What do you say to ask about attractions nearby?",
      },
      {
        id: 273,
        lessonId: 66,
        type: "SELECT",
        order: 3,
        question: "How do you ask for the best local food?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask for a good restaurant?)
      {
        challengeId: 271,
        correct: true,
        text: "Where is a good restaurant?",
        audioSrc: "/en_where_is_a_good_restaurant.mp3",
      },
      {
        challengeId: 271,
        correct: false,
        text: "What time is breakfast?",
        audioSrc: "/en_what_time_is_breakfast.mp3",
      },
      {
        challengeId: 271,
        correct: false,
        text: "Can I have a drink?",
        audioSrc: "/en_can_i_have_a_drink.mp3",
      },

      // SELECT (What do you say to ask about attractions nearby?)
      {
        challengeId: 272,
        correct: true,
        text: "What can I see nearby?",
        audioSrc: "/en_what_can_i_see_nearby.mp3",
      },
      {
        challengeId: 272,
        correct: false,
        text: "Can I get a late checkout?",
        audioSrc: "/en_can_i_get_a_late_checkout.mp3",
      },
      {
        challengeId: 272,
        correct: false,
        text: "How much is a ticket?",
        audioSrc: "/en_how_much_is_a_ticket.mp3",
      },

      // SELECT (How do you ask for the best local food?)
      {
        challengeId: 273,
        correct: true,
        text: "What’s the best local food?",
        audioSrc: "/en_whats_the_best_local_food.mp3",
      },
      {
        challengeId: 273,
        correct: false,
        text: "Is there a pool?",
        audioSrc: "/en_is_there_a_pool.mp3",
      },
      {
        challengeId: 273,
        correct: false,
        text: "Where is the nearest airport?",
        audioSrc: "/en_where_is_the_nearest_airport.mp3",
      },
    ]);

    // Unit 14: Transportation Vocabulary

    // Lesson 1 Renting a Car
    await db.insert(schema.challenges).values([
      // SELECT questions (Renting a Car)
      {
        id: 274,
        lessonId: 67,
        type: "SELECT",
        order: 1,
        question: "How do you express interest in renting a car?",
      },
      {
        id: 275,
        lessonId: 67,
        type: "SELECT",
        order: 2,
        question: "What do you ask about the price of a rental car?",
      },
      {
        id: 276,
        lessonId: 67,
        type: "SELECT",
        order: 3,
        question: "How do you inquire about rental conditions?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you express interest in renting a car?)
      {
        challengeId: 274,
        correct: true,
        text: "I’d like to rent a car.",
        audioSrc: "/en_id_like_to_rent_a_car.mp3",
      },
      {
        challengeId: 274,
        correct: false,
        text: "Where is the bus station?",
        audioSrc: "/en_where_is_the_bus_station.mp3",
      },
      {
        challengeId: 274,
        correct: false,
        text: "How much is a ticket?",
        audioSrc: "/en_how_much_is_a_ticket.mp3",
      },

      // SELECT (What do you ask about the price of a rental car?)
      {
        challengeId: 275,
        correct: true,
        text: "How much per day?",
        audioSrc: "/en_how_much_per_day.mp3",
      },
      {
        challengeId: 275,
        correct: false,
        text: "Where is the train station?",
        audioSrc: "/en_where_is_the_train_station.mp3",
      },
      {
        challengeId: 275,
        correct: false,
        text: "What time does the bus leave?",
        audioSrc: "/en_what_time_does_the_bus_leave.mp3",
      },

      // SELECT (How do you inquire about rental conditions?)
      {
        challengeId: 276,
        correct: true,
        text: "What are the rental conditions?",
        audioSrc: "/en_what_are_the_rental_conditions.mp3",
      },
      {
        challengeId: 276,
        correct: false,
        text: "Can I have a map?",
        audioSrc: "/en_can_i_have_a_map.mp3",
      },
      {
        challengeId: 276,
        correct: false,
        text: "When does the train arrive?",
        audioSrc: "/en_when_does_the_train_arrive.mp3",
      },
    ]);

    // Lesson 2  Taxi Phrases

    await db.insert(schema.challenges).values([
      // SELECT questions (Taxi Phrases)
      {
        id: 277,
        lessonId: 68,
        type: "SELECT",
        order: 1,
        question: "How do you tell the driver your destination?",
      },
      {
        id: 278,
        lessonId: 68,
        type: "SELECT",
        order: 2,
        question: "What do you ask about the fare?",
      },
      {
        id: 279,
        lessonId: 68,
        type: "SELECT",
        order: 3,
        question: "How do you request a taxi?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you tell the driver your destination?)
      {
        challengeId: 277,
        correct: true,
        text: "Take me to [destination].",
        audioSrc: "/en_take_me_to_destination.mp3",
      },
      {
        challengeId: 277,
        correct: false,
        text: "What time is it?",
        audioSrc: "/en_what_time_is_it.mp3",
      },
      {
        challengeId: 277,
        correct: false,
        text: "Where is the bus stop?",
        audioSrc: "/en_where_is_the_bus_stop.mp3",
      },

      // SELECT (What do you ask about the fare?)
      {
        challengeId: 278,
        correct: true,
        text: "How much to go to [destination]?",
        audioSrc: "/en_how_much_to_go_to_destination.mp3",
      },
      {
        challengeId: 278,
        correct: false,
        text: "Where can I buy a ticket?",
        audioSrc: "/en_where_can_i_buy_a_ticket.mp3",
      },
      {
        challengeId: 278,
        correct: false,
        text: "Is this the right bus?",
        audioSrc: "/en_is_this_the_right_bus.mp3",
      },

      // SELECT (How do you request a taxi?)
      {
        challengeId: 279,
        correct: true,
        text: "Can you call a taxi?",
        audioSrc: "/en_can_you_call_a_taxi.mp3",
      },
      {
        challengeId: 279,
        correct: false,
        text: "What time does the next bus arrive?",
        audioSrc: "/en_what_time_does_the_next_bus_arrive.mp3",
      },
      {
        challengeId: 279,
        correct: false,
        text: "Where is the train station?",
        audioSrc: "/en_where_is_the_train_station.mp3",
      },
    ]);

    // Lesson 3 Using Public Transport

    await db.insert(schema.challenges).values([
      // SELECT questions (Using Public Transport)
      {
        id: 280,
        lessonId: 69,
        type: "SELECT",
        order: 1,
        question: "How do you ask about the bus stop?",
      },
      {
        id: 281,
        lessonId: 69,
        type: "SELECT",
        order: 2,
        question: "What do you ask about the train?",
      },
      {
        id: 282,
        lessonId: 69,
        type: "SELECT",
        order: 3,
        question: "How do you inquire about schedules?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask about the bus stop?)
      {
        challengeId: 280,
        correct: true,
        text: "Where is the bus stop?",
        audioSrc: "/en_where_is_the_bus_stop.mp3",
      },
      {
        challengeId: 280,
        correct: false,
        text: "How much does it cost?",
        audioSrc: "/en_how_much_does_it_cost.mp3",
      },
      {
        challengeId: 280,
        correct: false,
        text: "Can I have a ticket?",
        audioSrc: "/en_can_i_have_a_ticket.mp3",
      },

      // SELECT (What do you ask about the train?)
      {
        challengeId: 281,
        correct: true,
        text: "Is this the train to [destination]?",
        audioSrc: "/en_is_this_the_train_to_destination.mp3",
      },
      {
        challengeId: 281,
        correct: false,
        text: "Where is my hotel?",
        audioSrc: "/en_where_is_my_hotel.mp3",
      },
      {
        challengeId: 281,
        correct: false,
        text: "Can I get a taxi?",
        audioSrc: "/en_can_i_get_a_taxi.mp3",
      },

      // SELECT (How do you inquire about schedules?)
      {
        challengeId: 282,
        correct: true,
        text: "What time is the next bus/train?",
        audioSrc: "/en_what_time_is_the_next_bus_train.mp3",
      },
      {
        challengeId: 282,
        correct: false,
        text: "Is breakfast included?",
        audioSrc: "/en_is_breakfast_included.mp3",
      },
      {
        challengeId: 282,
        correct: false,
        text: "Can I have an extra pillow?",
        audioSrc: "/en_can_i_have_an_extra_pillow.mp3",
      },
    ]);

    // Lesson 4 Tickets

    await db.insert(schema.challenges).values([
      // SELECT questions (Tickets)
      {
        id: 283,
        lessonId: 70,
        type: "SELECT",
        order: 1,
        question: "How do you ask for a ticket?",
      },
      {
        id: 284,
        lessonId: 70,
        type: "SELECT",
        order: 2,
        question: "What do you ask about the ticket type?",
      },
      {
        id: 285,
        lessonId: 70,
        type: "SELECT",
        order: 3,
        question: "How do you inquire about ticket prices?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask for a ticket?)
      {
        challengeId: 283,
        correct: true,
        text: "I’d like a ticket to [destination].",
        audioSrc: "/en_id_like_a_ticket_to_destination.mp3",
      },
      {
        challengeId: 283,
        correct: false,
        text: "Can you help me?",
        audioSrc: "/en_can_you_help_me.mp3",
      },
      {
        challengeId: 283,
        correct: false,
        text: "Where is the bus stop?",
        audioSrc: "/en_where_is_the_bus_stop.mp3",
      },

      // SELECT (What do you ask about the ticket type?)
      {
        challengeId: 284,
        correct: true,
        text: "One-way or round-trip?",
        audioSrc: "/en_one_way_or_round_trip.mp3",
      },
      {
        challengeId: 284,
        correct: false,
        text: "How much is it?",
        audioSrc: "/en_how_much_is_it.mp3",
      },
      {
        challengeId: 284,
        correct: false,
        text: "Where is the nearest hotel?",
        audioSrc: "/en_where_is_the_nearest_hotel.mp3",
      },

      // SELECT (How do you inquire about ticket prices?)
      {
        challengeId: 285,
        correct: true,
        text: "How much is a ticket?",
        audioSrc: "/en_how_much_is_a_ticket.mp3",
      },
      {
        challengeId: 285,
        correct: false,
        text: "Is there a discount?",
        audioSrc: "/en_is_there_a_discount.mp3",
      },
      {
        challengeId: 285,
        correct: false,
        text: "Can I get a free upgrade?",
        audioSrc: "/en_can_i_get_a_free_upgrade.mp3",
      },
    ]);

    // Lesson 5 Navigating and Asking for Directions

    await db.insert(schema.challenges).values([
      // SELECT questions (Asking for Directions)
      {
        id: 286,
        lessonId: 71,
        type: "SELECT",
        order: 1,
        question: "How do you ask for directions to a specific place?",
      },
      {
        id: 287,
        lessonId: 71,
        type: "SELECT",
        order: 2,
        question:
          "What phrase can you use to ask how to reach a certain destination?",
      },
      {
        id: 288,
        lessonId: 71,
        type: "SELECT",
        order: 3,
        question: "How do you ask if a place is nearby?",
      },
      {
        id: 289,
        lessonId: 71,
        type: "SELECT",
        order: 4,
        question: "What do you say when you are lost and need help?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask for directions to a specific place?)
      {
        challengeId: 286,
        correct: true,
        text: "Where is the [place]?",
        audioSrc: "/en_where_is_the_place.mp3",
      },
      {
        challengeId: 286,
        correct: false,
        text: "How much is it?",
        audioSrc: "/en_how_much_is_it.mp3",
      },
      {
        challengeId: 286,
        correct: false,
        text: "What time does the bus leave?",
        audioSrc: "/en_what_time_does_the_bus_leave.mp3",
      },

      // SELECT (What phrase can you use to ask how to reach a certain destination?)
      {
        challengeId: 287,
        correct: true,
        text: "How do I get to [destination]?",
        audioSrc: "/en_how_do_i_get_to_destination.mp3",
      },
      {
        challengeId: 287,
        correct: false,
        text: "Where can I exchange money?",
        audioSrc: "/en_where_can_i_exchange_money.mp3",
      },
      {
        challengeId: 287,
        correct: false,
        text: "Can I pay by credit card?",
        audioSrc: "/en_can_i_pay_by_credit_card.mp3",
      },

      // SELECT (How do you ask if a place is nearby?)
      {
        challengeId: 288,
        correct: true,
        text: "Is it near here?",
        audioSrc: "/en_is_it_near_here.mp3",
      },
      {
        challengeId: 288,
        correct: false,
        text: "Where is the nearest ATM?",
        audioSrc: "/en_where_is_the_nearest_atm.mp3",
      },
      {
        challengeId: 288,
        correct: false,
        text: "Is the train delayed?",
        audioSrc: "/en_is_the_train_delayed.mp3",
      },

      // SELECT (What do you say when you are lost and need help?)
      {
        challengeId: 289,
        correct: true,
        text: "I’m lost. Can you help me?",
        audioSrc: "/en_im_lost_can_you_help_me.mp3",
      },
      {
        challengeId: 289,
        correct: false,
        text: "Is there a bathroom nearby?",
        audioSrc: "/en_is_there_a_bathroom_nearby.mp3",
      },
      {
        challengeId: 289,
        correct: false,
        text: "Can I have the check, please?",
        audioSrc: "/en_can_i_have_the_check_please.mp3",
      },
    ]);

    // Unit 15: Time, Dates, and Scheduling

    // Lesson 1  Asking the Time
    await db.insert(schema.challenges).values([
      // SELECT questions for Lesson 1: Asking the Time
      {
        id: 401,
        lessonId: 71, // Assuming lesson 1 of unit 15 has ID 71
        type: "SELECT",
        order: 1,
        question: 'How do you ask "What time is it?" in English?',
      },
      {
        id: 402,
        lessonId: 71,
        type: "SELECT",
        order: 2,
        question: "Which phrase is used to say it’s 3:30?",
      },
      {
        id: 403,
        lessonId: 71,
        type: "SELECT",
        order: 3,
        question: 'What does "quarter past" mean?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask "What time is it?" in English?)
      {
        challengeId: 401,
        correct: true,
        text: "What time is it?",
        audioSrc: "/en_what_time_is_it.mp3",
      },
      {
        challengeId: 401,
        correct: false,
        text: "How much time do we have?",
        audioSrc: "/en_how_much_time.mp3",
      },
      {
        challengeId: 401,
        correct: false,
        text: "Can you tell me the day?",
        audioSrc: "/en_tell_me_day.mp3",
      },

      // SELECT (Which phrase is used to say it’s 3:30?)
      {
        challengeId: 402,
        correct: true,
        text: "It’s half past three.",
        audioSrc: "/en_half_past_three.mp3",
      },
      {
        challengeId: 402,
        correct: false,
        text: "It’s three fifteen.",
        audioSrc: "/en_three_fifteen.mp3",
      },
      {
        challengeId: 402,
        correct: false,
        text: "It’s four o’clock.",
        audioSrc: "/en_four_oclock.mp3",
      },

      // SELECT (What does "quarter past" mean?)
      {
        challengeId: 403,
        correct: true,
        text: "Fifteen minutes past the hour.",
        audioSrc: "/en_fifteen_minutes_past.mp3",
      },
      {
        challengeId: 403,
        correct: false,
        text: "Thirty minutes past the hour.",
        audioSrc: "/en_thirty_minutes_past.mp3",
      },
      {
        challengeId: 403,
        correct: false,
        text: "Forty-five minutes past the hour.",
        audioSrc: "/en_forty_five_minutes_past.mp3",
      },
    ]);

    // Lesson 2 Discussing the Date
    await db.insert(schema.challenges).values([
      // SELECT questions for Lesson 2: Discussing the Date
      {
        id: 404,
        lessonId: 72, // Assuming lesson 2 of unit 15 has ID 72
        type: "SELECT",
        order: 1,
        question: 'How do you ask "What’s today’s date?" in English?',
      },
      {
        id: 405,
        lessonId: 72,
        type: "SELECT",
        order: 2,
        question: 'Which phrase is used to say "Today is the 15th of April"?',
      },
      {
        id: 406,
        lessonId: 72,
        type: "SELECT",
        order: 3,
        question: 'What does "The day after tomorrow" mean?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask "What’s today’s date?" in English?)
      {
        challengeId: 404,
        correct: true,
        text: "What’s today’s date?",
        audioSrc: "/en_whats_todays_date.mp3",
      },
      {
        challengeId: 404,
        correct: false,
        text: "What day is it?",
        audioSrc: "/en_what_day_is_it.mp3",
      },
      {
        challengeId: 404,
        correct: false,
        text: "What time is it?",
        audioSrc: "/en_what_time_is_it.mp3",
      },

      // SELECT (Which phrase is used to say "Today is the 15th of April"?)
      {
        challengeId: 405,
        correct: true,
        text: "Today is April 15th.",
        audioSrc: "/en_april_15th.mp3",
      },
      {
        challengeId: 405,
        correct: false,
        text: "Today is the 15th of May.",
        audioSrc: "/en_may_15th.mp3",
      },
      {
        challengeId: 405,
        correct: false,
        text: "Today is the 14th of April.",
        audioSrc: "/en_april_14th.mp3",
      },

      // SELECT (What does "The day after tomorrow" mean?)
      {
        challengeId: 406,
        correct: true,
        text: "Two days from now.",
        audioSrc: "/en_two_days_from_now.mp3",
      },
      {
        challengeId: 406,
        correct: false,
        text: "Tomorrow.",
        audioSrc: "/en_tomorrow.mp3",
      },
      {
        challengeId: 406,
        correct: false,
        text: "Yesterday.",
        audioSrc: "/en_yesterday.mp3",
      },
    ]);

    // Lesson 3 Setting Up Meetings

    await db.insert(schema.challenges).values([
      // SELECT questions for Lesson 3: Setting Up Meetings
      {
        id: 407,
        lessonId: 73, // Assuming lesson 3 of unit 15 has ID 73
        type: "SELECT",
        order: 1,
        question: 'How do you say "Let’s meet at 3 p.m." in English?',
      },
      {
        id: 408,
        lessonId: 73,
        type: "SELECT",
        order: 2,
        question: 'Which phrase is used to ask "When are you free?"',
      },
      {
        id: 409,
        lessonId: 73,
        type: "SELECT",
        order: 3,
        question: 'What does "We can meet at noon" mean?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you say "Let’s meet at 3 p.m." in English?)
      {
        challengeId: 407,
        correct: true,
        text: "Let’s meet at 3 p.m.",
        audioSrc: "/en_meet_at_3.mp3",
      },
      {
        challengeId: 407,
        correct: false,
        text: "Let’s meet at 9 a.m.",
        audioSrc: "/en_meet_at_9.mp3",
      },
      {
        challengeId: 407,
        correct: false,
        text: "Can we meet tomorrow?",
        audioSrc: "/en_meet_tomorrow.mp3",
      },

      // SELECT (Which phrase is used to ask "When are you free?")
      {
        challengeId: 408,
        correct: true,
        text: "When are you free?",
        audioSrc: "/en_when_are_you_free.mp3",
      },
      {
        challengeId: 408,
        correct: false,
        text: "What time is it?",
        audioSrc: "/en_what_time_is_it.mp3",
      },
      {
        challengeId: 408,
        correct: false,
        text: "Where are you?",
        audioSrc: "/en_where_are_you.mp3",
      },

      // SELECT (What does "We can meet at noon" mean?)
      {
        challengeId: 409,
        correct: true,
        text: "We can meet at 12 p.m.",
        audioSrc: "/en_meet_at_noon.mp3",
      },
      {
        challengeId: 409,
        correct: false,
        text: "We can meet in the morning.",
        audioSrc: "/en_meet_in_morning.mp3",
      },
      {
        challengeId: 409,
        correct: false,
        text: "We can meet at midnight.",
        audioSrc: "/en_meet_at_midnight.mp3",
      },
    ]);

    // Lesson 4  Scheduling Appointments

    await db.insert(schema.challenges).values([
      // SELECT questions for Lesson 4: Scheduling Appointments
      {
        id: 410,
        lessonId: 74, // Assuming lesson 4 of unit 15 has ID 74
        type: "SELECT",
        order: 1,
        question:
          'How do you say "I’d like to schedule an appointment" in English?',
      },
      {
        id: 411,
        lessonId: 74,
        type: "SELECT",
        order: 2,
        question:
          'Which phrase means "When is your next available appointment?"',
      },
      {
        id: 412,
        lessonId: 74,
        type: "SELECT",
        order: 3,
        question: 'What does "Can we reschedule?" mean?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you say "I’d like to schedule an appointment" in English?)
      {
        challengeId: 410,
        correct: true,
        text: "I’d like to schedule an appointment.",
        audioSrc: "/en_schedule_appointment.mp3",
      },
      {
        challengeId: 410,
        correct: false,
        text: "What time is the appointment?",
        audioSrc: "/en_time_of_appointment.mp3",
      },
      {
        challengeId: 410,
        correct: false,
        text: "Can I cancel the appointment?",
        audioSrc: "/en_cancel_appointment.mp3",
      },

      // SELECT (Which phrase means "When is your next available appointment?")
      {
        challengeId: 411,
        correct: true,
        text: "When is your next available appointment?",
        audioSrc: "/en_next_available_appointment.mp3",
      },
      {
        challengeId: 411,
        correct: false,
        text: "What time is my appointment?",
        audioSrc: "/en_time_of_my_appointment.mp3",
      },
      {
        challengeId: 411,
        correct: false,
        text: "Can I book an appointment?",
        audioSrc: "/en_book_appointment.mp3",
      },

      // SELECT (What does "Can we reschedule?" mean?)
      {
        challengeId: 412,
        correct: true,
        text: "Can we change the time of the appointment?",
        audioSrc: "/en_change_time_of_appointment.mp3",
      },
      {
        challengeId: 412,
        correct: false,
        text: "Can we cancel the appointment?",
        audioSrc: "/en_cancel_appointment.mp3",
      },
      {
        challengeId: 412,
        correct: false,
        text: "Can we confirm the appointment?",
        audioSrc: "/en_confirm_appointment.mp3",
      },
    ]);

    // Lesson 5 Confirming and Changing Appointments

    await db.insert(schema.challenges).values([
      // SELECT questions for Lesson 5: Confirming and Changing Appointments
      {
        id: 413,
        lessonId: 75, // Assuming lesson 5 of unit 15 has ID 75
        type: "SELECT",
        order: 1,
        question: "How do you ask to confirm an appointment in English?",
      },
      {
        id: 414,
        lessonId: 75,
        type: "SELECT",
        order: 2,
        question: "Which phrase is used to reschedule an appointment?",
      },
      {
        id: 415,
        lessonId: 75,
        type: "SELECT",
        order: 3,
        question: 'What does "Can we change the meeting time?" mean?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // SELECT (How do you ask to confirm an appointment in English?)
      {
        challengeId: 413,
        correct: true,
        text: "Can we confirm the appointment for [day] at [time]?",
        audioSrc: "/en_confirm_appointment.mp3",
      },
      {
        challengeId: 413,
        correct: false,
        text: "Can we reschedule the appointment?",
        audioSrc: "/en_reschedule_appointment.mp3",
      },
      {
        challengeId: 413,
        correct: false,
        text: "Can we cancel the appointment?",
        audioSrc: "/en_cancel_appointment.mp3",
      },

      // SELECT (Which phrase is used to reschedule an appointment?)
      {
        challengeId: 414,
        correct: true,
        text: "Can we change the time of the appointment?",
        audioSrc: "/en_change_time_of_appointment.mp3",
      },
      {
        challengeId: 414,
        correct: false,
        text: "Can we meet now?",
        audioSrc: "/en_meet_now.mp3",
      },
      {
        challengeId: 414,
        correct: false,
        text: "Can we confirm the appointment?",
        audioSrc: "/en_confirm_appointment.mp3",
      },

      // SELECT (What does "Can we change the meeting time?" mean?)
      {
        challengeId: 415,
        correct: true,
        text: "It means rescheduling the meeting.",
        audioSrc: "/en_reschedule_meeting.mp3",
      },
      {
        challengeId: 415,
        correct: false,
        text: "It means confirming the meeting time.",
        audioSrc: "/en_confirm_meeting.mp3",
      },
      {
        challengeId: 415,
        correct: false,
        text: "It means canceling the meeting.",
        audioSrc: "/en_cancel_meeting.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
