/**
 * Cal.com foglaló beágyazási URL.
 * Állítsd be a valódi event linkre, pl.:
 *   https://cal.com/felhasznalonev/mentalhigienes-segito-beszelgetes
 * Vagy Netlify / .env környezeti változóval: PUBLIC_CAL_EMBED_URL
 *
 * Cal.com beállítás checklist (Melinda):
 * - Event: Mentálhigiénés segítő beszélgetés, 50 perc
 * - Slot interval 60 perc, buffer after 10 perc
 * - Min. notice 24 óra, előre 6 hét, napi max 5
 * - Requires confirmation: ON
 * - Timezone: Europe/Budapest
 * - Helyszín (Cal.com Location): személyesen (Budapest, XIII. kerület) — PszichoFészek / utcanév nélkül
 * - Kérdések: név, e-mail, telefon, első/visszatérő, személyesen/online, adatkezelés elfogadása
 * - Nincs szabad szöveges problémaleírás mező
 */
export const CAL_EMBED_URL: string =
  import.meta.env.PUBLIC_CAL_EMBED_URL ??
  "https://cal.com/melinda-koskocsak-zuyfcf/mentalhigienies-segito-beszelgetes";
