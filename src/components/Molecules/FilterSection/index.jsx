import React from "react";

import { Input } from "@atoms/Input";
import { Text } from "@atoms/Text";

import "./styles.scss";
import { useGlobalsContext } from "../../../context/globals";

function FilterSection() {
  const { setFilterPending, setFilterDone, filterDone, filterPending } =
    useGlobalsContext();

  return (
    <section data-testid="filter-section" className="px-5 py-10">
      <Text variant="title" className="mb-7 text-center">
        todos
      </Text>
      <Input className="w-full" variant="search" placeholder="Buscar..." />
      <Text variant="subtitle-filter" className="mb-3 mt-5">
        Filtrar por:
      </Text>
      <div>
        <label className="inline-flex gap-2 mr-8 items-center">
          <Input
            data-testid="input-search"
            variant="checkbox--small"
            type="checkbox"
            name="filterDone"
            onChange={(e) => setFilterDone(e.target.checked)}
            defaultChecked={filterDone}
          />
          <Text variant="small">Completados</Text>
        </label>
        <label className="inline-flex gap-2 items-center">
          <Input
            data-testid="input-search"
            variant="checkbox--small"
            type="checkbox"
            name="filterPending"
            onChange={(e) => setFilterPending(e.target.checked)}
            defaultChecked={filterPending}
          />
          <Text variant="small">Pendientes</Text>
        </label>
      </div>
    </section>
  );
}

export { FilterSection };
