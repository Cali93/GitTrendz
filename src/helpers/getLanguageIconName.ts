import { languagesList } from '../static/ressources/languagesList';

export const getLanguageIconName = languageFromGit => {

  if (!languagesList.includes(languageFromGit)){
    return 'devicon';
  }

  const formatLanguage = (language: string) => {
    let formattedLanguage: string;
    if (language === 'C#') {
      formattedLanguage = 'csharp'
      return formattedLanguage;
    }
    if (language === 'C++') {
      formattedLanguage = 'cplusplus'
      return formattedLanguage;
    }
    if (language === 'CSS') {
      formattedLanguage = 'css3'
      return formattedLanguage;
    }
    if (language === 'HTML') {
      formattedLanguage = 'html5'
      return formattedLanguage;
    }
    if (language === 'Vue') {
      formattedLanguage = 'vuejs'
      return formattedLanguage;
    }
    return language.toLowerCase();
  }

  const languageIconName: string = formatLanguage(languageFromGit);

  return languageIconName;
}