import React from "react";
// import PropTypes from "prop-types";
import { Input } from "../../Atoms/Input";
import { Text } from "../../Atoms/Text";

import "./styles.scss";

function FilterSection() {
  return (
    <section data-testid="filter-section" className="px-5 py-10">
      <Text variant="title" className="mb-7 text-center">
        todos
      </Text>
      <Input className="w-full" variant="search" placeholder="Buscar..." />
      <Text variant="subtitle" className="mb-3 mt-5">
        Filtrar por:
      </Text>
      <div>
        <label className="inline-flex gap-2 mr-8 items-center">
          <Input
            data-testid="input-search"
            variant="checkbox--small"
            type="checkbox"
          />
          <Text variant="small">Completados</Text>
        </label>
        <label className="inline-flex gap-2 items-center">
          <Input
            data-testid="input-search"
            variant="checkbox--small"
            type="checkbox"
          />
          <Text variant="small">Pendientes</Text>
        </label>
      </div>
    </section>
  );
}

export { FilterSection };
