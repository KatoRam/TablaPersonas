import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

/* interface SelectInputFieldProps {
    nombre: string;
    label: string;
    defaultValue?: string;
    menuOptions: any[];
    onChange?: Function;
} */


const SelectInput = ({ nombre, label, defaultValue, menuOptions, ...rest }: any) => {
    const { control } = useFormContext();
    return (
        <FormControl fullWidth {...rest}>
            <Controller
                name={nombre}
                control={control}
                defaultValue=""
                render={({ field }) => {
                    return (
                        <>
                            <InputLabel id={label} color={"secondary"}>
                                {label}
                            </InputLabel>

                            <Select
                                {...field}
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label={label}
                                value={field.value}
                                onChange={(e) => {
                                    field.onChange(e);
                                    rest.onChange?.(e);

                                }}
                            >
                                <MenuItem value={0}>Seleccionar..</MenuItem>
                                {
                                    menuOptions.map((item: any, index: any) => (
                                        <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                    ))
                                }

                            </Select>
                        </>
                    )
                }}
            />
        </FormControl>
    )
}
export default SelectInput;