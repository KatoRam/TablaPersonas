import { TextField } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"

interface TextFieldInputProps {
    nombre: string;
    label: string;
    defaultValue?: string;
}

const TextFieldInput = ({ nombre, label, defaultValue }: TextFieldInputProps) => {
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
                    onChange={(event: any) => {
                        onChange(event.target.value || '');
                    }}
                />
            )}
        />
    )
}
export default TextFieldInput;