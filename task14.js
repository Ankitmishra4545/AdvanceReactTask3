const MyComponent = () => {
  const customStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    fontSize: '16px'
  };

  return (
    <div style={customStyle}>
      This is a styled component.
    </div>
  );
};

 /* In this example, customStyle is an object containing CSS properties and their respective values. 
 When applied to the div element using the style prop, it styles the text color, background color, and font size of the component. 
 */
