// import { render } from '@testing-library/react';
// import ErrorMessage from '../ErrorMessage';
// import { FieldError } from 'react-hook-form';

// describe('ErrorMessage', () => {
//     it('renders error message correctly', () => {
//       // Mock error message with the required 'type' property
//       const errorMessage: FieldError = { type: 'manual', message: 'This is an error message' };

//       // Render the ErrorMessage component with the mock error message
//       const { container } = render(<ErrorMessage errorMessage={errorMessage} />);

//       // Assert that the ErrorIcon is rendered
//       const errorIcon = container.querySelector('svg[data-testid="error-icon"]');
//       expect(errorIcon).toBeInTheDocument();

//       // Assert that the error message is rendered with the correct content
//       const errorMessageText = container.querySelector('div[data-testid="error-message"]');
//       expect(errorMessageText).toBeInTheDocument();
//       expect(errorMessageText!.textContent).toBe('This is an error message');
//     });

//     it('does not render anything when errorMessage is undefined', () => {
//       // Render the ErrorMessage component without an error message
//       const { container } = render(<ErrorMessage errorMessage={undefined} />);

//       // Assert that neither ErrorIcon nor error message text is rendered
//       const errorIcon = container.querySelector('svg[data-testid="error-icon"]');
//       const errorMessageText = container.querySelector('div[data-testid="error-message"]');

//       expect(errorIcon).toBeNull();
//       expect(errorMessageText).toBeNull();
//     });
// });
