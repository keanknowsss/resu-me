import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface UserInputProps {
    id: string,
    name: string,
    label: string,
    type?: string
}

function UserInput({id, name, label, type = "text"}: UserInputProps) {
  return (
    <div className="flex flex-col gap-2 pe-5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        placeholder={`Enter ${label} here`}
        className="bg-white border-gray-700"
        type={type}
      />
    </div>
  );
}

export default UserInput;
