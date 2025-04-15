import React from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function Search() {
  async function searchAction(formData: FormData) {
    "use server";
    const searchTerm = formData.get("search");
    if (typeof searchTerm !== "string") {
      throw new Error("Search term must be a string");
    }

    console.log(searchTerm);
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <form action={searchAction} className="flex gap-2">
          <Input type="text" placeholder="Search..." name="search" />
          <Button type="submit" aria-label="Search">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}
