import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import type { ChangeEventHandler } from "react";
import { Button } from "@/components/ui/button";

interface UserInputProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  setShow?: Function;
  type?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}


function UserInput({ id, name, label, type = "text", value, onChange, setShow }: UserInputProps) {

  return (
    <div className="flex flex-col gap-2 pe-5">
      <div className="flex justify-between items-end">
        <Label htmlFor={id}>{label}</Label>
        {setShow && (
          <Button variant="link" onClick={() => setShow(false)} className="p-0 h-3.5">
            Remove
          </Button>
        )}
      </div>

      {type === "textarea" ? (
        <Textarea
          id={id}
          name={name}
          className="bg-white border-gray-700 h-30 resize-none"
          rows={10}
          placeholder={`Enter ${label} here`}
          value={value}
          onChange={onChange}
        />
      ) : (
        <Input
          id={id}
          name={name}
          placeholder={`Enter ${label} here`}
          className="bg-white border-gray-700"
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default UserInput;
