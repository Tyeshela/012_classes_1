class Language {
    constructor(name, creator, year, description) {
      this.name = name;
      this.creator = creator;
      this.year = year;
      this.description = description;
    }
  }
  
  class Languages {
    constructor() {
      this.languagesDB = [];
    }
  
    addLanguage(name, creator, year, description) {
      const language = new Language(name, creator, year, description);
      this.languagesDB.push(language);
    }
  
    getLanguageInfo(name) {
      const language = this.languagesDB.find(lang => lang.name === name);
      if (language) {
        return {
          Name: language.name,
          Creator: language.creator,
          Year: language.year,
          Description: language.description,
        };
      } else {
        return "Language not found in the database.";
      }
    }
  
    listLanguages() {
      const sortedLanguages = this.languagesDB
        .map(lang => lang.name)
        .sort((a, b) => a.localeCompare(b));
  
      sortedLanguages.forEach((language, index) => {
        console.log(`${index + 1}. ${language}`);
      });
    }
  }