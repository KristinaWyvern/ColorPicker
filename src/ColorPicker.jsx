import React, { useState } from "react";

export default function EventInvitation() {
    const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
    const [focusedIndex, setFocusedIndex] = useState(null);
    const colors = [
        { name: "Blue", hex: "#a2dffe" },  
        { name: "Green", hex: "#84e0d9" },
        { name: "Yellow", hex: "#f2fad0" },
        { name: "Orange", hex: "#fec08c" },      
        { name: "Pink", hex: "#feb5d2" },
        { name: "Violet", hex: "#eacae1" }
      ];
      function handleClick(color) {
        setSelectedColor(color);
      }
    
      function handleMouseEnter(colorHex) {
        setSelectedColor({ hex: colorHex });
      }
      function handleMouseLeave() { 
        setSelectedColor({ hex: null, name: null});
      }
      
      function handleFocus(index) {
        setSelectedColor(colors[index]);
      }
    
      function handleBlur() {
        setSelectedColor({ hex: null, name: null});
      }
    
    function handleKeyDown(e) {
        let nextIndex = focusedIndex;
    
        if (e.key === 'ArrowRight') {
            nextIndex = focusedIndex + 1;
        } else if (e.key === 'ArrowLeft') {
            nextIndex = focusedIndex - 1;
        }
    
        if (nextIndex < 0 || nextIndex >= colors.length) return;
    
        setFocusedIndex(nextIndex);
        setSelectedColor(colors[nextIndex]);
    }


  return (
    <div className="color-picker">
   <h1>Color Picker</h1>
   <div className="color-list">
   {colors.map((color, index) => (
    
      <div 
        key={index}
       className={`color-item ${focusedIndex === index ? 'focused' : ''}`}
       style={{ backgroundColor: color.hex }}
       onClick={() => handleClick(color)}
       onMouseEnter={() => handleMouseEnter(color.hex)}
       onMouseLeave={handleMouseLeave}
       onFocus={() => handleFocus(index)}
       onBlur={handleBlur}
       onKeyDown={(e) => handleKeyDown(e, index)}
       tabIndex={0}
      >
        {selectedColor.hex === color.hex && (
          <span className="color-code">{selectedColor.name || color.hex}</span>
        )}
      </div>
    ))}
   </div>
  </div>
  );
}

