import { db, schema } from "./db";

const colors = [
  "#8B4513", // Saddle Brown
  "#2F4F4F", // Dark Slate Gray
  "#800020", // Burgundy
  "#1E3A5F", // Dark Blue
  "#355E3B", // Hunter Green
  "#4A0E4E", // Dark Purple
  "#8B0000", // Dark Red
  "#2C3E50", // Midnight Blue
  "#704214", // Sepia
  "#1C1C1C", // Dark Gray
  "#4B3621", // Coffee
  "#36454F", // Charcoal
  "#483D8B", // Dark Slate Blue
  "#556B2F", // Dark Olive Green
  "#5C4033", // Dark Brown
  "#2E2D88", // Royal Blue Dark
  "#614051", // Eggplant
  "#3B3B3B", // Jet
  "#3D2B1F", // Bistre
  "#1B1B1B", // Eerie Black
];

const textures = ["leather", "cloth", "paper"] as const;
const genres = ["fiction", "non-fiction", "science", "history", "philosophy", "poetry", "fantasy", "mystery", "romance", "biography"];

const classicBooks = [
  // Classic Literature
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "fiction" },
  { title: "1984", author: "George Orwell", year: 1949, genre: "fiction" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "fiction" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "fiction" },
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967, genre: "fiction" },
  { title: "War and Peace", author: "Leo Tolstoy", year: 1869, genre: "fiction" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, genre: "fiction" },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", year: 1880, genre: "fiction" },
  { title: "Anna Karenina", author: "Leo Tolstoy", year: 1877, genre: "fiction" },
  { title: "Don Quixote", author: "Miguel de Cervantes", year: 1605, genre: "fiction" },
  { title: "Wuthering Heights", author: "Emily Brontë", year: 1847, genre: "fiction" },
  { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, genre: "fiction" },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851, genre: "fiction" },
  { title: "The Odyssey", author: "Homer", year: -800, genre: "poetry" },
  { title: "The Iliad", author: "Homer", year: -750, genre: "poetry" },
  { title: "Ulysses", author: "James Joyce", year: 1922, genre: "fiction" },
  { title: "Mrs Dalloway", author: "Virginia Woolf", year: 1925, genre: "fiction" },
  { title: "The Sound and the Fury", author: "William Faulkner", year: 1929, genre: "fiction" },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "fiction" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "fiction" },

  // Fantasy & Science Fiction
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, genre: "fantasy" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "fantasy" },
  { title: "Dune", author: "Frank Herbert", year: 1965, genre: "fantasy" },
  { title: "Foundation", author: "Isaac Asimov", year: 1951, genre: "fantasy" },
  { title: "Neuromancer", author: "William Gibson", year: 1984, genre: "fantasy" },
  { title: "Snow Crash", author: "Neal Stephenson", year: 1992, genre: "fantasy" },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979, genre: "fantasy" },
  { title: "A Game of Thrones", author: "George R.R. Martin", year: 1996, genre: "fantasy" },
  { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997, genre: "fantasy" },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", year: 2007, genre: "fantasy" },

  // Philosophy
  { title: "The Republic", author: "Plato", year: -380, genre: "philosophy" },
  { title: "Meditations", author: "Marcus Aurelius", year: 180, genre: "philosophy" },
  { title: "Beyond Good and Evil", author: "Friedrich Nietzsche", year: 1886, genre: "philosophy" },
  { title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", year: 1885, genre: "philosophy" },
  { title: "Being and Time", author: "Martin Heidegger", year: 1927, genre: "philosophy" },
  { title: "The Phenomenology of Spirit", author: "G.W.F. Hegel", year: 1807, genre: "philosophy" },
  { title: "Critique of Pure Reason", author: "Immanuel Kant", year: 1781, genre: "philosophy" },
  { title: "Ethics", author: "Baruch Spinoza", year: 1677, genre: "philosophy" },
  { title: "Existentialism Is a Humanism", author: "Jean-Paul Sartre", year: 1946, genre: "philosophy" },
  { title: "The Myth of Sisyphus", author: "Albert Camus", year: 1942, genre: "philosophy" },

  // Science
  { title: "A Brief History of Time", author: "Stephen Hawking", year: 1988, genre: "science" },
  { title: "The Origin of Species", author: "Charles Darwin", year: 1859, genre: "science" },
  { title: "Cosmos", author: "Carl Sagan", year: 1980, genre: "science" },
  { title: "The Selfish Gene", author: "Richard Dawkins", year: 1976, genre: "science" },
  { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", year: 1962, genre: "science" },
  { title: "Principia Mathematica", author: "Isaac Newton", year: 1687, genre: "science" },
  { title: "On the Origin of Species", author: "Charles Darwin", year: 1859, genre: "science" },
  { title: "Silent Spring", author: "Rachel Carson", year: 1962, genre: "science" },
  { title: "The Double Helix", author: "James Watson", year: 1968, genre: "science" },
  { title: "Sapiens", author: "Yuval Noah Harari", year: 2011, genre: "science" },

  // History
  { title: "The Art of War", author: "Sun Tzu", year: -500, genre: "history" },
  { title: "The Prince", author: "Niccolò Machiavelli", year: 1532, genre: "history" },
  { title: "The History of the Decline and Fall of the Roman Empire", author: "Edward Gibbon", year: 1776, genre: "history" },
  { title: "A People's History of the United States", author: "Howard Zinn", year: 1980, genre: "history" },
  { title: "Guns, Germs, and Steel", author: "Jared Diamond", year: 1997, genre: "history" },
  { title: "The Rise and Fall of the Third Reich", author: "William L. Shirer", year: 1960, genre: "history" },
  { title: "The Silk Roads", author: "Peter Frankopan", year: 2015, genre: "history" },
  { title: "SPQR: A History of Ancient Rome", author: "Mary Beard", year: 2015, genre: "history" },
  { title: "1776", author: "David McCullough", year: 2005, genre: "history" },
  { title: "Team of Rivals", author: "Doris Kearns Goodwin", year: 2005, genre: "history" },

  // Mystery & Thriller
  { title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", year: 1902, genre: "mystery" },
  { title: "Murder on the Orient Express", author: "Agatha Christie", year: 1934, genre: "mystery" },
  { title: "And Then There Were None", author: "Agatha Christie", year: 1939, genre: "mystery" },
  { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005, genre: "mystery" },
  { title: "Gone Girl", author: "Gillian Flynn", year: 2012, genre: "mystery" },
  { title: "The Da Vinci Code", author: "Dan Brown", year: 2003, genre: "mystery" },
  { title: "In Cold Blood", author: "Truman Capote", year: 1966, genre: "mystery" },
  { title: "Rebecca", author: "Daphne du Maurier", year: 1938, genre: "mystery" },
  { title: "The Maltese Falcon", author: "Dashiell Hammett", year: 1930, genre: "mystery" },
  { title: "The Big Sleep", author: "Raymond Chandler", year: 1939, genre: "mystery" },

  // Biography & Memoir
  { title: "The Diary of a Young Girl", author: "Anne Frank", year: 1947, genre: "biography" },
  { title: "Long Walk to Freedom", author: "Nelson Mandela", year: 1994, genre: "biography" },
  { title: "Steve Jobs", author: "Walter Isaacson", year: 2011, genre: "biography" },
  { title: "The Autobiography of Malcolm X", author: "Malcolm X", year: 1965, genre: "biography" },
  { title: "Becoming", author: "Michelle Obama", year: 2018, genre: "biography" },
  { title: "Einstein: His Life and Universe", author: "Walter Isaacson", year: 2007, genre: "biography" },
  { title: "Leonardo da Vinci", author: "Walter Isaacson", year: 2017, genre: "biography" },
  { title: "Alexander Hamilton", author: "Ron Chernow", year: 2004, genre: "biography" },
  { title: "Churchill: A Life", author: "Martin Gilbert", year: 1991, genre: "biography" },
  { title: "Educated", author: "Tara Westover", year: 2018, genre: "biography" },

  // Poetry
  { title: "Leaves of Grass", author: "Walt Whitman", year: 1855, genre: "poetry" },
  { title: "The Collected Poems", author: "Emily Dickinson", year: 1890, genre: "poetry" },
  { title: "The Waste Land", author: "T.S. Eliot", year: 1922, genre: "poetry" },
  { title: "Paradise Lost", author: "John Milton", year: 1667, genre: "poetry" },
  { title: "The Divine Comedy", author: "Dante Alighieri", year: 1320, genre: "poetry" },
  { title: "Sonnets", author: "William Shakespeare", year: 1609, genre: "poetry" },
  { title: "The Canterbury Tales", author: "Geoffrey Chaucer", year: 1400, genre: "poetry" },
  { title: "Howl and Other Poems", author: "Allen Ginsberg", year: 1956, genre: "poetry" },
  { title: "Ariel", author: "Sylvia Plath", year: 1965, genre: "poetry" },
  { title: "Milk and Honey", author: "Rupi Kaur", year: 2014, genre: "poetry" },

  // Romance
  { title: "Outlander", author: "Diana Gabaldon", year: 1991, genre: "romance" },
  { title: "The Notebook", author: "Nicholas Sparks", year: 1996, genre: "romance" },
  { title: "Me Before You", author: "Jojo Moyes", year: 2012, genre: "romance" },
  { title: "The Time Traveler's Wife", author: "Audrey Niffenegger", year: 2003, genre: "romance" },
  { title: "Bridget Jones's Diary", author: "Helen Fielding", year: 1996, genre: "romance" },
  { title: "The Fault in Our Stars", author: "John Green", year: 2012, genre: "romance" },
  { title: "Normal People", author: "Sally Rooney", year: 2018, genre: "romance" },
  { title: "Beach Read", author: "Emily Henry", year: 2020, genre: "romance" },
  { title: "It Ends with Us", author: "Colleen Hoover", year: 2016, genre: "romance" },
  { title: "The Hating Game", author: "Sally Thorne", year: 2016, genre: "romance" },

  // Non-Fiction
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011, genre: "non-fiction" },
  { title: "The Power of Habit", author: "Charles Duhigg", year: 2012, genre: "non-fiction" },
  { title: "Atomic Habits", author: "James Clear", year: 2018, genre: "non-fiction" },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", year: 1989, genre: "non-fiction" },
  { title: "How to Win Friends and Influence People", author: "Dale Carnegie", year: 1936, genre: "non-fiction" },
  { title: "The Lean Startup", author: "Eric Ries", year: 2011, genre: "non-fiction" },
  { title: "Zero to One", author: "Peter Thiel", year: 2014, genre: "non-fiction" },
  { title: "Outliers", author: "Malcolm Gladwell", year: 2008, genre: "non-fiction" },
  { title: "The Tipping Point", author: "Malcolm Gladwell", year: 2000, genre: "non-fiction" },
  { title: "Freakonomics", author: "Steven Levitt", year: 2005, genre: "non-fiction" },

  // More Classic Literature
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890, genre: "fiction" },
  { title: "Frankenstein", author: "Mary Shelley", year: 1818, genre: "fiction" },
  { title: "Dracula", author: "Bram Stoker", year: 1897, genre: "fiction" },
  { title: "The Stranger", author: "Albert Camus", year: 1942, genre: "fiction" },
  { title: "The Trial", author: "Franz Kafka", year: 1925, genre: "fiction" },
  { title: "The Metamorphosis", author: "Franz Kafka", year: 1915, genre: "fiction" },
  { title: "Lolita", author: "Vladimir Nabokov", year: 1955, genre: "fiction" },
  { title: "Catch-22", author: "Joseph Heller", year: 1961, genre: "fiction" },
  { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", year: 1969, genre: "fiction" },
  { title: "The Grapes of Wrath", author: "John Steinbeck", year: 1939, genre: "fiction" },
  { title: "East of Eden", author: "John Steinbeck", year: 1952, genre: "fiction" },
  { title: "Of Mice and Men", author: "John Steinbeck", year: 1937, genre: "fiction" },
  { title: "Beloved", author: "Toni Morrison", year: 1987, genre: "fiction" },
  { title: "The Color Purple", author: "Alice Walker", year: 1982, genre: "fiction" },
  { title: "Invisible Man", author: "Ralph Ellison", year: 1952, genre: "fiction" },
];

async function seed() {
  console.log("Seeding database with books...");

  // Clear existing data
  await db.delete(schema.books);

  const booksToInsert = classicBooks.map((book, index) => ({
    ...book,
    coverColor: colors[index % colors.length],
    spineTexture: textures[index % textures.length],
    thickness: (index % 5) + 1,
    height: (index % 3) + 1,
    description: `A timeless work by ${book.author}, first published in ${book.year > 0 ? book.year : Math.abs(book.year) + " BCE"}.`,
    createdAt: new Date(),
  }));

  await db.insert(schema.books).values(booksToInsert);

  console.log(`Seeded ${booksToInsert.length} books successfully!`);
  process.exit(0);
}

seed().catch(console.error);
