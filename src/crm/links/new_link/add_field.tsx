import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AddFields = ({ setAddF, setLink }: any) => {
  const [fields, setField] = useState<any>({
    title: "",
    type: "text",
    options: [],
    isRequired: true,
  });

  const [option, setOption] = useState("");
  const [error, setError] = useState<string | null>(null); // For error handling

  // Handle input changes for title, type, and isRequired
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Check if the element is a checkbox and use "checked" value for it
    const newValue = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setField((prevFields: any) => ({
      ...prevFields,
      [name]: newValue,
    }));
  };

  // Add a new option to the options array
  const addField = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (option.trim()) {
      setField((prevFields: any) => ({
        ...prevFields,
        options: [...prevFields.options, { option }],
      }));
      setOption("");
    }
  };

  // Remove an option from the options array
  const removeOption = (index: number) => {
    setField((prevFields: any) => ({
      ...prevFields,
      options: prevFields.options.filter((_: any, i: number) => i !== index),
    }));
  };

  // Add the current field to link.fields with validation for title and options if type is "Options"
  const submitField = () => {
    // Title validation
    if (!fields.title.trim()) {
      setError("Title is required");
      return;
    }

    // Options validation if field type is "options"
    if (fields.type === "options" && fields.options.length < 2) {
      setError("At least 2 options are required for 'Options' field type");
      return;
    }

    // If validation passes, update the link state
    setLink((prevLink: any) => ({
      ...prevLink,
      fields: [...prevLink.fields, fields], // Append the current field to the existing fields array
    }));

    setAddF(false); // Close modal after adding the field
  };

  return (
    <>
      <div className="pop-modal bg-color-code-3 left" onClick={() => setAddF(false)}>
        <div className="my-col-6 rad-20 ov-scroll-400 h-500 bg-color-code-2s my-bottom-50" onClick={(e) => e.stopPropagation()}>
          <div className="my-col-10 off-1 down-4">
            <div>
              <span className="px13 interBold centeed color-code-1 my-mother">Add Field</span>
            </div>

            {/* Title Input */}
            <div className="my-mother down-3 left">
              <span className="interBold">Title</span>
              <input
                type="text"
                name="title"
                className="input down-2 bg-color-code-3 fla-border-1 rad-20 alice px10"
                onChange={(e) => {
                  handleInputChange(e);
                  setError(null); // Clear error when typing
                }}
              />
              {/* Display error message if title is empty */}
              {error && <span className="error-message" style={{ color: 'red', fontSize: '12px' }}>{error}</span>}
            </div>

            {/* Field Type Select */}
            <div className="my-mother left down-3">
              <span className="interBold">Field type</span>
              <div className="my-mother fla-border-1 input rad-20 bg-color-code-3 down-2">
                <select
                  name="type"
                  className="input rad-20 alice px9"
                  onChange={handleInputChange}
                >
                  <option value="text">Text</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Number</option>
                  <option value="number">Number</option>
                  <option value="date">Date</option>
                  <option value="options">Options</option>
                  <option value="longtext">Longtext</option>
                </select>
              </div>
            </div>

            {/* Is Required Checkbox */}
            <div className="my-mother left down-3">
              <input
                id="re"
                name="isRequired"
                type="checkbox"
                checked={fields.isRequired}
                onChange={handleInputChange}
              />
              <label htmlFor="re" className="px9">isRequired</label>
            </div>

            {/* Options Input (only visible if type is 'Options') */}
            {fields.type === "options" && (
              <div className="my-mother down-3">
                <div>
                  <span className="InterLight faded-2 px9">Add options to choose from</span>
                </div>
                <div className="my-mother">
                  <form action="" className="my-col-12 gap-elements down-2" onSubmit={addField}>
                    <input
                      type="text"
                      value={option}
                      onChange={(e: any) => setOption(e.target.value)}
                      className="input fla-border-1 bg-color-code-3 rad-30 px9 alice"
                    />
                    <button type="submit" className="pd-10 rad-30 c-pointer fla-border-1 bg-color-code-3 color-code-1 shadow">
                      Add
                    </button>
                  </form>

                  {/* Display Added Options */}
                  <div className="my-mother v-gap-20 down-2">
                    {fields?.options?.map((i: any, index: number) => (
                      <span
                        className="pd-10 rad-30 centered-align gap-20 bg-color-code-3 InterSemiBold color-code-1 px9"
                        key={index}
                      >
                        {i.option}{" "}
                        <i
                          className="fas fa-times pd-5 c-pointer"
                          onClick={() => removeOption(index)}
                        ></i>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Submit the field */}
            <div className="my-mother down-5 right">
              <span
                className="pd-10 rad-10 bg-color-code-1 alice px9 interBold c-pointer"
                onClick={submitField} // Call submitField when clicked
              >
                Add field
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFields;
