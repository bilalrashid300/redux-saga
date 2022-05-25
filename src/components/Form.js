import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { setUser } from "../redux/actions/users";

const Form = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setData(data);
    dispatch(setUser(data));
  }

  const options = [
      {value: 'male', label: 'Male'},
      {value: 'female', label: 'Female'},
  ]

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="formGroup">
        <input className="formControl" placeholder="Username" type="text" {...register("username", { required: "Firstname is required" })} />
        {errors.username && <label className="error">{errors.username.message}</label>}
      </div>
      <div className="formGroup">
        <input className="formControl" placeholder="Name" type="text" {...register("name", { required: "Lastname is required" })} />
        {errors.name && <label className="error">{errors.name.message}</label>}
      </div>
      <div className="formGroup">
        <input className="formControl" placeholder="Email" type="email" {...register("email", { required: "Email is required" })} />
        {errors.email && <label className="error">{errors.email.message}</label>}
      </div>
      <div className="formGroup">
        <Controller
            control={control}
            defaultValue={options.map(c => c.value)}
            name="gender"
            render={({ field: { onChange, value, ref }}) => (
                <Select
                    inputRef={ref}
                    value={options.filter(c => value.includes(c.value))}
                    onChange={(val) => onChange(val.value)}
                    options={options}
                />
            )}
        />
        {/* {errors.gender && <label className="error">{errors.gender.message}</label>} */}
      </div>
      <button className="btn" type="submit">Submit</button>
      <pre className="dataJson">{JSON.stringify(data, undefined, 2)}</pre>
    </form>
  );
};

export default Form;
