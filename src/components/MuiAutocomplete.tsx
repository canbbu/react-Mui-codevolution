import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};
const skills = ["HTML", "CSS", "Javascript", "TypeScript", "React"];
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill
}));
export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log(skill);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        value={value}
        renderInput={(params) => <TextField {...params} label="skills" />}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
      />
      <Autocomplete
        options={skillsOptions}
        value={skill}
        renderInput={(params) => <TextField {...params} label="skills" />}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};
