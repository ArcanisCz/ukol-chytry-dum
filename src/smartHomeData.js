export const smartHomeData = {
  lights: [
    {
      id: 1,
      name: "Obývací pokoj",
      state: "off",
    },
    {
      id: 2,
      name: "Ložnice",
      state: "on",
    },
    {
      id: 3,
      name: "Kuchyně",
      state: "on",
    },
    {
      id: 4,
      name: "Chodba",
      state: "off",
    },
    {
      id: 5,
      name: "Dětský pokoj",
      state: "off",
    },
    {
      id: 6,
      name: "Jídelna",
      state: "on",
    },
  ],
  climate: {
    temperature: 24,
    humidity: 50,
  },
  blinds: "open",
  energyConsumption: [
    {
      img: "./assets/electricity.svg",
      label: "Elektřina",
      value: 36.7,
      unit: "kW/h",
    },
    {
      img: "./assets/water.svg",
      label: "Voda",
      value: 14.1,
      unit: "m3",
    },
  ],
};

export default smartHomeData;
