import {appwrite} from './appwrite';
import {AppwriteContinentsList, AppwriteCountryList, AppwriteCurrenciesList, AppwriteLanguagesList, AppwriteLocale, AppwritePhonesList} from './localizationInterfaces';
import {AppwriteError} from './appwriteInterfaces';

const local = appwrite.locale;

/**
 * Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.

([IP Geolocation by DB-IP](https://db-ip.com/))
 * @returns [{@link AppwriteLocale}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/locale#localeGet
 */
async function get(): Promise<[AppwriteLocale | null, AppwriteError | null]> {
    return await local.get().then((locale: AppwriteLocale) => {
        return [locale, null]
    }, (err) => {
        return [null, err];
    });
}

/**
 * List of all countries. You can use the locale header to get the data in a supported language.
 * @returns [{@link AppwriteCountryList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/locale#localeGetCountries
 */
async function getCountries(): Promise<[AppwriteCountryList | null, AppwriteError | null]> {
    return await local.getCountries().then((countries: AppwriteCountryList) => {
        return [countries, null];
    }, (err: AppwriteError) => {
        return [null, err];
    })
}

/**
 * List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.
 * @returns [{@link AppwriteCountryList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/locale#localeGetCountriesEU
 */
async function getCountriesEU(): Promise<[AppwriteCountryList | null, AppwriteError | null]> {
    return await local.getCountriesEU().then((countries: AppwriteCountryList) => {
        return [countries, null];
    }, (err: AppwriteError) => {
        return [null, err];
    })
}

/**
 * List of all countries phone codes. You can use the locale header to get the data in a supported language.
 * @returns [{@link AppwritePhonesList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/locale#localeGetCountriesPhones
 */
async function getCountriesPhones(): Promise<[AppwritePhonesList | null, AppwriteError | null]> {
    return await local.getCountriesPhones().then((phones: AppwritePhonesList) => {
        return [phones, null];
    }, (err: AppwriteError) => {
        return [null, err];
    })
}

/**
 * List of all continents. You can use the locale header to get the data in a supported language.
 * @returns [{@link AppwriteContinentsList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/locale#localeGetContinents
 */
async function getContinents(): Promise<[AppwriteContinentsList | null, AppwriteError | null]> {
    return await local.getContinents().then((continents: AppwriteContinentsList) => {
        return [continents, null];
    }, (err: AppwriteError) => {
        return [null, err];
    })
}

/**
 * List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.
 * @returns [{@link AppwriteCurrenciesList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/locale#localeGetCurrencies
 */
async function getCurrencies(): Promise<[AppwriteCurrenciesList | null, AppwriteError | null]> {
    return await local.getCurrencies().then((currencies: AppwriteCurrenciesList) => {
        return [currencies, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.
 * @returns [{@link AppwriteLanguagesList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/locale#localeGetLanguages
 */
async function getLanguages(): Promise<[AppwriteLanguagesList | null, AppwriteError | null]> {
    return await local.getLanguages().then((languages: AppwriteLanguagesList) => {
        return [languages, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

export {
    getLanguages,
    getCurrencies,
    getContinents,
    getCountriesPhones,
    getCountriesEU,
    getCountries,
    get
}