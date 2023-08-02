// global.d.ts

// Declare a new interface that extends JSX.IntrinsicElements
declare namespace JSX {
  interface IntrinsicElements {
    // Include the testID prop
    'mock-startup-screen': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      testID?: string;
    };
    'mock-home-screen': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      testID?: string;
    };
    'mock-error-boundary': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      testID?: string;
    };
  }
}
