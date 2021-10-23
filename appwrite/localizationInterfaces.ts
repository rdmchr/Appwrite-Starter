/**
 * @see https://appwrite.io/docs/models/locale
 */
interface AppwriteLocale {
    ip: string;
    countryCode: string;
    country: string;
    continentCode: string;
    continent: string;
    eu: boolean;
    currency: string;
}

/**
 * @see https://appwrite.io/docs/models/country
 */
interface AppwriteCountry {
    name: string;
    code: string;
}

/**
 * @see https://appwrite.io/docs/models/countryList
 */
interface AppwriteCountryList {
    sum: number;
    countries: AppwriteCountry[];
}

/**
 * @see https://appwrite.io/docs/models/phone
 */
interface AppwritePhone {
    code: string;
    countryCode: string;
    countryName: string;
}

/**
 * @see https://appwrite.io/docs/models/phoneList
 */
interface AppwritePhonesList {
    sum: number;
    phones: AppwritePhone[];
}

/**
 * @see https://appwrite.io/docs/models/continent
 */
interface AppwriteContinent {
    name: string;
    code: string;
}

/**
 * @see https://appwrite.io/docs/models/continentList
 */
interface AppwriteContinentsList {
    sum: number;
    continents: AppwriteContinent[];
}

/**
 * @see https://appwrite.io/docs/models/currency
 */
interface AppwriteCurrency {
    symbol: string;
    name: string;
    symbolNegative: string;
    decimalDigits: number;
    rounding: number;
    code: string;
    namePlural: string;
}

/**
 * @see https://appwrite.io/docs/models/currencyList
 */
interface AppwriteCurrenciesList {
    sum: number;
    currencies: AppwriteCurrency[];
}

/**
 * @see https://appwrite.io/docs/models/language
 */
interface AppwriteLanguage {
    name: string;
    code: string;
    nativeName: string;
}

/**
 * @see https://appwrite.io/docs/models/languageList
 */
interface AppwriteLanguagesList {
    sum: number;
    languages: AppwriteLanguage[];
}

export {
    AppwriteLocale,
    AppwriteCountryList,
    AppwritePhonesList,
    AppwriteContinentsList,
    AppwriteCurrenciesList,
    AppwriteLanguagesList
}