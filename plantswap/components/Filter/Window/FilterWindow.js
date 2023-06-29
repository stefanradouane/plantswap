import { useEffect, useRef } from "react";
import styles from "./window.module.scss";
import Detail from "../Detail/Detail";
import Image from "next/image";

const FilterWindow = ({
  plants,
  active,
  collapsed,
  setSelectedFilters,
  setFilterCount,
  options,
}) => {
  const filterMenuRef = useRef(null);

  const handleFilterChange = (checkbox, subject, value) => {
    setSelectedFilters((prevFilters) => {
      if (checkbox.checked) {
        // Add the filter to the list
        const filters = {
          ...prevFilters,
          [subject]: value
            ? [...(prevFilters[subject] || []), value]
            : prevFilters[subject].filter((item) => item !== subject),
        };

        setFilterCount(getFilterCount(filters));
        return filters;
      } else {
        // Remove the filter from the list
        const filters = {
          ...prevFilters,
          [subject]: prevFilters[subject].filter((item) => item !== value),
        };

        if (filters[subject].length === 0) {
          delete filters[subject];
        }

        setFilterCount(getFilterCount(filters));
        return filters;
      }
    });
  };

  const getFilterCount = (filters) => {
    let count = 0;
    Object.keys(filters).forEach((key) => {
      count += filters[key].length;
    });
    return count;
  };

  const handleFilterResultClick = () => {
    collapsed(false); // Close the filter window
  };

  useEffect(() => {
    filterMenuRef.current.setAttribute("aria-expanded", `${active}`);
  }, [active]);

  return (
    <section
      ref={filterMenuRef}
      className={styles.filterWindow}
      aria-expanded={false}>
      <form className={styles.filterWindow__list}>
        {options.map((option) => (
          <Detail
            key={option.name}
            options={option.optionList.optionName}
            name={option.name}
            subject={option.title}
            onFilterChange={handleFilterChange}
          />
        ))}
      </form>
      <section
        className={styles.filterWindow__result}
        onClick={handleFilterResultClick}>
        <p className={styles["filterWindow__result--amount"]}>
          {/* <span>10</span> resultaten bekijken */}
          <span>{plants.length}</span> resultaten bekijken
        </p>
        <Image
          src="/images/icons/Arrow-right.svg"
          alt="arrow"
          width={24}
          height={24}
        />
      </section>
    </section>
  );
};

export default FilterWindow;
