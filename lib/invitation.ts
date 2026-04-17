export type EventEntry = {
  time: string;
  title: string;
  address?: string;
  /** If set, `address` is shown as a link (e.g. maps directions). */
  addressUrl?: string;
};

export const INVITATION = {
  couple: {
    groom: { first: "Հովհաննես", last: "Կարապետյան" },
    bride: { first: "Մարիա", last: "Մինասյան" },
    combined: "Հովհաննես և Մարիա",
  },

  eventDateISO: "2026-04-18T18:00:00+04:00",

  dateDisplay: {
    dayName: "Շաբաթ",
    long: "18 ապրիլի 2026",
    short: "18.04.2026",
    time: "18:00",
  },

  city: "Երևան, Հայաստան",

  events: [
    {
      time: "15:30",
      title: "ՍՈՒՐԲ ԳԱՅԱՆԵ ԵԿԵՂԵՑԻ",
    },
    {
      time: "18:00",
      title: "ԼԻԱՆՆԱ ԳԱՐԴԵՆ ՀՈԼԼ",
      address: "Փարաքար, Երիտասարդության 34",
      addressUrl:
        "https://yandex.com/maps/org/75872747374/?ll=44.391408%2C40.164666&z=18",
    },
  ] as EventEntry[],

  venue: {
    name: "Լիաննա Գարդեն Հոլլ",
    address: "Երևան, Հայաստան",
    mapUrl: "https://maps.google.com/?q=Lianna+Garden+Hall+Yerevan",
  },

  greeting: {
    salutation: "Հարգելի",
  },

  labels: {
    table: "Ձեր սեղանն է՝",
    tableClosing: "Մաղթում ենք հաճելի երեկո",
  },
} as const;

export type Invitation = typeof INVITATION;
