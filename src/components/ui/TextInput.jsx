const TextInput = (props) => {
  return (
    <div className="flex w-4/5 flex-col">
      <label htmlFor="title">{props.label}</label>
      <input className ="my-2.5 p-2.5 border-1 rounded" type="text" {...props} />
    </div>
  );
};

export default TextInput;
