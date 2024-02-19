import { FormProvider, useForm } from "react-hook-form";

interface FormProps {
    onSubmit(data: {}, reset: Function): void;
    defaultValue?: any;
    children: React.ReactNode;
    afterSubmit?: Function;
}

export default function Form({onSubmit,defaultValue,children,afterSubmit}: FormProps){
    const formMethods = useForm<any>({
        defaultValues: defaultValue ?? {}
    });

    const {handleSubmit} = formMethods;

    const onSubmit1 = (data: any) => {
        onSubmit (data, formMethods.reset);
        if(afterSubmit){
            afterSubmit();
        }
    }

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit1)} autoComplete="off">
                {children}
            </form>
        </FormProvider>
    )
}