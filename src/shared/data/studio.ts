/** Studio contact + map (Bole Michael / ring road, Addis Ababa). */
export const STUDIO_PHONE_PRIMARY = '+251 911 234 812';
export const STUDIO_PHONE_PRIMARY_TEL = 'tel:+251911234812';

export const STUDIO_PHONE_SECONDARY = '+251 910 202 958';
export const STUDIO_PHONE_SECONDARY_TEL = 'tel:+251910202958';

/** Both numbers, for inline copy and lists. */
export const STUDIO_PHONES = [STUDIO_PHONE_PRIMARY, STUDIO_PHONE_SECONDARY] as const;

export const STUDIO_PHONE_DISPLAY = `${STUDIO_PHONE_PRIMARY} or ${STUDIO_PHONE_SECONDARY}`;
export const STUDIO_PHONE_DISPLAY_AM = `${STUDIO_PHONE_PRIMARY} ወይም ${STUDIO_PHONE_SECONDARY}`;

/** Shared “how to start” FAQ copy (primary number listed first). */
export const STUDIO_FAQ_START_EN = `Write to danassgebbal12@gmail.com or call ${STUDIO_PHONE_DISPLAY}. A short brief and site notes are enough to begin.`;
export const STUDIO_FAQ_START_AM = `ወደ danassgebbal12@gmail.com ይጻፉ ወይም ${STUDIO_PHONE_DISPLAY_AM} ይደውሉ። አጭር ብሪፍ እና የጣቢያ ማስታወሻ በቂ ነው።`;

/** Default click-to-call target (first listed number). */
export const STUDIO_PHONE_TEL = STUDIO_PHONE_PRIMARY_TEL;

export const STUDIO_ADDRESS_EN =
  'Near Bole Michael Church, in front of the ring road, Addis Ababa, Ethiopia';

export const STUDIO_ADDRESS_AM =
  'ቦሌ ሚካኤል ቤተ ክርስቲያን አካባቢ፣ ከቀለቤ መንገድ ፊት ለፊት፣ አዲስ አበባ፣ ኢትዮጵያ';

/** OpenStreetMap embed centered on the studio pin. */
export const STUDIO_MAP_EMBED =
  'https://www.openstreetmap.org/export/embed.html?bbox=38.7685%2C8.9770%2C38.7748%2C8.9825&layer=mapnik&marker=8.9797666%2C38.7716475';

export const STUDIO_MAP_LINK =
  'https://www.google.com/maps/place/%E1%89%A3%E1%88%8C+%E1%88%9A%E1%8A%AB%E1%8A%A4%E1%88%8D/@8.9799289,38.7712922,20.7z/data=!4m14!1m7!3m6!1s0x164b845dce9ce6ad:0xe6c430af710b09f2!2sBole+Michael!8m2!3d8.9805323!4d38.7711117!16s%2Fg%2F1pwfctv0r!3m5!1s0x164b850044f920cd:0xa7b45af0dfdbb696!8m2!3d8.9797666!4d38.7716475!16s%2Fg%2F11zcs2xr1l?entry=ttu';
