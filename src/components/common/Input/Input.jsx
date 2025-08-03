export default function Input({ type, placeholder, value, onChange }) {
  return (
      <input 
        className="
          p-4
          border
          border-gray-300
          rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500
        " 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} />
  );
}