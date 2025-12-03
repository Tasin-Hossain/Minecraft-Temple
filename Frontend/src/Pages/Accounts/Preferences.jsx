import React, { useState } from 'react';

import Button from '../../Components/ui/Button/Button';
import Input from '../../Components/ui/Input/Input';
import SelectInput from '../../Components/ui/Select/Select';
import { ChromePicker } from 'react-color';
import { useTheme } from '../../Components/Theme/UseTheme';

const Preferences = () => {
  const { theme, setTheme, color, setColor, resetTheme } = useTheme();
  const [showPicker, setShowPicker] = useState(false);

  // Theme options
  const options = [
    { isHeader: true, label: 'Use default style: Light' },
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ];

  // Handle color picker change
  const handleChangeComplete = (color) => {
    setColor(color.hex); // Use hex for color
  };

  // Handle manual input changes (to allow typing color codes)
  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  // Toggle visibility of the color picker
  const handleTogglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div className="bg-(--accent) rounded-md h-auto">
      {/* Preferences */}
      <div className="flex flex-col">
        <h1 className="py-5 px-14 text-[20px] capitalize text-(--white-color) border-b border-(--border-color)">
          Preferences
        </h1>

        {/* Section 1 */}
        <div className="flex px-14 h-auto">
          {/* Label Side */}
          <div className="bg-(--secondary) w-[30%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
            <div className="h-14 mb-5 flex flex-col justify-center">
              <label htmlFor="style" className="text-(--dim-white-color)">
                Style:
              </label>
            </div>

            <div className="h-14 mb-5 flex flex-col justify-center">
              <label htmlFor="style" className="text-(--dim-white-color)">
                Theme Colour:
              </label>
            </div>
          </div>

          {/* Input Side */}
          <div className="bg-(--secondary) w-[70%] py-4 px-4">
            {/* Style Selector */}
            <div className="h-14 mb-5">
              <SelectInput
                options={options}
                value={theme}
                onChange={(value) => setTheme(value)}
                placeholder="Choose style"
                className="w-full!"
              />
            </div>

            {/* Theme color */}
            <div className="h-20 mb-5">
              <div className="h-15 flex items-center justify-center">
                <Input
                  placeholder="Enter color (e.g., rgb(253, 232, 42) or #f5d300)"
                  className="w-full!"
                  value={color}
                  onChange={handleInputChange}
                />
                <div
                  className="w-8 h-8 ml-2 rounded-md border cursor-pointer"
                  style={{ backgroundColor: color }}
                  onClick={handleTogglePicker}
                ></div>
                {showPicker && (
                  <div className="absolute right-20 top-96 bg-(--secondary) rounded">
                    <ChromePicker
                      color={color}
                      onChangeComplete={handleChangeComplete}
                    />
                    <Button className="m-4" onClick={() => setShowPicker(false)}>
                      Update
                    </Button>
                  </div>
                )}
              </div>
              <span>
                Enter a HEX color value such as #5d82e, #7e3e82, or #3e5c82
              </span>
            </div>

            {/* Reset Button */}
            <div className="flex justify-end mt-5">
              <Button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={resetTheme} // Call resetTheme from context
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
