export const countries = [
  { value: "AU", label: "Australia" },
  { value: "CR", label: "Costa Rica" },
  { value: "IN", label: "India" }
];

export const AU = [
  { value: "AU-NSW", label: "New South Wales" },
  { value: "AU-QLD", label: "Queensland" },
  { value: "AU-SA", label: "South Australia" },
  { value: "AU-TAS", label: "Tasmania" },
  { value: "AU-VIC", label: "Victoria" },
  { value: "AU-WA", label: "Western Australia" },
  { value: "AU-ACT", label: "Australian Capital Territory" },
  { value: "AU-NT", label: "Northern Territory" }
];
export const CR = [
  { value: "CR-A", label: "Alajuela" },
  { value: "CR-C", label: "Cartago" },
  { value: "CR-G", label: "Guanacaste" },
  { value: "CR-H", label: "Heredia" },
  { value: "CR-L", label: "Limón" },
  { value: "CR-P", label: "Puntarenas" },
  { value: "CR-SJ", label: "San José" }
];

export const IN = [
  { value: "IN-AP", label: "Andhra Pradesh" },
  { value: "IN-AR", label: "Arunachal Pradesh" },
  { value: "IN-AS", label: "Assam" },
  { value: "IN-BR", label: "Bihar" },
  { value: "IN-CG", label: "Chhattisgarh" },
  { value: "IN-GA", label: "Goa" },
  { value: "IN-GJ", label: "Gujarat" },
  { value: "IN-HR", label: "Haryana" },
  { value: "IN-HP", label: "Himachal Pradesh" },
  { value: "IN-JK", label: "Jammu and Kashmir" },
  { value: "IN-JH", label: "Jharkhand" },
  { value: "IN-KA", label: "Karnataka" },
  { value: "IN-KL", label: "Kerala" },
  { value: "IN-MP", label: "Madhya Pradesh" },
  { value: "IN-MH", label: "Maharashtra" },
  { value: "IN-MN", label: "Manipur" },
  { value: "IN-ML", label: "Meghalaya" },
  { value: "IN-MZ", label: "Mizoram" },
  { value: "IN-NL", label: "Nagaland" },
  { value: "IN-OR", label: "Orissa" },
  { value: "IN-PB", label: "Punjab" },
  { value: "IN-RJ", label: "Rajasthan" },
  { value: "IN-SK", label: "Sikkim" },
  { value: "IN-TN", label: "Tamil Nadu" },
  { value: "IN-TS", label: "Telangana" },
  { value: "IN-TR", label: "Tripura" },
  { value: "IN-UK", label: "Uttarakhand" },
  { value: "IN-UP", label: "Uttar Pradesh" },
  { value: "IN-WB", label: "West Bengal" },
  { value: "IN-AN", label: "Andaman and Nicobar Islands" },
  { value: "IN-CH", label: "Chandigarh" },
  { value: "IN-DN", label: "Dadra and Nagar Haveli" },
  { value: "IN-DD", label: "Daman and Diu" },
  { value: "IN-DL", label: "Delhi" },
  { value: "IN-LD", label: "Lakshadweep" },
  { value: "IN-PY", label: "Pondicherry" }
];

export let states = {};
states["IN"] = IN;
states["AU"] = AU;
states["CR"] = CR;

export default { countries, states };
