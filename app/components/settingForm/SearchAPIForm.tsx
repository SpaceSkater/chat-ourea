"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useOptionsStore } from "@/app/store/options";

type Inputs = {
  searchKey: string;
};

const SearchAPIForm = () => {
  const [isSave, setIsSave] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const { searchKey, setSearchKey } = useOptionsStore();

  const handleSave = (data: Inputs) => {
    if (!data.searchKey) return;
    localStorage.setItem("searchKey", data.searchKey);
    setIsSave(true);

    setTimeout(() => {
      setIsSave(false);
    }, 1000);
  };

  useEffect(() => {
    const searchKey = localStorage.getItem("searchKey");
    if (searchKey) {
      setSearchKey(searchKey);
    }
  }, []);

  return (
    <div className="space-y-2 rounded-md border p-2">
      <label className="">Web Search Service</label>
      <Select value="searchApi">
        <SelectTrigger>
          <SelectValue placeholder="Select Search" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Seach Option</SelectLabel>
            <SelectItem value="google">Google Search</SelectItem>
            <SelectItem value="searchApi">Search API</SelectItem>
            <SelectItem value="serpApi">Serp API</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        type="url"
        placeholder="Search-KEY"
        defaultValue={searchKey || ""}
        {...register("searchKey")}
      />
      <div className="flex justify-end">
        <Button onClick={handleSubmit(handleSave)} className="w-[65px]">
          {isSave ? <Check size={20} /> : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default SearchAPIForm;
