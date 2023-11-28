import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
import SignInUpLink from '../SignUpLink';

describe('SignInUpLink', () => {

  it('renders signup link text if signin passed', () => {
    render(
      <MemoryRouter>
        <SignInUpLink text="signin" />  
      </MemoryRouter>  
    );
    
    expect(screen.getByText(/already have an account/i)).toBeInTheDocument();
  });

  it('renders signin link text if signup passed', () => {
    render(
      <MemoryRouter>
        <SignInUpLink text="signup" />
      </MemoryRouter>
    );

    expect(screen.getByText(/don't have an account/i)).toBeInTheDocument();
  });

  it('navigates to correct path on click', () => {
    const push = vi.fn();
    // Mock navigate function 
    vi.spyOn(window, 'location', 'get').mockImplementation(push);

    render(
      <MemoryRouter>
        <SignInUpLink text="signup" />  
      </MemoryRouter>
    );

    expect(push).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText(/Sign Up/i));
    expect(push).toHaveBeenCalledWith('/signup'); 
  });

});