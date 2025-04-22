interface ActionLink {
  path: string
  name: string
}
type Profile = {
  firstName: string;
  lastName: string;
  role:string;
  bio: string;
  tags: string[];
  age: number;
  experience: string;
  address: string;
  phone: string;
  email: string;
  govId?: File | null;
};