export const INVITATION = {
  couple: {
    groom: "Հովհաննես",
    bride: "Մարիյա",
    combined: "Հովհաննես և Մարիյա",
  },

  eventDateISO: "2026-04-18T18:00:00+04:00",

  dateDisplay: {
    dayName: "Շաբաթ",
    long: "18 ապրիլի 2026",
    short: "18 · 04 · 2026",
    time: "18:00",
  },

  city: "Երևան, Հայաստան",

  venue: {
    name: "Լիաննա Գարդեն Հոլլ",
    address: "Երևան, Հայաստան",
    mapUrl: "https://maps.google.com/?q=Lianna+Garden+Hall+Yerevan",
  },

  greeting: {
    salutation: "Սիրելի",
    body: "Մեծ ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանիքին՝ կիսելու մեզ հետ այս առանձնահատուկ և անմոռանալի օրը։",
    defaultGuest: "հարգելի հյուր",
  },

  footer: {
    signOff: "Սիրով,",
    monogram: "Հ · Մ",
  },

  labels: {
    kicker: "ՀԱՐՍԱՆԻՔ",
    when: "ԵՐԲ",
    where: "ՈՐՏԵՂ",
    table: "ՁԵՐ ՍԵՂԱՆԸ",
    forGuest: "ՀՐԱՎԻՐՎԱԾ Է",
    countdown: {
      days: "օր",
      hours: "ժամ",
      minutes: "րոպե",
      seconds: "վայրկյան",
    },
    viewOnMap: "Քարտեզում տեսնել",
    tablePrefix: "Սեղան",
    tableNoun: "№",
  },
} as const;

export type Invitation = typeof INVITATION;
