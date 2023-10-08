const InputGroup = ({
  activeField,
  fieldOne,
  setFieldOne,
  fieldTwo,
  setFieldTwo,
  fieldThree,
  setFieldThree,
  fieldFour,
  setFieldFour,
}) => {
  return (
    <div className="w-full">
      {activeField === 1 && (
        <input
          type="text"
          placeholder={`placeholder`}
          className="transition-all duration-100 ease-in 
             focus:border-pink-600 focus:border-4 rounded-full
              outline-none w-full indent-4 p-2"
          value={fieldOne}
          onChange={(e) => {
            setFieldOne(e.target.value);
          }}
        />
      )}

      {activeField === 2 && (
        <input
          type="text"
          placeholder={`placeholder`}
          className="transition-all duration-100 ease-in 
             focus:border-pink-600 focus:border-4 rounded-full
              outline-none w-full indent-4 p-2"
          value={fieldTwo}
          onChange={(e) => {
            setFieldTwo(e.target.value);
          }}
        />
      )}

      {activeField === 3 && (
        <input
          type="text"
          placeholder={`placeholder`}
          className="transition-all duration-100 ease-in 
             focus:border-pink-600 focus:border-4 rounded-full
              outline-none w-full indent-4 p-2"
          value={fieldThree}
          onChange={(e) => {
            setFieldThree(e.target.value);
          }}
        />
      )}

      {activeField === 4 && (
        <input
          type="text"
          placeholder={`placeholder`}
          className="transition-all duration-100 ease-in 
             focus:border-pink-600 focus:border-4 rounded-full
              outline-none w-full indent-4 p-2"
          value={fieldFour}
          onChange={(e) => {
            setFieldFour(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default InputGroup;
