export type EventEntry = {
  time: string;
  title: string;
  address?: string;
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
    },
  ] as EventEntry[],

  venue: {
    name: "Լիաննա Գարդեն Հոլլ",
    address: "Երևան, Հայաստան",
    mapUrl: "https://maps.google.com/?q=Lianna+Garden+Hall+Yerevan",
  },

  greeting: {
    salutation: "Հարգելի",
    defaultGuest: "հյուր",
  },

  labels: {
    table: "ՁԵՐ ՍԵՂԱՆԸ",
    tablePrefix: "Սեղան",
    tableNoun: "№",
  },
} as const;

export type Invitation = typeof INVITATION;
