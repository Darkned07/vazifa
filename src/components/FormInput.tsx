type formSe = {
  name: string;
  type: string;
  label: string;
  defaultValue: string;
};

function FormInput({ name, type, label, defaultValue }: formSe) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </div>
  );
}

export default FormInput;
