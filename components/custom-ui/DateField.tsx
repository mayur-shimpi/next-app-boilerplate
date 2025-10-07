"use client";

import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { CalendarIcon } from "@heroicons/react/24/outline";
import "react-datepicker/dist/react-datepicker.css";


type DateFieldProps = {
    label?: string;
    name?: string;
    value?: string;
    onChange?: (formattedDate: string) => void;
    placeholder?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    className?: string;
    minDate?: Date;
    maxDate?: Date;
};

export default function DateField({
    label,
    name,
    value,
    onChange,
    placeholder = "Select date",
    isRequired,
    isDisabled,
    className,
    minDate,
    maxDate,
}: DateFieldProps) {
    const datePickerRef = useRef<any>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    useEffect(() => {
        if (value) {
            const parsed = dayjs(value, ["DD MMM YYYY", "YYYY-MM-DD"]).toDate();
            setSelectedDate(isNaN(parsed.getTime()) ? null : parsed);
        }
    }, [value]);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        if (onChange && date) {
            const formatted = dayjs(date).format("DD MMM YYYY");
            onChange(formatted);
        }
    };

    const openDatePicker = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true);
        }
    };

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={name} className="block text-sm font-medium mb-1">
                    {label} {isRequired && <span className="text-red-500">*</span>}
                </label>
            )}

            <div className={`relative w-full flex items-center bg-white border border-gray-300 rounded-lg px-4 ${isDisabled ? "select-none" : "cursor-pointer"} ${className}`} onClick={openDatePicker}>
                <DatePicker
                    ref={datePickerRef}
                    id={name}
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText={placeholder}
                    dateFormat="dd MMM yyyy"
                    minDate={minDate}
                    maxDate={maxDate}
                    disabled={isDisabled}
                    className={`w-full border-none bg-white rounded-lg px-0 py-2.5 focus:border-soboBlue focus:ring-0 focus:outline-none ${isDisabled && "bg-gray-100 text-gray-400"
                        } ${className}`}
                    popperClassName="shadow-lg rounded-lg"
                    showPopperArrow={false}
                />

                <button
                    type="button"
                    onClick={openDatePicker}
                    className="size-5 text-gray-400 ml-auto"
                    disabled={isDisabled}
                >
                    <CalendarIcon className="size-5"/>
                </button>

            </div>
        </div>
    );
}
