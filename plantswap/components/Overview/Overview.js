"use client";

import React, { useState, useEffect } from "react";
import styles from "./overview.module.scss";
import PlantCard from "../PlantItem/PlantItem.js";
import Filter from "../Filter/Filter.js";

const Overview = (plants) => {
  const [filteredPlants, setFilteredPlants] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const options = plants.formInfo
    .map((a) => a.formSection.map((b) => b.fields))
    .flat(2)
    .map((c) => (c.optionList !== null ? c : undefined))
    .filter((d) => d)
    .filter((e) => {
      if (
        e.name === "origin" ||
        e.name === "fertilizer" ||
        e.name === "poisonous"
      ) {
        return e;
      }
    });

  useEffect(() => {
    // Filter the plants based on the selected filters
    const filterResult = plants.data.filter((plant) => {
      return (
        Object.entries(selectedFilters).every(([subject, options]) => {
          // Check if the plant has at least one of the selected options
          return options.some((option) => {
            if (plant[subject] === null) return false;
            return plant[subject] === option;
          });
        }) &&
        (searchQuery === "" ||
          plant.plantName.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });

    setFilteredPlants(filterResult);
  }, [plants, selectedFilters, searchQuery]);

  const usedPlants = filteredPlants || plants.data;

  return (
    <section className={styles.overview}>
      <Filter
        options={options}
        plants={usedPlants}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        setSearchQuery={setSearchQuery}
      />

      <section className={styles.overview__meta}>
        <p>
          <span>{usedPlants.length}</span> Groene kandidaten
        </p>
        {/* <aside className={styles["overview__meta-legenda"]}>leganda</aside> */}
      </section>

      <section className={styles.overview__plants}>
        {usedPlants.length === 0 ? (
          <p>Geen planten gevonden</p>
        ) : (
          usedPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} options={options} />
          ))
        )}
      </section>
    </section>
  );
};

export default Overview;
