import { selector } from "recoil";
import { filterState, salariesState, searchParamState } from "./atoms";

export const filteredSalariesState = selector({
  key: "filteredSalariesState",
  get: ({ get }) => {
    const salaries = get(salariesState);
    const filter = get(filterState);
    const searchParam = get(searchParamState);

    switch (filter) {
      case "":
        return salaries;

      case "sector":
        return salaries.filter((s) =>
          s.sector.toLowerCase().includes(searchParam)
        );

      case "jobTitle":
        return salaries.filter((s) =>
          s.jobTitle.toLowerCase().includes(searchParam)
        );

      case "company":
        return salaries.filter((s) =>
          s.company.toLowerCase().includes(searchParam)
        );

      case "city":
        return salaries.filter((s) =>
          s.city.toLowerCase().includes(searchParam)
        );

      default:
        return salaries;
    }
  },
});

/* A selector that returns an array of sectors that are available in the salaries data. */
export const groupedSalariesState = selector({
  key: "groupedSalariesState",
  get: ({ get }) => {
    const salaries = get(salariesState);
    const filteredSalaries = get(filteredSalariesState);
    const salariesSectors = salaries && salaries.map((s) => s.sector);
    const availableSectors = Array.from(new Set(salariesSectors));

    const groupedSalaries = availableSectors.map((sector) => {
      const correspondingSalaries = filteredSalaries.filter(
        (salary) => salary.sector === sector
      );
      return {
        sector: sector,
        salaries: correspondingSalaries,
      };
    });
    return groupedSalaries;
  },
});
