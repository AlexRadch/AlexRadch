export const SITE = {
	title: 'Alexander Radchenko GitHub site',
	description: 'I\'m creating software engineering tips and tricks videos on DrNet channel. If you are interested in everything related to .NET, check out 👀 my videos!',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://sdk.bitmoji.com/render/panel/10222622-99101925628_11-s5-v1.png?transparent=1&palette=1&scale=0',
		alt: 'equation meme',
	},
	twitter: 'AlexRadc',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	Russian: 'ru',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/AlexRadch/AlexRadch/Astro`;

export const COMMUNITY_INVITE_URL = `https://www.youtube.com/channel/UCodTcqPf01ZCPRMJXhVdHiA`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'About': [
			{ text: 'Hi 👋', link: 'en/README' },
		],
	},
	ru: {
		'О сайте': [
			{ text: 'Привет 👋', link: 'ru/README' },
		],
		'Друзьям': [
			{ text: 'Привет 👋', link: 'ru/README' },
		],
	},
};
