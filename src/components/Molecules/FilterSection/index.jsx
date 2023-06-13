import React from "react";

import { Input } from "@atoms/Input";
import { Text } from "@atoms/Text";
import { useGlobalsContext } from "@/context/globals";
import { useTodosContext } from "@/context/todos";

import "./styles.scss";

function FilterSection() {
  const { setFilterPending, setFilterDone, filterDone, filterPending } =
    useGlobalsContext();
  const { setSearch } = useTodosContext();
  const onSearch = (event) => setSearch(event.target.value);

  return (
    <section
      data-testid="filter-section"
      className="px-5 py-10 md:max-w-3xl md:mx-auto 2xl:max-w-4xl"
    >
      <Text variant="title" className="mb-7 text-center">
        todos
      </Text>
      <Input
        className="w-full"
        variant="search"
        placeholder="Buscar..."
        onChange={onSearch}
      />
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
