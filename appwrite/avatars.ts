import {appwrite} from './appwrite';
import {AppwriteCreditCard} from './avatarsInterfaces';
import {getSessions} from './account';

const avatars = appwrite.avatars;

/**
 * The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.
 * @param code Credit Card Code. Possible values: amex, argencard, cabal, censosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro.
 * @param width Image width. Pass an integer between 0 to 2000. Defaults to 100.
 * @param height Image height. Pass an integer between 0 to 2000. Defaults to 100.
 * @param quality Image quality. Pass an integer between 0 to 100. Defaults to 100.
 * @returns The URL of the requested resource
 * @see https://appwrite.io/docs/client/avatars#avatarsGetCreditCard
 */
async function getCreditCard(
  code: AppwriteCreditCard,
  width?: number,
  height?: number,
  quality?: number
): Promise<string> {
  return avatars.getCreditCard(code, width, height, quality);
}

/**
 * You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user {@link getSessions /account/sessions} endpoint. Use width, height and quality arguments to change the output settings.
 * @param code Browser Code.
 * @param width Image width. Pass an integer between 0 to 2000. Defaults to 100.
 * @param height Image height. Pass an integer between 0 to 2000. Defaults to 100.
 * @param quality Image quality. Pass an integer between 0 to 100. Defaults to 100.
 * @returns The URL of the requested resource
 * @see https://appwrite.io/docs/client/avatars#avatarsGetBrowser
 */
async function getBrowser(code: string, width?: number, height?: number, quality?: number): Promise<string> {
  return avatars.getBrowser(code, width, height, quality);
}

/**
 * You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings.
 * @param code Country Code. ISO Alpha-2 country code format.
 * @param width Image width. Pass an integer between 0 to 2000. Defaults to 100.
 * @param height Image height. Pass an integer between 0 to 2000. Defaults to 100.
 * @param quality Image quality. Pass an integer between 0 to 100. Defaults to 100.
 * @returns The URL of the requested resource
 * @see https://appwrite.io/docs/client/avatars#avatarsGetFlag
 */
async function getFlag(code: string, width?: number, height?: number, quality?: number): Promise<string> {
  return avatars.getFlag(code, width, height, quality);
}

/**
 * Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.
 * @param url Image URL which you want to crop.
 * @param width Resize preview image width, Pass an integer between 0 to 2000.
 * @param height Resize preview image height, Pass an integer between 0 to 2000.
 * @returns The URL of the requested resource
 * @see https://appwrite.io/docs/client/avatars#avatarsGetImage
 */
async function getImage(url: string, width?: number, height?: number): Promise<string> {
  return avatars.getImage(url, width, height);
}

/**
 * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.
 * @param url Website URL which you want to fetch the favicon from.
 * @returns The URL of the requested resource
 * @see https://appwrite.io/docs/client/avatars#avatarsGetFavicon
 */
async function getFavicon(url: string): Promise<string> {
  return avatars.getFavicon(url);
}

/**
 * Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.
 * @param text Plain text to be converted to QR code image.
 * @param size QR code size. Pass an integer between 0 to 1000. Defaults to 400.
 * @param margin Margin from edge. Pass an integer between 0 to 10. Defaults to 1.
 * @param download Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.
 * @returns The URL of the requested resource
 * @see https://appwrite.io/docs/client/avatars#avatarsGetQR
 */
async function getQR(text: string, size?: number, margin?: number, download?: boolean): Promise<string> {
  return avatars.getQR(text, size, margin, download);
}

/**
 * Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.

You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.
 * @param name Full Name. When empty, current user name or email will be used. Max length: 128 chars.
 * @param width Image width. Pass an integer between 0 to 2000. Defaults to 100.
 * @param height Image height. Pass an integer between 0 to 2000. Defaults to 100.
 * @param color Changes text color. By default a random color will be picked and stay will persistent to the given name.
 * @param background Changes background color. By default a random color will be picked and stay will persistent to the given name.
 * @returns The URL of the requested resource
 * @see https://appwrite.io/docs/client/avatars#avatarsGetInitials
 */
async function getInitials(
  name?: string,
  width?: number,
  height?: number,
  color?: string,
  background?: string
): Promise<string> {
  return avatars.getInitials(name, width, height, color, background);
}

export {getInitials, getQR, getFavicon, getImage, getFlag, getBrowser, getCreditCard};
