'use client'
import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import { Label } from "../../atoms";

interface IProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    control: Control<T>;
    id?: string;
}

export const FormInputFile = <T extends FieldValues>({ label, control, name, id }: IProps<T>) => {
    return (
        <div className="w-full flex flex-col mb-4">
            <Label htmlFor={id || label.toLowerCase()} className="text-sm font-medium">{label}</Label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input id={id || label.toLowerCase()}
                        type="file"
                        onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            field.onChange(file);
                        }} />
                )}
            />
        </div>
    )
}