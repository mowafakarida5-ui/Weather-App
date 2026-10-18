const Error = ({message}) => {

  return (
    <div>
      <p className="text-red-200 bg-red-500/20 border border-red-300/30 rounded-xl px-4 py-2">
        {message}
      </p>
    </div>
  );
};

export default Error;
