import React from "react";
import { Input, Button, Select } from "@platform/ui-web";

export type UsersFilterValue = {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  status?: string;
};

export default function UsersFilters({
  value,
  onChange,
  onClear,
}: {
  value: UsersFilterValue;
  onChange: (v: UsersFilterValue) => void;
  onClear: () => void;
}) {
  function set<K extends keyof UsersFilterValue>(k: K, v: string) {
    onChange({ ...value, [k]: v });
  }

  // --- Íconos inline (puedes reemplazarlos por tu <Icon name="..."/> ) ---
  const SearchIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M21 21l-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const RoleIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm7 9v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const StatusIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 9v4m0 4h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="flex flex-wrap items-end gap-3 rounded-md">
      <Input
        className="w-32"
        placeholder="ID"
        value={value.id ?? ""}
        onChange={(e) => set("id", e.target.value)}
        leftIcon={SearchIcon}
      />
      <Input
        className="w-52"
        placeholder="Nombre"
        value={value.name ?? ""}
        onChange={(e) => set("name", e.target.value)}
        leftIcon={SearchIcon}
      />
      {/*<Input
        className="w-64"
        placeholder="Email"
        value={value.email ?? ""}
        onChange={(e) => set("email", e.target.value)}
        leftIcon={SearchIcon}
      />*/}

      <Select
        className="w-44"
        value={value.role ?? ""}
        onChange={(e) => set("role", e.target.value)}
        options={[
          { value: "admin",  label: "admin"  },
          { value: "editor", label: "editor" },
          { value: "viewer", label: "viewer" },
        ]}
        placeholder="Rol"
        leftIcon={RoleIcon}
      />

      <Select
        className="w-44"
        value={value.status ?? ""}
        onChange={(e) => set("status", e.target.value)}
        options={[
          { value: "active",  label: "active"  },
          { value: "blocked", label: "blocked" },
        ]}
        placeholder="Estado"
        leftIcon={StatusIcon}
      />

      <Button className="h-9 ml-auto" variant="soft" onClick={onClear}>
        Limpiar
      </Button>
    </div>
  );
}
