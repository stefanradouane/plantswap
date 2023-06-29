"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./filter.module.scss";
import FilterWindow from "./Window/FilterWindow";
import Image from "next/image";
import Icon from "../Icon/Icon";

const PlantFilter = ({
  plants,
  setSelectedFilters,
  setSearchQuery,
  selectedFilters,
  options,
}) => {
  const inputRef = useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const [filterCount, setFilterCount] = useState(0); // State to track the number of filters
  const removeFilters = () => {
    setSelectedFilters({}); // Clear the selected filters
    setFilterCount(0); // Reset the filter count

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  useEffect(() => {
    // Update the filter count whenever the selected filters change
    const count = Object.keys(setSelectedFilters).reduce((total, key) => {
      return total + setSelectedFilters[key].length;
    }, 0);
    setFilterCount(count);
  }, [setSelectedFilters]);

  const filtertoggle = collapsed
    ? "/images/icons/Close.svg"
    : "/images/icons/Arrow-down.svg";

  return (
    <section className={styles.filter}>
      <header className={styles.filter__header}>
        <form className={styles.filter__search}>
          <input
            ref={inputRef}
            type="text"
            name="search"
            id="search"
            placeholder="Zoek een stekje"
            className={styles["filter__search-input"]}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className={styles["filter--btn"]}
            onClick={(e) => {
              e.preventDefault();
              setSearchQuery(inputRef.current.value);
            }}>
            <Icon
              className={styles["filter__search--icon"]}
              iconName={"search"}
            />
          </button>
        </form>

        <section className={styles.filter__meta}>
          <button
            className={styles["filter--btn"]}
            onClick={() => {
              setCollapsed(!collapsed);
            }}>
            <span>
              Filter (<strong>{filterCount}</strong>)
            </span>

            <Image
              src={filtertoggle}
              alt="filter button icon"
              width={12}
              height={12}
            />
          </button>

          {Object.keys(selectedFilters).length > 0 && (
            <button className={styles["filter--btn"]} onClick={removeFilters}>
              Verwijder filters
            </button>
          )}
        </section>
      </header>

      <FilterWindow
        plants={plants}
        active={collapsed}
        setSelectedFilters={setSelectedFilters}
        setFilterCount={setFilterCount}
        collapsed={setCollapsed}
        options={options}
      />
    </section>
  );
};

export default PlantFilter;
