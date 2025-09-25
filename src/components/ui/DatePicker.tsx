import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  selectedDate?: Date;
  onChange: (date: Date | null) => void;
  className?: string;
}

export const DatePicker = ({
  selectedDate,
  onChange,
  className,
}: DatePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>(selectedDate || null);

  const handleChange = (date: Date | null) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={handleChange}
      className={`border rounded px-3 py-2 text-sm ${className}`}
      placeholderText="Select a date"
      dateFormat="MMM d"
    />
  );
};
