import { Continent } from "../entity/Continent";
import { Country } from "../entity/Country";

const continent = [
  { name: "Europe", code: "EU" },
  { name: "Asia", code: "AS" },
  { name: "Africa", code: "AF" },
  { name: "America", code: "AM" },
  { name: "Oceania", code: "OC" },
];

const countries = [
  { name: "France", code: "FR", emoji: "🇫🇷", continentCode: "EU" },
  { name: "Belgium", code: "BE", emoji: "🇧🇪", continentCode: "EU" },
  { name: "Japan", code: "JP", emoji: "🇯🇵", continentCode: "AS" },
];

export const seedContinents = async () => {
  try {
    for (const cont of continent) {
      await Continent.create(cont as Partial<Continent>).save();
    }
    console.log("Continents seeded 🤘🏻🌱");
  } catch (error) {
    console.error("❌ Error seeding continents:", error);
  }
};

export const seedCountries = async () => {
  try {
    for (const country of countries) {
      await Country.create(country as Partial<Country>).save();
    }
    console.log("Countries seeded 🤘🏻🌱");
  } catch (error) {
    console.error("❌ Error seeding countries:", error);
  }
};
