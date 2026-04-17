export type ScheduleItem = {
  time: string;
  label: string;
};

export const INVITATION = {
  couple: {
    bride: "Անի",
    groom: "Հովո",
    combined: "Անի և Հովո",
  },

  eventDateISO: "2026-08-15T17:00:00+04:00",

  dateDisplay: {
    dayName: "Շաբաթ",
    long: "15 օգոստոսի 2026",
    short: "15 · 08 · 2026",
    time: "17:00",
  },

  city: "Երևան, Հայաստան",

  venue: {
    name: "Ռեստորանային համալիր «Արարատ Հոլլ»",
    address: "Հանրապետության փող. 1, Երևան",
    mapUrl: "https://maps.google.com/?q=Ararat+Hall+Yerevan",
  },

  greeting: {
    salutation: "Սիրելի",
    body: "Մեծ ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանիքին՝ կիսելու մեզ հետ այս առանձնահատուկ և անմոռանալի օրը։",
    defaultGuest: "հարգելի հյուր",
  },

  schedule: [
    { time: "16:30", label: "Հյուրերի ընդունում" },
    { time: "17:00", label: "Պսակադրություն" },
    { time: "18:30", label: "Ընթրիք" },
    { time: "21:00", label: "Պար և երաժշտություն" },
  ] as ScheduleItem[],

  dressCode: "Հարմարավետ և էլեգանտ · նախընտրելի՝ բնական և հանգիստ երանգներ",

  rsvp: {
    deadline: "1 օգոստոսի 2026",
    email: "wedding@example.com",
    phone: "+374 00 000 000",
  },

  footer: {
    signOff: "Սիրով,",
    monogram: "Ա · Հ",
  },

  labels: {
    kicker: "ՀԱՐՍԱՆԻՔ",
    when: "ԵՐԲ",
    where: "ՈՐՏԵՂ",
    schedule: "ՕՐՎԱ ԸՆԹԱՑՔԸ",
    table: "ՁԵՐ ՍԵՂԱՆԸ",
    forGuest: "ՀՐԱՎԻՐՎԱԾ Է",
    dressCode: "ՀԱԳՈՒՍՏԻ ՈՃԸ",
    rsvp: "ՀԱՍՏԱՏՈՒՄ",
    countdown: {
      days: "օր",
      hours: "ժամ",
      minutes: "րոպե",
      seconds: "վայրկյան",
    },
    viewOnMap: "Քարտեզում տեսնել",
    confirmByEmail: "Հաստատել մասնակցությունը",
    rsvpHelp: "Խնդրում ենք հաստատել մինչև",
    tablePrefix: "Սեղան",
    tableNoun: "№",
  },
} as const;

export type Invitation = typeof INVITATION;
