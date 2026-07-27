export const CATEGORIES = [
  {
    id: "CRANE",
    label: { ru: "Краны", uz: "Kranlar", en: "Cranes" },
    fields: [
      { key: "craneName", type: "text",
        label: { ru: "Название крана", uz: "Kran nomi", en: "Crane name" } },
      { key: "capacity", type: "text",
        label: { ru: "Грузоподъёмность", uz: "Ko'tarish quvvati", en: "Load capacity" } },
      { key: "span", type: "text",
        label: { ru: "Длина пролёта", uz: "Oraliq uzunligi", en: "Span length" } },
      { key: "dutyGroup", type: "text",
        label: { ru: "Рабочая группа", uz: "Ish guruhi", en: "Duty group" } },
    ],
  },
];

export function getCategory(id) {
  return CATEGORIES.find((c) => c.id === id);
}

export function optionLabel(field, value, lang) {
  const opt = field?.options?.find((o) => o.value === value);
  return opt ? opt.label[lang] : value;
}