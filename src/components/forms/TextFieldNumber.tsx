import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface TextFieldNumberProps {
    nombre: string;
    label: string;
    defaultValue?: string;
}

const TextFieldNumber = ({ nombre, label, defaultValue }: TextFieldNumberProps) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={nombre}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { value, onChange } }) => (
                <TextField
                    fullWidth
                    value={value ?? ""}
                    label={label}
                    type="number"
                    onChange={(event: any) => {
                        onChange(event.target.value || '');
                    }}
                />
            )}
        />
    )
}
export default TextFieldNumber;