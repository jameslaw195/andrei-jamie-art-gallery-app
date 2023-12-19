export default function Colors({ colors }) {
  return (
    <>
      <h3>Color Palette:</h3>
      <div>
        {colors.map((color, index) => {
          return (
            <div
              className="colors-container"
              key={index}
              style={{ backgroundColor: color }}
            >
              {color}
            </div>
          );
        })}
      </div>
    </>
  );
}
