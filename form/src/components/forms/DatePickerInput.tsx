import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';


const DatePickerInput = ({ nombre, label, defaultValue }: any) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={nombre}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { value, onChange } }) => (
                <TextField type='date'
                    value={value ?? ""}
                    fullWidth
                    label={label}
                    onChange={(event: any) => {
                        onChange(event.target.value || '');
                    }}
                />
            )}
        />
    )
}
export default DatePickerInput;