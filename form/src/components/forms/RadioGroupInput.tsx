import { RadioGroup, FormControl, FormLabel, FormControlLabel, Radio } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface RadioGroupInputProps {
    nombre: string;
    label: string;
    defaultValue: string;
    radioOptions: any[];
}

const RadioGroupInput = ({ nombre, defaultValue, radioOptions }: RadioGroupInputProps) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={nombre}
            control={control}
            defaultValue={defaultValue ?? ""}
            render={({ field:{ value, onChange } }) => {
                return (
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Genero</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={value}
                            name="radio-buttons-group"
                        >{
                                radioOptions.map((option: any, index: number) => (
                                    <FormControlLabel value={option.value} key={index} control={<Radio onChange={(e)=>onChange(e)} />} label={option.label} />))}
                        </RadioGroup>
                    </FormControl>
                );
            }
            }
        />
    )
}
export default RadioGroupInput;