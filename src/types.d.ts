interface ILoginData {
  email: string;
  password: string;
}

interface ITask {
  title: string;
  due: { value: string; label: string };
  responsible: string;
  type: { value: string; label: string };
  status: { value: string; label: string };
}
