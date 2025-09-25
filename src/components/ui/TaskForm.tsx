import { Dialog } from "radix-ui";
import { Select } from "radix-ui";
import { Button } from "./Button";
import { Task, TaskFormData } from "@/types";
import { X } from "lucide-react";
import React, { useState } from "react";
import clsx from "clsx";
import { generateId } from "@/utils";
import { DatePicker } from "./DatePicker";
import { TaskCard } from "./TaskCard";

interface TaskFormProps {
  onSubmit: (data: Task) => void;
  initialData?: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
export const TaskForm = ({ onSubmit, initialData,  setTasks}: TaskFormProps) => {
  const todayDate = new Date();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || "",
  );
  const [priority, setPriority] = useState<TaskFormData["priority"]>(
    initialData?.priority || "low",
  );
  const [dueDate, setDueDate] = useState(initialData?.dueDate ?? undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData: Task = {
      id:initialData?.id ?? generateId(),
      createdAt: todayDate,
      title,
      description: description || undefined,
      priority,
      dueDate: dueDate || undefined,
      completed: false,
    };
    onSubmit(formData);
    if (!initialData) {
      setTitle("");
      setDescription("");
      setPriority("low");
      setDueDate(undefined);
    }
    setOpen(false);
  };
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        {initialData ? (
          <TaskCard task={initialData}  setTasks={ setTasks}/>
        ) : (
          <Button>Add Task</Button>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title></Dialog.Title>
          <Dialog.Description></Dialog.Description>
          <form onSubmit={handleSubmit}>
            <fieldset className="my-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-violet11"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-start gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-violet11"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="inline-flex h-[120px] w-full flex-1 items-center justify-center rounded py-2.5 px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-start gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-violet11"
                htmlFor="priority"
              >
                Priority
              </label>
              <Select.Root
                required
                onValueChange={(e) =>
                  setPriority(e as TaskFormData["priority"])
                }
                value={priority}
              >
                <Select.Trigger className="w-[150px] inline-flex h-[35px]  items-center  rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8">
                  <Select.Value placeholder="Select a priority" />
                  <Select.Icon />
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content>
                    <Select.ScrollUpButton />
                    <Select.Viewport className="bg-white w-full  rounded shadow-[0_0_0_1px] shadow-violet7 outline-none">
                      <SelectItem value="low">low</SelectItem>
                      <SelectItem value="medium">medium</SelectItem>
                      <SelectItem value="high">high</SelectItem>
                    </Select.Viewport>

                    <Select.Arrow />
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </fieldset>
            <fieldset className="mb-[15px] flex items-start gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-violet11"
                htmlFor="description"
              >
                Due Date
              </label>
              <DatePicker
                selectedDate={dueDate}
                onChange={(value) => setDueDate(value ?? undefined)}
              />
            </fieldset>

            <div className="mt-[25px] flex justify-end">
              <Button type="submit">Save</Button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
type SelectItemProps = React.ComponentPropsWithoutRef<typeof Select.Item> & {
  children: React.ReactNode;
  className?: string;
};
const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  SelectItemProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      ref={forwardedRef}
      className={clsx(
        "relative flex h-[25px] select-none items-center px-2.5 text-[15px] leading-none text-violet11 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none",
        className,
      )}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});
